import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from "../data";
import {mobile} from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
  ${mobile({display: 'none'})}
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: beige;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	// using styled props to different the position
	left: ${props => props.direction === 'left' && '10px'};
	right: ${props => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 50%;
	z-index: 10;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	// change position on line
	transform: translateX(${props => props.slideIndex * -100}vw);
	//transition: all 1.3s ease;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${props => props.bg};
`;

const ImageContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;

const Desc = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 2px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		} else if (direction === 'right') {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	};
	return (
		<Container>
			<Arrow direction={'left'} onClick={() => handleClick('left')}>
				<ArrowBackIosOutlinedIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{
					sliderItems.map(item => (
						<Slide key={item.id} bg={item.bg}>
							<ImageContainer>
								<Image src={item.img} />
							</ImageContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Desc>{item.desc}</Desc>
								<Button>Shop Now</Button>
							</InfoContainer>
						</Slide>
					))
				}
			</Wrapper>
			<Arrow direction={'right'} onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
