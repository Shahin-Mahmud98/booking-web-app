// import Swipper from "../books/swipper"
// import Banner from "./Banner"

// import PaymentCancel from "../payment/PaymentCancel"
// import PaymentFail from "../payment/PaymentFail"
// import PaymentSuccess from "../payment/PaymentSuccess"
import BestClient from "./BestClient"
import Carusel from "./Carusel"
import MostBooked from "./MostBooked"
import TopSellers from "./TopSellers"

const Home = () => {
  return (
    <div>
      {/* <Banner/>
       */}
       <Carusel/>
      <TopSellers/>
      <MostBooked/>
      <BestClient/>
      {/* <PaymentSuccess/>
      <PaymentFail/>
      <PaymentCancel/> */}
      {/* <Swipper/> */}
    </div>
  )
}

export default Home
