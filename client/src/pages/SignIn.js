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
	width: 25%;
	padding: 20px;
	background-color: beige;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Link = styled.a`
	margin: 5px 0;
	font-size: 16px;
	text-decoration: underline;
	cursor: pointer;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: burlywood;
	cursor: pointer;
	margin-bottom: 10px;
`

const SignIn = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign In AN ACCOUNT</Title>
				<Form>
					<Input placeholder={'username'} />
					<Input placeholder={'password'} />
					<Button>Sign In</Button>
					<Link>Do you remember the password?</Link>
					<Link>Create an new account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default SignIn;
