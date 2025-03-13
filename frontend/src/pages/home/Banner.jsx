import Bannerimg from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={Bannerimg} alt="" />
      </div>
      <div className="md:w-1/2 w-full ml-6">
        <h1 className="md:text-5xl text-2xl font-medium mb-7 ">New Releses This week</h1>
        <p className="mb-10">It is time to update your readign list with some of the latest and greatest releses in the literary world. From heart-pumping thrillers to captivating memoirs, this week new releases offer something for everyone</p>
        <button className="bg-slate-500 p-2 pr-4 pl-4 rounded-lg">Subscribe</button>
      </div>
    </div>

  )
}

export default Banner
