import React from 'react';
import styled from 'styled-components';
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
	
`;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${props => props.type === 'filled' && 'none'};
	background-color: ${props => props.type === 'filled' ? 'beige' : 'transparent'};
	color: ${props => props.type === 'filled' && 'grey'};
`;


const TopTexts = styled.div`

`;

const TopText = styled.span`
	text-decoration: underline;
  cursor: pointer;
	margin: 0 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
	
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.span`
	font-size: 24px;
	margin: 5px;
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #ccc;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
  flex: 1;
	background-color: beige;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${props => props.type === 'total' && '500'};
	font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: beige;
	border: 1px solid gray;
	color: burlywood;
	cursor: pointer;
`;

const Cart = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>Your Cart</Title>
				<Top>
					<TopButton>Continue Shopping</TopButton>
					<TopTexts>
						<TopText>Shopping Cart(2)</TopText>
						<TopText>Your Wishlist (1)</TopText>
					</TopTexts>
					<TopButton type={'filled'}>Checkout Now</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src={'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80'} />
								<Details>
									<ProductName><b>Product: </b>Product Name</ProductName>
									<ProductId><b>ID: </b>Product ID</ProductId>
									<ProductColor color={'beige'} />
									<ProductSize><b>Size: </b>Product Size</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<AddIcon />
									<ProductAmount>2</ProductAmount>
									<RemoveIcon />
								</ProductAmountContainer>
								<ProductPrice>$ 60</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr/>
						<Product>
							<ProductDetail>
								<Image src={'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'} />
								<Details>
									<ProductName><b>Product: </b>Product Name</ProductName>
									<ProductId><b>ID: </b>Product ID</ProductId>
									<ProductColor color={'lightblue'} />
									<ProductSize><b>Size: </b>Product Size</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<AddIcon />
									<ProductAmount>2</ProductAmount>
									<RemoveIcon />
								</ProductAmountContainer>
								<ProductPrice>$ 60</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping Price</SummaryItemText>
							<SummaryItemPrice>$ 10</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -2</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem  type={'total'}>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 98</SummaryItemPrice>
						</SummaryItem>
						<Button>Checkout Now</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
