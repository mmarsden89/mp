import "./App.css";
import background from "./Styles/Assets/background.jpeg";
import logo from "./Styles/Assets/logo.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} className="logo" />
      <div className="coming-soon-container">
        <div className="coming-soon">we're building</div>
      </div>
      <div className="footer">
        <div></div>
        <div className="c"> c 2021 Marsden Properties</div>
        <div>(123)456-7890</div>
      </div>
    </div>
  );
}

export default App;
