import styles from '../styles/Skills.module.scss';
import CSS3 from '../assets/skills/CSS3.png';
import HTML5 from '../assets/skills/HTML5.png';
import JavaScript from '../assets/skills/JavaScript.png';
import Kotlin from '../assets/skills/Kotlin.png';
import MariaDB from '../assets/skills/MariaDB.png';
import ReactImage from '../assets/skills/React.png';
import Sass from '../assets/skills/Sass.png';
import TypeScript from '../assets/skills/TypeScript.png';
import Java from '../assets/skills/Java.png';
import Spring from '../assets/skills/Spring.png';
import Python from '../assets/skills/Python.png';

export const Skills = () => {
	const skills = {
		'Frontend': [
			HTML5,
			CSS3,
			JavaScript,
			TypeScript,
			Sass,
			ReactImage,
		],
		'Backend': [
			Java,
			Kotlin,
			MariaDB,
			Spring,
		],
		'Algorithm': [
			Python,
		],
	};

	return (
		<div className={ styles.Skills } id={ 'skills' }>
			<div className={ styles.container }>
				<div className={ styles.backend }>
					<h1 className={ styles.title }>Backend</h1>
					<div className={ styles.images }>
						{
							skills.Backend.map((skill, index) => {
								return (
									<div key={ index }>
										<img src={ skill } alt={ 'Skill' } />
									</div>
								);
							})
						}
					</div>
				</div>
				<div className={ styles.frontend }>
					<h1 className={ styles.title }>Frontend</h1>
					<div className={ styles.images }>
						{
							skills.Frontend.map((skill, index) => {
								return (
									<div key={ index }>
										<img src={ skill } alt={ 'Skill' } />
									</div>
								);
							})
						}
					</div>
				</div>
				<div className={ styles.algorithm }>
					<h1 className={ styles.title }>Algorithm</h1>
					<div className={ styles.images }>
						{
							skills.Algorithm.map((skill, index) => {
								return (
									<div key={ index }>
										<img src={ skill } alt={ 'Skill' } />
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};