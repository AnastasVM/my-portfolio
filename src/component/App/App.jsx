import s from "./App.module.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar';
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import { Routes, Route } from 'react-router-dom';
import Works from "../../pages/Works/Works";
import Aboute from "../../pages/Aboute/About";
import Contacts from "../../pages/Contacts/Contacts";


function App() {
  return (
    <>
     <Header>
          <Avatar/>
          <Navbar/>
     </Header>
    <main className={s.content}>
      <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/aboutMe" element={<Aboute/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </main>
     <Footer/>
     </>
  );
}

export default App;
