import './App.css';
import {useState} from "react";
import { marked } from 'marked';


//a header (H1 size), a sub header (H2 size), a link, inline code, a code block,
// a list item, a blockquote, an image, and bolded text
function App() {
  const [val,setVal] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

 \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

1. First item
2. Second item
3. Third item

> blockquote

![alt text](image.jpg)

**bold text**
 `)
 marked.setOptions({
  breaks:true 
 })

  return (
    <div className="App container text-center" style={{marginTop:"50px"}}>
      <textarea name="" id="editor" value={val} onChange={(event)=>{
        setVal(event.target.value)
        
      }}></textarea>
      <div id="preview container text-center"
      dangerouslySetInnerHTML={{ __html: marked(val)}}
      ></div>
    </div>
  );
}

export default App;
