import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Home.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Home = () => {
	return (
		<>
			<div className="container-home">
			 <h1 className="titulo">Welcome to Weather App</h1>
			  <button className="btn location"><Link to="/city"className="btn">Search a city</Link></button>
			</div>
			 <Swiper
				 
				  modules={[Navigation, Pagination, Scrollbar, A11y]}
				  spaceBetween={50}
				  slidesPerView={1}
				  navigation
				  pagination={{ clickable: true }}
				  scrollbar={{ draggable: true }}
				  
				>
				  
				  <SwiperSlide className="swiper"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Burg-2017-06.jpg/1024px-Burg-2017-06.jpg'} /></SwiperSlide>
				  <SwiperSlide className="swiper"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tempo_de_Debod.JPG/1024px-Tempo_de_Debod.JPG'} /></SwiperSlide>
				  <SwiperSlide className="swiper"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg/1000px-Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg'} /></SwiperSlide>
				  <SwiperSlide className="swiper"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Foggy_Taipei_skyline_20190321.jpg/1280px-Foggy_Taipei_skyline_20190321.jpg'} /></SwiperSlide>
				</Swiper>
				
			
		</>
	);
}

export default Home;




