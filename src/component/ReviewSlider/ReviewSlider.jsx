import React from 'react'
import SliderOne from 'react-slick'
import s from './ReviewSlider.module.css'
import Inna from './images/Inna.jpg'
import quotes from './images/кавычки.png'
import quotesUp from './images/кавычки-вверх.png'

const ReviewSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	}

	return (
		<>
			<div className={s.wrapper}>
				<SliderOne className={s.sliderOne} {...settings}>
					<div className={s.slider__item}>
						<div className={s.itemPhoto}>
							<img src={Inna} alt='' className={s.slider__img} />
						</div>
						<div className={s.itemReview}>
							<h3 className={s.title}>Инна Якушенко</h3>
							<h4 className={s.subTitle}>Перманент Make Up</h4>
							<p className={s.text}>
								<img
									src={quotesUp}
									width={30}
									height={30}
									alt=''
									className={s.iconUp}
								/>
								Обратилась к Анастасии для создания сайта и осталась очень
								довольна работой. Настя сделала классный сайт, услышала все мои
								пожелания и «хотелки». Помогала советами и подсказывала, как
								сделать сайт интереснее и привлекательнее для клиента. Хочу
								выразить огромную благодарность Анастасии за работу, за
								профессионализм. Рекомендую 100%!!!
								<img
									src={quotes}
									width={30}
									height={30}
									alt=''
									className={s.icon}
								/>
							</p>
						</div>
					</div>
					<div className={s.slider__item}>
						<div className={s.itemPhoto}>
							<img src={Inna} alt='' className={s.slider__img} />
						</div>
						<div className={s.itemReview}>
							<h3 className={s.title}>Инна Якушенко</h3>
							<h4 className={s.subTitle}>Перманент Make Up</h4>
							<p className={s.text}>
								<img
									src={quotesUp}
									width={30}
									height={30}
									alt=''
									className={s.iconUp}
								/>
								Обратилась к Анастасии для создания сайта и осталась очень
								довольна работой. Настя сделала классный сайт, услышала все мои
								пожелания и «хотелки». Помогала советами и подсказывала, как
								сделать сайт интереснее и привлекательнее для клиента. Хочу
								выразить огромную благодарность Анастасии за работу, за
								профессионализм. Рекомендую 100%!!!
								<img
									src={quotes}
									width={30}
									height={30}
									alt=''
									className={s.icon}
								/>
							</p>
						</div>
					</div>
				</SliderOne>
			</div>
		</>
	)
}

export default ReviewSlider
