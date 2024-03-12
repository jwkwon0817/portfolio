import styles from '../styles/Home.module.scss';
import profile from '../assets/profile.png';

export const Home = () => {
	return (
		<div className={ styles.Home } id={ 'home' }>
			<img src={ profile } alt={ 'Profile' } className={ styles.profileImage } />
			<div className={ styles.information }>
				<h1 className={ styles.name }>권지원</h1>
				<h2 className={ styles.school }>선린인터넷고등학교 소프트웨어과 119기</h2>
			</div>
		</div>
	);
};