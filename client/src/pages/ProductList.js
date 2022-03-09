import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

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
`;


const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					filter1
				</Filter>
				<Filter>
					filter2
				</Filter>
			</FilterContainer>
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default ProductList;
