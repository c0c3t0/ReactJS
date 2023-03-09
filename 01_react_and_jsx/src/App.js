import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Desc from './components/Desc';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {
	return (
		<body id="page-top" data-spy="scroll" data-target=".side-menu">
			<Nav />
			<Header />
			<div class="container">
				<Desc />
				<Speakers />
			</div>
			<Tickets />
			<Schedule />
			<Footer />
		</body>
	);
}

export default App;
