import logo from './logo.svg';
import './App.css';
import Tutors from './components/Tutors';
import SlackAdmins from './components/SlackAdmins';
import Person from './components/Person';

const App = () => {
	const frontendTutors = ['Hasnaat', 'Rabbia', 'Stu', 'Maria', 'Dan'];
	const backendTutors = ['Dragos', 'Ryan', 'Lisa'];

	const isFrontendModule = true;

	const person = {
		name: 'Hasnaat',
		age: 26,
		height: 100,
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Welcome to our first React lecture!</p>

				<Person person={person} town="Manchester" country="UK" />

				{/* <p>Frontend tutors are:</p>
				<Tutors tutorsArray={frontendTutors} flag={isFrontendModule}>
					<p>These are the frontendTutors</p>
				</Tutors>

				<p>Backend Tutors are:</p>
				<Tutors tutorsArray={backendTutors} flag={!isFrontendModule} />

				<SlackAdmins tutorsArray={frontendTutors} /> */}
			</header>
		</div>
	);
};

export default App;
