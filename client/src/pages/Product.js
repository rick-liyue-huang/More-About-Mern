import React from 'react';
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from "../responsive";

const Container = styled.div`
	
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
  ${mobile({padding: '10px', flexDirection: 'column'})}
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
  ${mobile({height: '40%'})}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
  ${mobile({padding: '10px'})}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin-top: 20px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
  ${mobile({width: '100%'})}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
	margin-left: 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;
  ${mobile({width: '100%'})}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid beige;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid beige;
	background-color: white;
	cursor: pointer;
	font-weight: 100;
	
	&:hover {
		background-color: wheat;
	}
`;



const Product = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80'} />
				</ImgContainer>
				<InfoContainer>
					<Title>Product title</Title>
					<Desc>product description</Desc>
					<Price>$20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color={'black'} />
							<FilterColor color={'blue'} />
							<FilterColor color={'green'} />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon />
							<Amount>1</Amount>
							<AddIcon />
						</AmountContainer>
						<Button>Add to Cart</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default Product;
