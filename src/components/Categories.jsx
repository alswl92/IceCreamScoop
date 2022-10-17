import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TopSeller from '../assets/topsellercollection.jpg'
import Season from '../assets/seasoncollection.jpg'
import DairyFree from '../assets/dairyfreecollection.jpg'
import IMG1 from '../assets/IceCream1.jpg'
import IMG2 from '../assets/IceCream2.jpg'
import IMG4 from '../assets/IceCream4.jpg'

const Container= styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    background-color: var(--color-light);
    @media screen and (max-width: 600px){
      display: none;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    max-width: 300px;
    max-height: 300px;
    min-height: 300px;
    background-size: cover;
    @media screen and (max-width: 1024px){
      max-width: 230px;
      max-height: 200px;
}
`

const RTo = styled(Link)`
  background-color: var(--color-green);
  color: white;
  padding: .5rem;
  border-radius: 10px;

  &:hover{
    color: black;
  }
`

const Categories = () => {
  return (
    <Container>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Wrapper img = {Season}>
            <Img src = {Season}/>
            <h1>The Fall Flavors</h1>
            <h3>Best autumn flavors are back!</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
            <Img src = {TopSeller}/>
            <h1>The Top seller</h1>
            <h3>Popular for good reasaon</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
            <Img src = {DairyFree}/>
            <h1>Dairy Free Collection</h1>
            <h3>Still a perfect ice cream</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
            <Img src = {IMG1}/>
            <h1>Birthday Collection</h1>
            <h3>Every birthday needs ice cream</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
            <Img src = {IMG2}/>
            <h1>Happy Hour Collection</h1>
            <h3>it's ice cream o'clock somewhere</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
            <Wrapper>
            <Img src = {IMG4}/>
            <h1>Create Your own Mix! </h1>
            <h3>Be creative and create your own mix</h3>
            <RTo to ='/products'>Shop Now</RTo>
            </Wrapper>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Categories