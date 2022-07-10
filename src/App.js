import React from "react";
// import ColorList from "./ColorList";
import './App.css';
import RouteFunc from "./Routes"
import {Navbar} from "./NavBar"

function App() {
  return (
    <div className="App">
     <h1> It's working!</h1>
     {/* <ColorList /> */}
     <Navbar />
     <RouteFunc />
    </div>
  );
}

export default App;
