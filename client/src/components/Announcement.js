import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: #61dafb;
	color: white;
	display: flex;
	align-content: center;
	justify-content: center;
	font-size: 16px;
	font-weight: bold;
`

const Announcement = () => {
	return (
		<Container>
			sales or display here
		</Container>
	);
};

export default Announcement;
