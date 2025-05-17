import { SectionCards } from "../ui/section-cards"

const Banner = () => {
  return (<>
  <div className="h-[100%] w-[100%] lg:w-[50%] md:w-[100%] lg:text-[5rem] md:text-[3rem]">
    <h1>'Syntax Error' Means</h1>
    <h1 className="bg-gradient-to-r from-purple-500 to-[#FE7743] bg-clip-text text-transparent">You're Learning.</h1>
    <SectionCards />
    </div>
  </>)
}

export default Banner