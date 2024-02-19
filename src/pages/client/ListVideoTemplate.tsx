
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Button } from "../../components/ui/button"
import Header from "../../components/Header"
type listItemType = {
        id: number,
        link_video: string,
        noidung: string,
        mau_da: string,
        gioitinh: string,
        age_video: number,
        chung_toc:string
}
const ListVideoTemplate = () =>{
    
    const [listTemp, setListTemp] = useState<listItemType[]|[]>([]);
    useEffect(()=>{
        axios.get(`https://databaseswap.mangasocial.online/get/list_video/all_video_wedding_template`).then(res => {
                setListTemp(res.data.list_sukien_video_wedding);                
        })
    },[])
    return(
        <>
            <div className="bg-[#F2FDFF]">
            <Header/>
            <div className="pb-[70px] pt-[40px]">
                <Link to={'/'} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#808080" className="w-10 h-10 float-right mr-[40px] mt-[-10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
                <h1 className="font-[600] text-[40px] leading-[48px] ml-[210px] mb-[30px] mt-[10px]"></h1>
                <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring gap-8 items-center justify-center mt-4">
                <div className="">
                    <h1 className="font-[600] text-[40px] leading-[48px] text-center mb-[10px] mt-[10px]">Wedding Template Video</h1>
                    <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] text-center mb-[30px] mt-[10px]">Choose a template that's right for you to start creating these once-in-a-lifetime videos</h5>
                    <div className="">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-2 md:mt-4 mt-8">
                                {
                                listTemp.slice(0, 100).map((image, index) => {
                                    return (
                                      <div className="mt-4 md:mt-0" key={index}>
                                        <div className="group relative overflow-hidden flex items-center justify-center" >
                                        <div className="md:w-[400px] md:h-[500px] w-[200px] h-[250px]">
                                        <div className="">
                                                <video className=" absolute h-full w-full object-contain" controls>
                                                  <source src={image.link_video}/>
                                                </video>                                             
                                            </div>                                    
                                        </div>
                                        </div>
                                        <Link to={`/uploadvideo/${image.id}`}><Button variant={'outline'} className="md:ml-[80px] ml-[50px] mt-3">Start</Button></Link>
                                        </div>                                               
                                    )
                                })
                                }
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ListVideoTemplate