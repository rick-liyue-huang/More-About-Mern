import React from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 20;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5ebf1;
	position: relative;
	
	&:hover ${Info} {
		opacity: 1;
    transition: opacity 0.3s ease-in;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 10;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: beige;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.3s ease-in;
	
	&:hover {
		background-color: wheat;
		transform: scale(1.2);
	}
`;

const ProductItem = ({item}) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon><ShoppingCartOutlinedIcon /></Icon>
				<Icon><SearchOutlinedIcon /></Icon>
				<Icon><FavoriteBorderOutlinedIcon /></Icon>
			</Info>
		</Container>
	);
};

export default ProductItem;
