import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const FictionsMain = () => {
    const { id } = useParams();

  const [fiction, setFiction] = useState(null);

  useEffect(() => {
    (async () => {
      const fictionResponse = await fetch("http://localhost:3000/api/fanfics/" + id);
      const fictionResponseData = await fictionResponse.json();

      setFiction(fictionResponseData.data);
    })();
  }, []);

  return (
    <>
      {fiction ? (
        <article>
            <p>test</p>
          <h2>{fiction.fictionname}</h2>
          <p>{fiction.summary}</p>
          <p>{fiction.story}</p>
        </article>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default FictionsMain;
