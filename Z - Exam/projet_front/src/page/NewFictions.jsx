import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../component/Header";
import FictionsMain from "./FictionsMain";

const NewFictions = () => {
  const [fictionNames, setFictionNames] = useState(null);

  useEffect(() => {
    const fetchFictionNames = async () => {
      try {
        const fictionsResponse = await fetch("http://localhost:3000/api/fanfics");
        const fictionsResponseData = await fictionsResponse.json();
        setFictionNames(fictionsResponseData);
      } catch (error) {
        console.error('Erreur lors de la récupération des noms de fiction:', error);
      }
    };

    fetchFictionNames();
  }, []);

  return (
    <body>
      <main>
        <div className="main_rectangle">
          <Header />
          <div className="content-container"> {/* Ajout de la classe pour le flex */}
            <section>
              <h1>Liste des Fictions:</h1>
              <ul>
              {fictionNames ? (
  <>
    {fictionNames.map((fictionName, index) => (
  <Link to={`/newfic/details/${fictionName.id}`} key={index}>
    <p>{fictionName.fictionname}</p>
  </Link>
))}

  </>
) : (
  <p>En cours de chargement</p>
)}

              </ul>
            </section>
            <div>
              <FictionsMain />
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default NewFictions;
