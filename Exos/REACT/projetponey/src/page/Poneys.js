import Header from '../component/Header';
import Footer from '../component/Footer';

function Poneys() {       
    const poneys = [
        {
          id: 1,
          name: "Poney 1",
          color: "red",
          age: 2,
          isMagic: true,
          img: "https://i.servimg.com/u/f77/15/21/10/52/tm/poney_11.jpg"
        },
        {
          id: 2,
          name: "Poney 2",
          color: "blue",
          age: 3,
          isMagic: false,
          img: "https://www.bde.enseeiht.fr/~arthaum/pony-lovers/images/pony5.jpg"
        }, 
        {
          id: 3,
          name: "Poney 3",
          color: "green",
          age: 4,
          isMagic: true,
          img: "https://i.pinimg.com/236x/54/e9/72/54e97217072603f01926cfad29683b8a.jpg"
        },
        {
          id: 4,
          name: "Poney 4",
          color: "yellow",
          age: 5,
          isMagic: false,
          img: "https://previews.123rf.com/images/zuzule/zuzule1311/zuzule131100332/24068582-poney-gris-dr%C3%B4le-avec-glowes-en-hiver-ensoleill%C3%A9.jpg"
        },
        {
          id: 5,
          name: "Poney 5",
          color: "purple",
          age: 6,
          isMagic: true,
          img: "https://thumbs.dreamstime.com/b/poney-dr-le-30904552.jpg"
        },
        {
          id: 6,
          name: "Poney 6",
          color: "pink",
          age: 7,
          isMagic: false,
          img: "https://c8.alamy.com/compfr/df2r70/pony-avec-drole-hairstyle-regarde-dans-l-appareil-photo-df2r70.jpg"
        },
        {
          id: 7,
          name: "Poney 7",
          color: "black",
          age: 8,
          isMagic: true,
          img: "https://risibank.fr/cache/medias/0/21/2136/213683/full.png"
        },
        {
          id: 8,
          name: "Poney 8",
          color: "white",
          age: 9,
          isMagic: false,
          img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40dc4d2b-3bda-4ed8-9fbf-690f3609c720/dfuq8da-9bfd6d5b-51ac-45a8-8983-4ac6e0412b17.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwZGM0ZDJiLTNiZGEtNGVkOC05ZmJmLTY5MGYzNjA5YzcyMFwvZGZ1cThkYS05YmZkNmQ1Yi01MWFjLTQ1YTgtODk4My00YWM2ZTA0MTJiMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.uK6LeQjDmjOsaAKkfy1qKE4fN9LV7e-as3ZcO4fdFyQ"
        },
        {
          id: 9,
          name: "Poney 9",
          color: "brown",
          age: 10,
          isMagic: true,
          img: "https://w7.pngwing.com/pngs/796/406/png-transparent-pinkie-pie-rarity-rainbow-dash-pony-applejack-pinkie-pie-balloons-mammal-heart-balloon.png"
        },
        {
          id: 10,
          name: "Poney 10",
          color: "grey",
          age: 11,
          isMagic: false,
          img: "https://www.abcducheval.com/wp-content/uploads/horse-lovers.jpg"
        },
      ];

      return (
        <main className="mainOrigin">
          <Header />       
            <main>
                {poneys.map((poney) => {                
                    return (
                        <article>
                            <h2>Nom: {poney.name}</h2>
                            <p>Couleur: {poney.color}</p>
                            <p>Age: {poney.age}</p>
                            <p><img src={poney.img} alt=""></img></p>
                        </article>
                    )}
                )}
            </main>
        <Footer />
        </main>
      )
}
export default Poneys;