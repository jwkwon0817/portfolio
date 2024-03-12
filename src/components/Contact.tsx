import styles from '../styles/Contact.module.scss';
import discord from '../assets/contacts/Discord.svg';
import email from '../assets/contacts/Mail.svg';
import github from '../assets/contacts/GitHub.svg';
import instagram from '../assets/contacts/Instagram.svg';

export const Contact = () => {
	return (
		<div className={ styles.Contact } id={ 'contact' }>
			<div className={ styles.container }>
				<div className={ styles.contact }>
					<a href={ 'mailto:jeewon.kwon.0817@gmail.com' } target={ '_blank' }>
						<img src={ email } alt={ 'Email' } className={ styles.contactIcon } />
					</a>
				</div>
				<div className={ styles.contact }>
					<a href={ 'https://github.com/jwkwon0817' } target={ '_blank' }>
						<img src={ github } alt={ 'Github' } className={ styles.contactIcon } />
					</a>
				</div>
				<div className={ styles.contact }>
					<a href={ 'https://instagram.com/jeewon__k' } target={ '_blank' }>
						<img src={ instagram } alt={ 'Instagram' } className={ styles.contactIcon } />
					</a>
				</div>
				<div className={ styles.contact }>
					<a href={ 'https://discord.com/users/710448716804522106' } target={ '_blank' }>
						<img src={ discord } alt={ 'Discord' } className={ styles.contactIcon } />
					</a>
				</div>
			</div>
		</div>
	);
};