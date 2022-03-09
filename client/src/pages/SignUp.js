import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2)),
		url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80") center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: beige;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
`;
const Agreement = styled.div`
	font-size: 12px;
	margin: 20px 0;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: burlywood;
	cursor: pointer;
`

const SignUp = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder={'first name'} />
					<Input placeholder={'last name'} />
					<Input placeholder={'username'} />
					<Input placeholder={'email'} />
					<Input placeholder={'password'} />
					<Input placeholder={'confirm password'} />
					<Agreement>agreement statements...kasjdskl;fent statements...kasjdskl;fdjlkjsdf;lkdsjfldksjdsl.</Agreement>
					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignUp;
