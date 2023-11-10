import Header from '../component/Header';
import Footer from '../component/Footer';

function Apropos() {  
    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };
      
      
    return (
        <main>
          <Header />       
            <li className='ulHeader03'>
               <p>Le patron c'est <strong>{infos.author}</strong>, t'as vu.</p>
               <p>Il a publié ce site à la date suivante: <strong>{infos.published}</strong>. T'étais né ?</p>
               <p>Si t'as besoin de passer ta rage après ta crise d'épilepsie, tu peux le trouver à l'adresse suivante: <strong>{infos.address}</strong>. Bisou !</p>
               <p><em>(Ok, oublie le bisou. Je me suis un peu chauffé.)</em></p>
            </li>            
        <Footer />
        </main>
      )
}
export default Apropos;









