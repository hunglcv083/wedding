import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import { Button } from "../../components/ui/button"
import Header from "../../components/Header"
type listItemType = {
  id_saved:string,
  link_video_goc:string,
  link_image:string,
  link_video_da_swap:string,
  thoi_gian_su_kien:string,
  id_user:string
}
const FunnyVideo = () => {
    
    const [listTemp, setListTemp] = useState<listItemType[]|[]>([]);
    useEffect(()=>{
        axios.get(`https://databaseswap.mangasocial.online/get/list_video/all_video_wedding_swap`).then(res => {
                setListTemp(res.data.list_sukien_video_wedding);                
        })

    },[])
    
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
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] ml-7 mb-[30px] mt-[10px]">Funny Video</h1>
                <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] mt-[10px] md:ml-[210px] mb-7  ml-7">Create funny wedding video with swapping AI!!! <a href="/listvideotemplate" className="font-bold"><span>Try now ^0^</span></a></h5>
                <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring gap-8">
                  <Link to="/listvideotemplate"><Button variant={'outline'} className="mt-5 md:ml-[380px] ml-[70px] rounded-3xl w-[200px] text-white">Create Now</Button></Link>
                <div className="">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-4">
                                {
                                listTemp.slice(0, 100).map((image, index) => {
                                    return (
                                      <div className="" key={index}>
                                        <div className="group relative overflow-hidden flex items-center justify-center" key={index}>
                                        <div className="md:w-[400px] md:h-[500px] w-[200px] h-[250px] ">
                                        <div className="">
                                                <video className=" absolute h-full w-full object-contain" controls>
                                                  <source src={image.link_video_da_swap}/>
                                                </video>                                             
                                            </div>                                    
                                        </div>
                                        </div>
                                        <Link to={`detail/${image.id_user}/${image.id_saved}`}><Button variant={'outline'} className="md:ml-[80px] ml-[40px] mt-3 text-white">See Detail</Button></Link>
                                        </div>                                               
                                    )
                                })
                                }
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export  default FunnyVideo