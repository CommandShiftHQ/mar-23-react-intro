import SlackAdmins from './SlackAdmins';

const Tutors = ({ tutorsArray, flag, children }) => {
	console.log(tutorsArray);
	return (
		<div>
			{flag && (
				<ul>
					{tutorsArray.map((tutor) => (
						<li>{tutor}</li>
					))}
				</ul>
			)}

			{children}

			{/* <SlackAdmins tutorsArray={tutorsArray} /> */}
		</div>
	);
};

export default Tutors;
