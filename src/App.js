import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [name, setName] = useState([]);
  useEffect(()=>{
      fetch('https://api.github.com/users/iceak7/repos')
      .then(res=>res.json())
      .then(data =>{
          setName(data)
      })
  },[]);

  
  return (
    <div className="App">
            <h1 className="pageTitle">Portfolio</h1>
      <div className="portfolioMain">

      {name.map((names, index)=>(
        <>

        <div key={index}>
        <div  className="portfolioItem">
          <div className="portoflioImageContainer">
            <img src="github-logo.png" alt="FPL Logo"/>
          </div>
          <div className="portfolioInfo">
            <h2>{names.name}</h2>
            <a className="button" href={'#popup'+index}>Mer Info</a>
          </div>
        </div>

        <div id={'popup'+index} className="overlay">
          <div className="popup">
            <h2>{names.name}</h2>
            <a className="close" href="#">&times;</a>
            <div className="content">
              {names.description===null ? 'Ingen beskrivning finns för det här projektet.' : names.description}
              <p><a href={names.html_url}>Länk</a></p>
            </div>
          </div>
        </div>
        </div>

        </>
        ))}
        </div>
    </div>
  );
}

export default App;
