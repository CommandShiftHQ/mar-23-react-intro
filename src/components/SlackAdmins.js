const SlackAdmins = ({ tutorsArray }) => {
	return (
		<div>
			<p>Slack Admins are: </p>
			<ul>
				{tutorsArray.map((tutor) => (
					<li>{tutor}</li>
				))}
			</ul>
		</div>
	);
};

export default SlackAdmins;
