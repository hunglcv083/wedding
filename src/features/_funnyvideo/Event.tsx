import { Link, useNavigate, useParams } from "react-router-dom"
import { Dialog, DialogContent } from "../../components/ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import {  useEffect, useState } from "react"
import axios from "axios"
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
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:'',id_user:''})
    const [listTemp, setListTemp] = useState<listItemType[]>([{link_video_da_swap:'', link_image:'', thoigian_sukien:''}]);
    const {id_user, id_sukien} = useParams()
     const navi = useNavigate()
    const logOut = () =>{
       localStorage.clear();
       navi('/')
    }
    const [checkUser, setCheckUser] = useState(false)
    useEffect(()=>{
      if(localStorage.getItem('user')) {
        setCheckUser(true)
        setUser(JSON.parse(localStorage.getItem('user')||''))
      }
    },[])
    const fetchUser = () =>{
        axios.get(`https://metatechvn.store/profile/${id_user}`)
        .then((res) => setUser(res.data))
    }
    const fetchEvent = () =>{
        axios.get(`https://metatechvn.store/get/list_video/id_video_swap_all_id_sk?id_user=${id_user}&id_sk=${id_sukien}`)
        .then((res) => setListTemp(res.data.id_su_kien_swap_image))
    }
    const [listTemp2, setListTemp2] = useState<listItemType2[]|[]>([]);
    let videoName:string | undefined
    videoName = (listTemp[0].link_video_goc?.split('/').pop())?.split('.').shift()
    const [,setVidGoc] = useState('')
    const fetchImg = async () => {
        try {
          const res = await axios.get(`https://metatechvn.store/get/list_video/all_video_wedding_template`)
          setListTemp2(res.data.list_sukien_video_wedding)
          let vid = listTemp2.find((item)=>item.link_video.toUpperCase().includes(videoName!))
          console.log(videoName)
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
                 <header className="bg-white md:w-[1440px]">
              <div className="mx-auto">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex-1 md:flex md:items-center md:gap-12">
                    <img src="img\logo.png" alt="" />
                  </div>
  
                  <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                      <ul className="flex items-center gap-6 text-sm">
                        {
                          (checkUser)&&<li>
                                        <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to={`/profile/${user.id_user}`}> My Profile </Link>
                                      </li>
                        }
                        <li>
                          <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to="/listvideotemplate"> Swap Video </Link>
                        </li>
                        <li>
                          <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to="/timeline"> Timeline </Link>
                        </li>
                        <li>
                          <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to="/funnyvideo"> Funny Video </Link>
                        </li>
                        <li>
                          <a className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" href="/"> Services </a>
                        </li>
  
                        <li>
                          <a className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" href="/"> Careers </a>
                        </li>
                        {
                        checkUser 
                        ?
                        <li><Link to={`/profile/edit/${user?.id_user}`}>
                          <div className="w-[40px] h-[40px] rounded-[60px] overflow-hidden">
                            {
                              user.link_avatar.includes("https://futurelove.online")
                              ?
                              <img className="h-full w-full object-cover" src={`${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              (
                                user.link_avatar!="https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw"?
                              <img className="h-full w-full object-cover" src={`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              <img className="h-full w-full object-cover" src={`${user.link_avatar}`} alt="" />
                              )
                            }
                          </div>
                        </Link>                        
                        </li>
                         :
                         <li><Link to={`/signin`}>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-[40px] h-[40px]">
                              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                          </svg>
                          
                        </Link>                        
                        </li>
                        }
                        
                      </ul>
                    </nav>
                    <div className="md:hidden mr-4">
                        <Dialog>
                          <DialogTrigger>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                          </DialogTrigger>
                          <DialogContent className="mt-10 items-start justify-start">
                          <ul className="h-[90vh] pt-5">
                            <li className="">
                              {
                                checkUser? 
                                <Link to={`/profile/edit/${user?.id_user}`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Profile
                              </Link> 
                              : 
                                <Link to={`/signin`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Sign In
                              </Link>
                              }
                              
                            </li>
                            <li className="mt-3">
                              <Link to={``} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Service
                              </Link>

                            </li> 
                            <li className="mt-3">
                              <Link to={``} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                About Us
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link to={`/timeline`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Timeline
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link to={`/funnyvideo`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Funny Video
                              </Link>
                            </li>
                            <li className="mt-3">
                              <Link to={`/listvideotemplate`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                Swap Video
                              </Link>
                            </li>
                            {
                              checkUser&&
                              <li className="mt-3">
                              <Link to={`/profile/${user.id_user}`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 ">
                                My profile
                              </Link>
                              </li>
                            }
                            {
                                checkUser? <li>
                                <span onClick={()=>{confirm('Are you fucking sure?')&&logOut()}} className="flex cursor-pointer items-center p-2 mt-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">               
                                <span className="ms-2 flex">Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
                                </span>
                                </span>
                            </li> :  <></> 
                            }                   
                          </ul>
                          </DialogContent>
                        </Dialog>
                    </div>
                  </div>
                </div>
              </div>
          </header>
            <div className="pb-[70px] pt-[40px]">
                <Link to={'/'} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#808080" className="w-10 h-10 float-right mr-[40px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] ml-7 mb-[30px] mt-[10px]">Funny Video</h1>
                <h5 className="font-[400] italic md:text-[20px] text-[16px] leading-[20px] mt-[10px] md:ml-[210px] mb-7  ml-7">Create funny wedding video with swapping AI!!! <a href="/listvideotemplate" className="font-bold"><span>Choose a template to start now ^0^</span></a></h5>
                <div className="mx-auto p-[50px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8">
                <div className="hidden md:block">
                <div className="mx-auto">       
                    <h2 className="font-bold text-xl mb-3">Author</h2>
                    <div className="flex mb-7">
                    <div className="w-[80px] h-[80px]">
                        {
                              user.link_avatar?.includes("https://futurelove.online")
                              ?
                              <img className="h-full w-full object-cover" src={`${user.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              (
                                user.link_avatar!="https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png?fbclid=IwAR3IUCAOlBSThvKijmWXmNuZk-6oEe1q6k-oGQXGr_zd1zWixMIUfAaAyfw"?
                                <img className="h-full w-full object-cover" src={`https://futurelove.online/${user.link_avatar?.replace("/var/www/build_futurelove/","")}`} alt="undefind image" />
                              :
                              <img className="h-full w-full object-cover" src={`${user.link_avatar}`} alt="" />
                              )
                            }
                    </div>
                    <div className="block ml-4">
                     <Link to={`/profile/${id_user}`}><span className="text-xl hover:underline font-[500] hover:font-bold cursor-pointer">{user.user_name}</span></Link> <br />
                     <span className="italic text-[10px]">{listTemp[0]?.thoigian_sukien}</span>
                    </div>
                    </div>
                    <div className="h-[300px] w-[300px] mx-auto">
                        <img src={listTemp[0]?.link_image} className="h-[300px] w-[300px] border-4 border-[#d2f6ff] object-cover" alt="111" />
                    </div>
                    <div className=" flex justify-between items-center px-[50px] gap-[84px] mt-[30px]">
                    <div className="w-[300px] h-[400px]">
                        <video src={listTemp[0]?.link_video_goc} className="w-full h-full object-contain border-4 border-[#dff9ff]" controls/>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        <img src="../../../heart.png" className="object-cover" alt="" />
                    </div>
                    <div className="w-[300px] h-[400px]">
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