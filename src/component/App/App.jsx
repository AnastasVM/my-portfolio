import s from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Avatar from '../Avatar/Avatar'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro'
import { Routes, Route } from 'react-router-dom'
import Works from '../../pages/Works/Works'
import Aboute from '../../pages/Aboute/About'
import Contacts from '../../pages/Contacts/Contacts'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import Cooperation from '../Сooperation/Сooperation'
import Resume from '../Resume/Resume'
import ProjectCard from '../../pages/ProjectCard/ProjectCard'
import { CardContext } from '../../context/cardContext'
import progect from './image/React-team-project.png'
import dogfood from './image/DogFood.png'
import cats from './image/Cats.png'
import greencorp from './image/GereenCorp.png'
import pokemon from './image/Pokemon.png'
import activebox from './image/ActiveBox.png'
import mogo from './image/Mogo.png'
import portfolio from './image/Portfolio.png'
import permanent from './image/permanent-makeup.png'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

function App() {
	const [modalActive, setModalActive] = useState(false)
	const [modalActiveResume, setModalActiveResume] = useState(false)
	const [works, setWorks] = useState([
		{
			id: 1,
			image: progect,
			name: 'Приложение',
			title: 'React-team-project',
			date: '2023',
			href: 'https://pavel11123.github.io/react-team-project/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'React Js, HTML5, SCSS, React Router Dom, React Hook Form, Slick-slider, GIT, Framer Motion motion, Classnames, Material UI',
		},
		{
			id: 2,
			image: dogfood,
			name: 'Интернет-магазин',
			title: 'DogFood',
			date: '2023',
			href: 'https://anastasvm.github.io/dogfood/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'React Js, HTML5, SCSS, React Router Dom, React Hook Form, GIT, Classnames, React Redux',
		},
		{
			id: 3,
			image: permanent,
			name: 'Веб-сайт',
			title: 'Permanent-makeup-studio',
			date: '2024',
			href: 'https://anastasvm.github.io/permanent-makeup-studio/',
			cliient: 'Permanent-makeup-studio',
			text: 'React Js, HTML5, SCSS, React Router Dom, GIT, Classnames',
		},
		{
			id: 4,
			image: cats,
			name: 'Приложение',
			title: 'Cats',
			date: '2022',
			href: 'https://anastasvm.github.io/Cats/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'HTML, CSS, JavaScript',
		},
		{
			id: 5,
			image: greencorp,
			name: 'Лендинг',
			title: 'GreenCorp',
			date: '2022',
			href: 'https://anastasvm.github.io/green-corp-landing/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'HTML, CSS, JavaScript',
		},
		{
			id: 6,
			image: pokemon,
			name: 'Веб-сайт',
			title: 'Pokemon',
			date: '2023',
			href: 'https://anastasvm.github.io/pokemon/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'React Js, HTML5, Ant Design',
		},
		{
			id: 7,
			image: activebox,
			name: 'Веб-сайт',
			title: 'ActiveBox',
			date: '2022',
			href: 'https://anastasvm.github.io/ActiveBox/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'HTML, CSS, JavaScript',
		},
		{
			id: 8,
			image: mogo,
			name: 'Веб-сайт',
			title: 'Mogo',
			date: '2022',
			href: 'https://anastasvm.github.io/MoGo/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'HTML, CSS, JavaScript',
		},
		{
			id: 9,
			image: portfolio,
			name: 'Веб-сайт',
			title: 'Portfolio',
			date: '2022',
			href: 'https://anastasvm.github.io/Portfolio/',
			cliient: 'Корпоративный университет Сбербанка',
			text: 'HTML, CSS, JavaScript',
		},
	])

	return (
		<>
			<CardContext.Provider value={{ works, setWorks }}>
				<Header className={s.header}>
					<Avatar />
					<Navbar setModalActive={setModalActive} />
				</Header>
				<main className={s.content}>
					<Routes>
						<Route
							path='/'
							element={
								<Intro
									setModalActive={setModalActive}
									setModalActiveResume={setModalActiveResume}
								/>
							}
						/>
						<Route path='/works' element={<Works works={works} />} />
						<Route path='/aboutMe' element={<Aboute />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/project/:projectId' element={<ProjectCard />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</main>

				<Modal active={modalActive} setActive={setModalActive}>
					<Cooperation setModalActive={setModalActive} />
				</Modal>
				<Modal active={modalActiveResume} setActive={setModalActiveResume}>
					<Resume />
				</Modal>
				<Footer setModalActive={setModalActive} />
			</CardContext.Provider>
		</>
	)
}

export default App
