import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Container = styled.div`
	height: 60px;
  padding-bottom: 20px;
	margin-bottom: 10px;
	border-bottom: 2px solid #61dafb;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LeftComponent = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;


const Language = styled.span`
	font-size: 16px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 3px;
`;

const Input = styled.input`
	border: none;
	list-style: none;
`;

const CenterComponent = styled.div`
  flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
`

const RightComponent = styled.div`
  flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 16px;
	cursor: pointer;
	margin-left: 5px;
	:last-child {
		margin-right: 5px;
	}
`


const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<LeftComponent>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchIcon style={{color: 'gray', fontSize: 16}} />
					</SearchContainer>
				</LeftComponent>
				<CenterComponent>
					<Logo>Shop</Logo>
				</CenterComponent>
				<RightComponent>
					<MenuItem>SignUp</MenuItem>
					<MenuItem>SignIn</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartIcon color="action" />
						</Badge>
					</MenuItem>
				</RightComponent>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
