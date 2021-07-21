import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ImageGallery from "./components/ImageGallery";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  return (
    <div className="row m-0">
      <h2>Let's get started!</h2>
      <SearchBox input={input} setInput={setInput} />
      <ul className="list-unstyled">
        <ImageGallery query={input} />
      </ul>
    </div>
  );
}

export default App;
