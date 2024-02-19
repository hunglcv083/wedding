
import { Link, Outlet } from "react-router-dom"

import Header from "../../components/Header"

const Timeline = () => {
    return(
        <> 
            <div className="bg-[#F2FDFF]">
            <Header/>
          
            <div className="pb-[70px] pt-[40px]">
                <Link to={'/'} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#808080" className="w-10 h-10 float-right mr-[40px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] ml-7 mb-[30px] mt-[10px]">Timeline</h1>
                <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] mt-[10px] md:ml-[210px] mb-7  ml-7">All swapped image events is alreadyyyy!!<a href="/timeline" className="font-bold"><span>Let's see ^0^</span></a></h5>
                <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8">
                    <Outlet/>
                </div>
                </div>
            </div>
        </>
    )
}
export  default Timeline