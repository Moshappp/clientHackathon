import axios from "axios";
import "./App.css";

function App() {
  const handleClick = async () => {
    try {
      const resp = await axios.get("https://theravr.onrender.com/");
      console.log(resp.data);
    } catch (e) {}
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={handleClick}>Send request</button>
    </div>
  );
}

export default App;
