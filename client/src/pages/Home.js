import React from 'react';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
`;

const Home = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<NewsLetter />
			<Footer />
		</Container>
	);
};

export default Home;
