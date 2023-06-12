import '../app/globals.css';
import Editor from './components/editor.jsx';
import { useRef } from 'react';
import Image from 'next/image'
import mypic from '../public/worqhatlogo.png'

export default function Home() {
  const editorRef = useRef(null);
  const handleGenerateCodeClick = () => {
    const textBoxValue = document.getElementById('textbox1').value;
    const selectedLanguage = document.getElementById('language').value;
    
    // Do something with the textBoxValue and selectedLanguage
    alert('Entered Text: '+ textBoxValue);
    alert('Selected Language: '+selectedLanguage);
  };

  return (
    <div className="container">
      <h1>Text to Code Generator</h1>
      <input type="text" id="textbox1" className="input-animation" placeholder="Enter your text" />
      <div>
        <select id="language" className="select-animation">
          <option value="">Select language</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
        </select>
      </div>
      <button id="generateButton" onClick={handleGenerateCodeClick}>Generate Code</button>
      <div className="edit">
        <Editor editorRef={editorRef} />
        <br></br>
      </div>
      <div>
        <h2>By</h2>
        <a href="https://worqhat.com">
          <Image
            src={mypic}
            alt="Picture of the author"
          />
        </a>
      </div>
    </div>
  );
}
