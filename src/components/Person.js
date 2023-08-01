const Person = (props) => {
	const { country } = props;
	console.log(props);

	return (
		<div>
			<p>My name is {props.person.name}</p>
			<p>My age is</p>
			<p>My height is </p>
			<p>My country is {country}</p>
		</div>
	);
};

export default Person;
