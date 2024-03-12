import styles from './App.module.scss';
import { Navbar } from './components/Navbar.tsx';
import { Home } from './components/Home.tsx';
import { Skills } from './components/Skills.tsx';
import { Contact } from './components/Contact.tsx';
import { History } from './components/History.tsx';

const App = () => {

	return (
		<div className={ styles.app }>
			<Navbar />
			<Home />
			<Skills />
			<History />
			<Contact />
		</div>
	);
};

export default App;
