// import Swipper from "../books/swipper"
import Banner from "./Banner"
import BestClient from "./BestClient"
import MostBooked from "./MostBooked"
import TopSellers from "./TopSellers"

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopSellers/>
      <MostBooked/>
      <BestClient/>
      {/* <Swipper/> */}
    </div>
  )
}

export default Home
