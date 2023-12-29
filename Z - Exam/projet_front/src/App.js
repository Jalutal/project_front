import HomePage from './page/HomePage';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from './page/Login';
import NewFictions from './page/NewFictions';
import FictionsMain from './page/FictionsMain';
import Admin from './page/Admin';

function App() {
  return (
    <>
    <Helmet>
        <title>La Bibliothèque d'Hyrule</title>
    </Helmet>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newfic/details/:id" element={<FictionsMain />} />
        <Route path="/newfic" element={<NewFictions />} />
        


        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
