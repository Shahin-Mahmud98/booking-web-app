import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { useEffect, useState } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../books/Card.jsx';
import { useState } from 'react';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi.js';


const categories = ["Choose a genre", "Business Class", "Econome", "Hummt", "Adventure"]

const TopSellers = () => {
const [selectedCategory,setSelectedCategory]=useState("Choose a Genre");
  // const [books,setBooks] = useState([]);

  // useEffect(()=>{
  //   fetch('/books.json')
  //   .then(res=> res.json())
  //   .then((data)=>setBooks(data))
  // },[]);


const {data:books=[]}=useFetchAllBooksQuery();
  const booksFiltering = selectedCategory==="Choose a genre" ? books : books.filter(book=>book.category===selectedCategory.toLowerCase());
  return (

    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top booking room</h2>
      {/* category filtering */}
      <div>
        <select onChange={(e)=>setSelectedCategory(e.target.value)}
         name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none '

        >
          {
            categories.map((category,index)=>(
              <option key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      
      {/* swipper working */}
      <Swiper 
  slidesPerView={1} // Correct property name
  spaceBetween={50}
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
    },
  }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
  {booksFiltering.length > 0 &&
    booksFiltering.map((book, index) => (
      <SwiperSlide key={index}>
        <Card book={book} />
      </SwiperSlide>
    ))}
</Swiper>

    </div>
  )
}

export default TopSellers;
