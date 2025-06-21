import React, { useEffect,useState } from 'react'
import BookCard from '../Books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/book/booksApi';

const topseller = () => {

  const options=["Choose a genre","Horror","Business","Fiction","Adventure"];
  const {data:books=[]}=useFetchAllBooksQuery();
  console.log("books",books)
  //const [books,setBooks]=useState([]);
  const [category,setCategory]=useState("Choose a genre");
  const filteredBooks=category==="Choose a genre"?books:books.filter((book)=>book.category==category.toLowerCase());
  console.log("filteredbooks",filteredBooks)
  
/*
  useEffect(()=>{
    fetch("books.json")
    .then((res)=>res.json())
    .then(data=>{
      
      setBooks(data)})
  },[category])*/
  
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
      <div className='mb-8 flex items-center'>
        <select onClick={(e) => { setCategory(e.target.value) }} name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 focus:outline-none'>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>{option}</option>
            )
          })}</select>
      </div>
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
      {filteredBooks.length>0 && filteredBooks.map((filterBook,index)=>(
        
          <SwiperSlide key={index}><BookCard book={filterBook}/></SwiperSlide>))}</Swiper></div>
    </div>
  )
}

export default topseller