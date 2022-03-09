import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import {mobile} from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
  ${mobile({margin: '0 20px', display: 'flex', flexDirection: 'column'})}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
  ${mobile({marginRight: '0'})}
`;

const Select = styled.select`
	padding: 8px;
	margin-right: 20px;
  ${mobile({margin: '10px 0'})}
`;

const Option = styled.option`
	color: darkslategrey;
`;


const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select>
						<Option disabled selected>Color</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option disabled selected>Newest</Option>
						<Option>Price By Asc</Option>
						<Option>Price By Desc</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default ProductList;
