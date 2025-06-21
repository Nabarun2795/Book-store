import React, { useEffect,useState } from 'react'
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/book/booksApi';

const Recommends = () => {
const {data:books=[]}=useFetchAllBooksQuery();
  
/*
  const [books,setBooks]=useState([]);
  

  useEffect(()=>{
    fetch("books.json")
    .then((res)=>res.json())
    .then(data=>{
      
      setBooks(data)})
  },[])*/
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Recommendations</h2>
      
      <div><Swiper 
      slidesPerView={1}
        spaceBetween={30}
       navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper">
      {books.slice(8,18).length>0 && books.slice(8,18).map((filterBook,index)=>(
        
          <SwiperSlide key={index}><BookCard book={filterBook}/></SwiperSlide>))}</Swiper></div>
    </div>
  )
}

export default Recommends
