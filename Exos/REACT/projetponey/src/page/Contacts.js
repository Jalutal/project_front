import Header from '../component/Header';
import Footer from '../component/Footer';

function Contact() {       
    return (
        <main>
          <Header />       
            <main className="mainContact">
            <form action="/ma-page-de-traitement" method="post">
  <ul>
    <li className='ulHeader02'>
      <label for="name">Nom&nbsp;:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li className='ulHeader02'>
      <label for="mail">E-mail&nbsp;:</label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li className='ulHeader02'>
      <label for="msg">Message&nbsp;:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
    <div class="button" className='ulHeader02'>
  <button type="submit">Envoyer le message</button>
</div>
  </ul>
</form>
            </main>
        <Footer />
        </main>
      )
}
export default Contact;