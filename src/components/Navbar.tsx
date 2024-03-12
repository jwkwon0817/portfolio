import styles from '../styles/Navbar.module.scss';
import { NavbarItem } from './NavbarItem.tsx';

export const Navbar = () => {

	return (
		<div className={ styles.Navbar }>
			<div className={ styles.container }>
				<NavbarItem title={ 'Home' } to={ '#home' } />
				<NavbarItem title={ 'Skills' } to={ '#skills' } />
				<NavbarItem title={ 'History' } to={ '#history' } />
				<NavbarItem title={ 'Contact' } to={ '#contact' } />
			</div>
		</div>
	);
};