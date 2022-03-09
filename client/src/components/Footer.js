import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const Container = styled.div`
	display: flex;
`;

const LeftComponent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${props => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`

const CenterComponent = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`

const RightComponent = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<LeftComponent>
				<Logo>Shop</Logo>
				<Desc>footer description</Desc>
				<SocialContainer>
					<SocialIcon color={'385999'}>
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color={'e4405f'}>
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color={'55acee'}>
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color={'e60023'}>
						<GitHubIcon />
					</SocialIcon>
				</SocialContainer>
			</LeftComponent>
			<CenterComponent>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>New Products</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>My Count</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wish List</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</CenterComponent>
			<RightComponent>
				<Title>Contact</Title>
				<ContactItem><MapIcon style={{marginRight: '6px'}} />Address: xxx</ContactItem>
				<ContactItem><AttachEmailIcon style={{marginRight: '6px'}} />Email: xxx@xx.com</ContactItem>
				<ContactItem><PermPhoneMsgIcon style={{marginRight: '6px'}} />Phone: +61 3000 000</ContactItem>
				<Payment src={'https://i.ibb.co/Qfvn4z6/payment.png'} />
			</RightComponent>
		</Container>
	);
};

export default Footer;
