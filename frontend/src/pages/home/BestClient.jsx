// // import { Swiper } from "swiper/types"
// import news1 from "../../assets/news/news-1.png"
// import news2 from "../../assets/news/news-2.png"
// import news3 from "../../assets/news/news-3.png"
// import news4 from "../../assets/news/news-4.png"
// // import b1 from "../../assets/news/b1.jpg"


// // import { SwiperSlide } from "swiper/react"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from "react-router-dom"
// import { Navigation, Pagination } from "swiper/modules"

// // // import news1 from "../../assets/news/news-1.png"
// // import news2 from "../../assets/news/news-2.png"
// // import news3 from "../../assets/news/news-3.png"
// // import news4 from "../../assets/news/news-4.png"
  
// const news = [
//     {
//         "id": 1,
//         "title": "Global Climate Summit Calls for Urgent Action",
//         "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
//         "image": news1
//     },
//     {
//         "id": 2,
//         "title": "Breakthrough in AI Technology Announced",
//         "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
//         "image": news2
//     },
//     {
//         "id": 3,
//         "title": "New Space Mission Aims to Explore Distant Galaxies",
//         "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
//         "image": news3
//     },
//     {
//         "id": 4,
//         "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
//         "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
//         "image": news4
//     },
//     {
//         "id": 5,
//         "title": "Innovative New Smartphone Released by Leading Tech Company",
//         "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
//         "image": news2
//     }
// ]
// const BestClient = () => {
//   return (

//     <div className='py-16'>
//         <h2 className='text-3xl font-semibold mb-6'>Our Satisfied Client</h2>

//         <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {
//           news.map((item,index)=>(
//             <SwiperSlide key={index}>
//                 <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
//                     {/* content */}
//                     <div className="py-4">
//                         <Link to="/">
//                         <h3 className="text-lg font-medium hover:text-blue-500 mb-4">{item.title}</h3>
//                         </Link>
//                         <div className="w-12 h-[4px] bg-primary mb-5"></div>
//                         <p className="text-sm text-gray-600">{item.description}</p>

//                     </div>
//                     <div className="flex-shrink-0">
//                     <img src={item.image} alt="" className="w-[200px] h-[150px] " />


//                     </div>
//                 </div>
//             </SwiperSlide>

//           ))  
//         }
//         </Swiper>
//         </div>
//   )
// }

// export default BestClient;


const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

const BestClient = () => {
  return (
    <div className="mx-auto grid max-w-12xl lg:px-8 xl:grid-cols-3  py-20 sm:py-32">
      <div className="bg-white">
      <div >
        <div className="max-w-xl">
          {/* <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2> */}
          {/* <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p> */}
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-48 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      <div className="bg-white">
      <div>
        <div className="max-w-xl">
          
          
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-48 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      <div className="bg-white">
      <div >
        <div className="max-w-xl">
          
          
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-48 rounded-full" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      <div className="bg-white py-16 sm:py-20">
      <div >
        <div className="max-w-xl">
         
          
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="size-48" />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default BestClient
