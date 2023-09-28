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
import Modal from "../Modal/Modal";
import { useState } from "react";
import Cooperation from "../Сooperation/Сooperation";


function App() {

  const [modalActive, setModalActive] = useState(true);

  return (
    <>
     <Header>
          <Avatar/>
          <Navbar setModalActive={setModalActive}/>
     </Header>
    <main className={s.content}>
      <Routes>
          <Route path="/" element={<Intro setModalActive={setModalActive}/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/aboutMe" element={<Aboute/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </main>
    <Modal active={modalActive} setActive={setModalActive}>
      <p>Модальное окно</p>
    </Modal>
    <Modal active={modalActive} setActive={setModalActive}>
      <Cooperation setModalActive={setModalActive}/>
    </Modal>
     <Footer setModalActive={setModalActive}/>
     </>
  );
}

export default App;
