import styles from '../styles/History.module.scss';
import historyBar from '../assets/historyBarsvg.svg';

export const History = () => {
	const data = [
		{
			year: '2018',
			content: '아버지의 권유로 Python 공부 시작',
		},
		{
			year: '2019',
			content: 'Python으로 자료 구조 학습 및 간단한 프로그램 개발',
		},
		{
			year: '2020',
			content: '배운 것을 토대로 유튜브에 영상을 편집하여 업로드',
		},
		{
			year: '2021',
			content: 'HTML, CSS의 기초 학습',
		},
		{
			year: '2022',
			content: 'Java를 배우고 Spring 프레임워크를 이용하여 웹 개발을 시작',
		},
		{
			year: '2023',
			content: 'React, NextJS, NestJS와 같은 NodeJS 계열의 프레임워크 공부',
		},
		{
			year: '2024 ~ 현재',
			content: '배운 프레임워크들을 활용하여 웹 풀스택 학습 중',
		},
	];

	return (
		<div className={ styles.History } id={ 'history' }>
			<div className={ styles.container }>
				<div className={ styles.timeLine }>
					{
						data.map((item, index) => {
							return (
								<div key={ index } className={ styles.timeLineItem }>
									<p className={ styles.year }>{ item.year }</p>
								</div>
							);
						})
					}
				</div>
				<img src={ historyBar } alt={ 'History' } className={ styles.historyBar } />
				<div className={ styles.contents }>
					{
						data.map((item, index) => {
							return (
								<div key={ index } className={ styles.content }>
									<p className={ styles.contentText }>{ item.content }</p>
								</div>
							);
						})
					}
				</div>
			</div>
		</div>
	);
};