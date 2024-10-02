import "./App.css";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";

export default function App() {
  return (
    <div className="relative">
      {/* Header */}
     <Header/>
      {/* Home */}
      <Home />
    </div>
  );
}
