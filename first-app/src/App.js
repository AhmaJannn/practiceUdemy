import React from "react";
import './App.css';


// function WhoAmI(props) {
function WhoAmI({name, surname, link}) {
  return(
      <div>
        <h1>My name is {name()}, surname - {surname}</h1>
          <a href={link}>My profile</a>
      </div>
  )
}
function App() {
  return (
    <div className="App">
        <WhoAmI name={() => {return "John"}} surname="Smith" link="facebook.com"/>
        <WhoAmI name={() => {return "Alex"}} surname="Shepard" link="vk.com"/>
        {/*<WhoAmI name={{firstname: "Alex"}} surname="Shepard" link="vk.com"/>*/}
    </div>
  );
}

export default App;