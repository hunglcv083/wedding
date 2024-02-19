import { Link,  useParams } from "react-router-dom"
import {  useEffect, useState } from "react"
import axios from "axios"
import Header from "../../components/Header"
type listItemType = {
    id?: number,
    id_saved?:string,
    link_video_goc?:string,
    link_image:string,
    link_video_da_swap:string,
    id_user?:string,
    thoigian_sukien:string
}
type listItemType2 = {
  id: number,
  link_video: string,
  noidung: string,
  mau_da: string,
  gioitinh: string,
  age_video: number,
  chung_toc:string
}
const EventVideo = () =>{
    const [user1, setUser1] = useState<any>({user_name:'',email:'',link_avatar:'',id_user:''})
    const [listTemp, setListTemp] = useState<listItemType[]>([{link_video_da_swap:'', link_image:'', thoigian_sukien:''}]);
    const {id_user, id_sukien} = useParams()
    const fetchUser = () =>{
        axios.get(`https://databaseswap.mangasocial.online/profile/${id_user}`)
        .then((res) => setUser1(res.data))
    }
    const fetchEvent = () =>{
        axios.get(`https://databaseswap.mangasocial.online/get/list_video/id_video_swap_all_id_sk?id_user=${id_user}&id_sk=${id_sukien}`)
        .then((res) => setListTemp(res.data.id_su_kien_swap_image))
    }
    const [listTemp2, setListTemp2] = useState<listItemType2[]|[]>([]);
    let videoName:string | undefined
    videoName = (listTemp[0].link_video_goc?.split('/').pop())?.split('.').shift()
    const [,setVidGoc] = useState('')
    const fetchImg = async () => {
        try {
          const res = await axios.get(`https://databaseswap.mangasocial.online/get/list_video/all_video_wedding_template`)
          setListTemp2(res.data.list_sukien_video_wedding)
          let vid = listTemp2.find((item)=>item.link_video.toUpperCase().includes(videoName!))
          if (vid) setVidGoc(vid.link_video)
        } catch (error) {
          console.log(error)
        }
    }
    useEffect(()=>{
        fetchImg()
         
    },[])
    useEffect(()=>{
        fetchUser()
        fetchEvent()
    },[id_user,id_sukien])
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
                <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] mt-[10px] md:ml-[210px] mb-7  ml-7">Create funny wedding video with swapping AI!!! <a href="/listvideotemplate" className="font-bold"><span>Choose a template to start now ^0^</span></a></h5>
                <div className="mx-auto p-[50px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8">
                <div className="">
                <div className="mx-auto">       
                    <h2 className="font-bold text-xl mb-3">Author</h2>
                    <div className="flex mb-7">
                    <div className="w-[80px] h-[80px]">
                        {
                              user1.link_avatar?.includes("https://futurelove.online")
                              ?
                              <img className="h-full w-full object-cover" src={`${user1.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              (
                                user1.link_avatar!="https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw"?
                                <img className="h-full w-full object-cover" src={`https://futurelove.online/${user1.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="undefind image" />
                              :
                              <img className="h-full w-full object-cover" src={`${user1.link_avatar}`} alt="" />
                              )
                            }
                    </div>
                    <div className="block ml-4">
                     <Link to={`/profile/${id_user}`}><span className="text-xl hover:underline font-[500] hover:font-bold cursor-pointer">{user1.user_name}</span></Link> <br />
                     <span className="italic text-[10px]">{listTemp[0]?.thoigian_sukien}</span>
                    </div>
                    </div>
                    <div className="md:h-[300px] md:w-[300px] h-[150px] w-[150px] mx-auto">
                        <img src={listTemp[0]?.link_image.includes('/var/www/build_futurelove/')?`https://futurelove.online/${listTemp[0]?.link_image.replace("/var/www/build_futurelove/","")}`:listTemp[0]?.link_image} className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] border-4 border-[#d2f6ff] object-cover" alt="111" />
                    </div>
                    <div className=" flex justify-between items-center md:px-[50px] md:gap-[84px] mt-[30px] gap-[30px]">
                    <div className="md:w-[300px] md:h-[400px] w-[150px] h-[200px]">
                        <video src={listTemp[0]?.link_video_goc} className="w-full h-full object-contain border-4 border-[#dff9ff]" controls/>
                    </div>
                    <div className="w-[100px] h-[100px] md:block hidden">
                        <img src="../../../heart.png" className="object-cover" alt="" />
                    </div>
                    <div className="md:w-[300px] md:h-[400px] w-[150px] h-[200px]">
                        <video src={listTemp[0]?.link_video_da_swap} className="w-full h-full object-contain border-4 border-[#dff9ff]" controls/>
                    </div>
                     </div>              
                    <div className="">

                    </div>
                </div>
                    </div>
                </div>
                </div>
            </div>
                
        </>
    )
}
export default EventVideo