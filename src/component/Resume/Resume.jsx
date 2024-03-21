import React, { useState } from 'react'
import s from './Resume.module.css'
import Button from '../Button/Button'
import cn from 'classnames'

const Resume = () => {
	const [valueHtml, setValueHtml] = useState(90)

	const handlePrint = e => {
		e.preventDefault()
		window.print()
	}

	return (
		<div className={s.content}>
			<h3 className={s.title}>Резюме</h3>
			<div className={s.burrons}>
				<button className={s.btn}>
					<a
						className={s.btn}
						href={require('./Мысник Анастасия.pdf')}
						download='ResumeMysnik'
					>
						СКАЧАТЬ PDF
					</a>
				</button>
				<Button onClick={handlePrint}>РАСПЕЧАТАТЬ</Button>
			</div>

			<div className={s.timeline}>
				<div className={s.colLeft}>
					<h4 className={s.timelineTitle}>Опыт работы</h4>

					<div className={s.timelineItem}>
						<div className={s.date}>
							Октябрь 2022 — <b>настоящее время</b>
						</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>Frontend-разработчик</div>
						<div className={s.text}>
							<p>
								Разработка командного проекта на React 18 - SPA -приложение
								тематических постов "react-team-project".
							</p>
							<ul>
								В данном проекте был реализован следующий функционал:
								<li>
									авторизация/регистрация и восстановление пароля
									(LocalStorage);
								</li>
								<li>роутинг страниц и модальных окон (react router dom);</li>
								<li>
									вывод постов полученных по Api с пагинацией для оптимальной
									загрузки данных;
								</li>
								<li>
									возможность добавления/редактирования и удаления постов;
								</li>
								<li>добавление/удаление лайков;</li>
								<li>возможность редактировать профиль пользователя;</li>
								<li>скелетон;</li>
								<li>слайдер(Slick-slider);</li>
								<li>формы с валидацией (react-hook-form);</li>
								<li>мобильная адаптация (SCSS)</li>
							</ul>
							<p>
								Для реализации проекта использовался следующий стек технологий:
								React JS; HTML 5; CSS; React-hook-form; React Router Dom;
								Classnames; SCSS; Slick-slider; Framer Motion; контроль версий
								Git; Material UI.
							</p>
						</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>Июнь 2019 — Апрель 2021</div>
						<h5 className={s.subtitle}>ООО "Кларанс"</h5>
						<div className={s.position}>Тренинг - координатор</div>
						<div className={s.text}>
							<ul>
								<li>
									Планирование и проведение мероприятий по обучению согласно
									графику обучений.
								</li>
								<li>
									Подготовка и проведений коучинг сессий по обучению для
									консультантов компании в точках продаж.
								</li>
								<li>
									Подготовка и проведений коучинг сессий по обучению для
									продавцов сетей в точках продаж.
								</li>
								<li>
									Анализ проведенных мероприятий с последующим планированием по
									результатам.
								</li>
								<li>
									Подготовка и обеспечение участников обучения необходимыми
									информационными материалами.
								</li>
								<li>Обеспечение пост-тренингового сопровождения.</li>
								<li>
									Проведение разного вида мероприятий по оценке уровня знаний
									персонала.
								</li>
								<li>
									Участие в проекте обучающего сайта: информирование,
									рекрутирование, использование в пост-тренинг сопровождении.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={s.colRight}>
					<h4 className={s.timelineTitle}>Образование</h4>
					<div className={s.timelineItem}>
						<div className={s.date}>2023</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>
							Программа профессиональной переподготовки "Frontend-разработчик
						</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>2022</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>
							Управление веб-страницей с помощью JavaScript
						</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>2022</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>
							Основы программирования на JavaScript II
						</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>2022</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>
							Основы программирования на JavaScript I
						</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>2022</div>
						<h5 className={s.subtitle}>
							АНО ДПО "Корпоративный университет Сбербанка"
						</h5>
						<div className={s.position}>Основы HTML и CSS</div>
					</div>
					<div className={s.timelineItem}>
						<div className={s.date}>1997 — 2002</div>
						<h5 className={s.subtitle}>
							Новосибирский государственный технический университет, Новосибирск
						</h5>
						<div className={s.position}>Электро механический, Инженер</div>
					</div>
					<h4 className={s.timelineTitle}>Навыки</h4>
					<div className={s.progressBar}>
						<div className={s.progressBarItem}>
							<div className={s.progressBarLeft}>
								<div className={s.progressBarTitle}>HTML</div>
							</div>
							<div className={s.progressBarRight}>
								<input
									className={s.input}
									type='range'
									min='0'
									max='100'
									step='10'
									value={valueHtml}
									onChange={e => setValueHtml(e.target.value)}
								/>
								{/* <div className={s.progressBarBar}>
									<div className={s.progress} style={{ width: '90%' }}></div>
								</div> */}
							</div>
						</div>
						<div className={s.progressBarItem}>
							<div className={s.progressBarLeft}>
								<div className={s.progressBarTitle}>CSS</div>
							</div>
							<div className={s.progressBarRight}>
								<div className={s.progressBarBar}>
									<div className={s.progress} style={{ width: '80%' }}></div>
								</div>
							</div>
						</div>
						<div className={s.progressBarItem}>
							<div className={s.progressBarLeft}>
								<div className={s.progressBarTitle}>REACT</div>
							</div>
							<div className={s.progressBarRight}>
								<div className={s.progressBarBar}>
									<div className={s.progress} style={{ width: '80%' }}></div>
								</div>
							</div>
						</div>
						<div className={s.progressBarItem}>
							<div className={s.progressBarLeft}>
								<div className={s.progressBarTitle}>GitHub</div>
							</div>
							<div className={s.progressBarRight}>
								<div className={s.progressBarBar}>
									<div className={s.progress} style={{ width: '80%' }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
