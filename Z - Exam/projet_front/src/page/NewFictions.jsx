import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../component/Header";
import FictionsMain from "./FictionsMain";

const NewFictions = () => {
    const [fictions, setFictions] = useState(null);

    useEffect(() => {
      (async () => {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
  
        const fictionsResponseData = await fictionsResponse.json();
  
        setFictions(fictionsResponseData);
      })();
    }, []);
  

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <Header />
          <div className="content-container">
            <section>
              <h1>Liste des Fictions:</h1>
              <ul>
              {fictions ? (
        <>  
          {fictions.map((fiction) => {
            return (
              <article>
                <Link to={`/newfic/details/${fiction.id}`}>
                <h4>{fiction.fictionname}</h4></Link>
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
              </ul>
            </section>
            
          </div>
        </div>
      </main>
    </body>
  );
}

export default NewFictions;
