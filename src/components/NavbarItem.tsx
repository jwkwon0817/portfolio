import styles from '../styles/NavbarItem.module.scss';

interface NavbarItemProps {
	title: string;
	to: string;
}

export const NavbarItem = ({ title, to }: NavbarItemProps) => {
	return (
		<div className={ styles.NavbarItem }>
			<a href={ to } className={ styles.text }>{ title }</a>
		</div>
	);
};