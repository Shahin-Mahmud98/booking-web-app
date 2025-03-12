// import { Carousel } from "flowbite-react";
// import room1 from "/src/assets/room/room1.jpg";
// import room2 from "/src/assets/room/room2.jpg";
// import b1 from "/src/assets/room/b1.jpg";
// import b2 from "/src/assets/room/b2.jpg";
// import b3 from "/src/assets/room/b3.jpg";


// const Carusel = () => {
//   return (
//     <div className="h-96">
        
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src={room1} alt="..." />
//         <img src={room2} alt="..." />
//         <img src={b1} alt="..." />
//         <img src={b2} alt="..." />
//         <img src={b3} alt="..." />
//       </Carousel>
//     </div>
 
//     </div>
//   )
// }

// export default Carusel

import { Carousel } from "flowbite-react";
import room1 from "/src/assets/room/room1.jpg";
import room2 from "/src/assets/room/room2.jpg";
import b1 from "/src/assets/room/b1.jpg";
import b2 from "/src/assets/room/b2.jpg";
import b3 from "/src/assets/room/b3.jpg";

const Carusel = () => {
  return (
    <div className="h-[600px] sm:h-[700px] xl:h-[800px] 2xl:h-[900px]"> 
      <div className="h-full">
        <Carousel>
          <img src={room1} alt="Room 1" className="h-full w-full object-cover" />
          <img src={room2} alt="Room 2" className="h-full w-full object-cover" />
          <img src={b1} alt="B1" className="h-full w-full object-cover" />
          <img src={b2} alt="B2" className="h-full w-full object-cover" />
          <img src={b3} alt="B3" className="h-full w-full object-cover" />
        </Carousel>
      </div>
    </div>
  );
};

export default Carusel;
