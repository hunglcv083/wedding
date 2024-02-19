
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import { albumType } from "../../common/types/Album"
import { Button } from "../../components/ui/button"
import Header from "../../components/Header"
type listItemType = {
  id?:number,
  id_saved:string,
  link_video_goc?:string,
  link_image?:string,
  link_video_da_swap:string,
  thoi_gian_su_kien?:string,
  id_user?:string
}
const Profile = () =>{
    const {id} = useParams()
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:'',id_user:''})
    const [album, setAlbum] = useState<albumType[]>([])
    
    const [isOpen, setIsOpen] = useState(false)
    const [currentAlbum, setCurrentAlbum] = useState(1)
    useEffect(()=>{
    axios.get(`https://databaseswap.mangasocial.online/profile/${id}`)
        .then((res) => setUser(res.data))
    axios.get(`https://databaseswap.mangasocial.online/get/list_2_image/id_image_swap?id_user=${id}`)
        .then(res=>setAlbum(res.data))  
      },[]) 
    const [listTemp, setListTemp] = useState<listItemType[]|[]>([{id_saved:'', link_video_da_swap:''}]);
    useEffect(()=>{
        axios.get(`https://databaseswap.mangasocial.online/get/list_video_wedding/id_video_swap?id_user=${id}`).then(res => {
                setListTemp(res.data.list_sukien_video);                
        })
    },[id])
    const [currentUser, setCurrentUser] = useState({id_user:'',link_avatar:''})
    useEffect(()=>{
      if(localStorage.getItem('user')) {
        setCurrentUser(JSON.parse(localStorage.getItem('user')||''))
      }
    },[])
    let albumData = []
    for(let item of album){
    albumData.push(item.list_sukien_image)
    }
    const navi = useNavigate()
    
    const handleOpenAlbum = (albumIndex:number) => {
      setCurrentAlbum(albumIndex)
      setIsOpen(true)
    }
    return(
        <>  
            {isOpen&&
                (<div className="fixed inset-0 z-50 bg-black/50">
                  <div className="cursor-pointer" onClick={()=>setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10 float-right mr-[30px] mt-[30px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                  </div>
                <div className="absolute top-[50%] left-[50%] z-50 md:w-[50%] w-[70%] translate-x-[-50%] translate-y-[-50%] gap-4 border md:p-6 p-2 shadow-lg rounded-2xl items-center justify-center text-center bg-white opacity-100">
                    <Carousel>
                     <div className="md:py-[30px]">             
                          <CarouselContent>
                            {
                              albumData&&albumData[currentAlbum]?.map((item:{link_da_swap:string},index:number)=>{
                                return <>     
                                  <CarouselItem key={index}>
                                    <div className="group relative overflow-hidden flex items-center justify-center">
                                  <div className="md:w-[1000px] md:h-[100vh] w-[260px] h-[350px] rounded-2xl overflow-hidden mx-auto my-auto">
                                          <img src={item.link_da_swap} className="h-full w-full object-contain" alt="empty image"/>
                                  </div>
                                  </div>
                                  </CarouselItem>
                                </>
                              })
                            }
                          </CarouselContent>                 
                     </div>
                     <CarouselPrevious/>
                    <CarouselNext/>
                     </Carousel>
                 </div>
                  </div>) 
            }  
            <div className="bg-[#F2FDFF]">
            <Header/>
            <div className="pb-[70px] pt-[40px]">
                <Link to={'/'} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#808080" className="w-10 h-10 float-right mr-[40px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] ml-7 mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto p-[24px] md:w-[1020px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8">
                <div className="md:w-[340px] w-[390px]">
                    <div className="bg-white border-l-[16px] rounded-xl border-[#16B6D4] md:pl-11 pl-2 flex md:block">
                        <div className="md:w-[256px] md:h-[256px] w-[100px] h-[100px]  md:rounded-[256px] rounded-[100px] overflow-hidden">
                        {
                              user.link_avatar.includes("https://futurelove.online/")
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
                        <div className="text-[16px] md:text-[18px] font-[400] leading-[24px] mt-2 ml-2">
                        <p className="text-[24px] font-[700] leading-[24px] mt-2">{user.user_name}</p>
                        <p className="italic">{user.email}</p>
                        <p className="italic">IP: {user.ip_register}</p>
                        <p className="italic">Device: {user.device_register}</p>
                        <p className="italic">Events: {user.count_sukien}</p>
                        <p className="italic">Comments: {user.count_comment}</p>
                        <p className="italic">Views: {user.count_view}</p>
                        </div>
                    </div>
                    {
                      ((currentUser.id_user==id)&&<Button onClick={()=>navi(`/profile/edit/${currentUser.id_user}`)} variant={"cus2"} className="mx-auto">Edit Profile</Button>)
                    }
                </div>
                <div className="md:w-full">
                    <h3 className="font-[600] text-[24px] leading-[48px] ml-[10px] mb-[30px] mt-[10px] italic">Wedding Album</h3>
                        <div className="grid grid-cols-2 gap-4">
                        {
                        albumData.map((image, index) => {
                            return (
                                <div key={index} className="group relative overflow-hidden flex items-center justify-center " >
                                <div className="md:w-[300px] md:h-[450px] w-[150px] h-[225px] hover:opacity-70 rounded-2xl overflow-hidden">
                                        <img src={image[0].link_da_swap} className="h-full w-full object-cover" alt={`Image ${index}`}/>
                                </div>
                                <div className="absolute">
                                        <Link to={`/timeline/event/${image[0].id_sk_album}`}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl">View Event's Detail</Button></Link> <br />
                                          <Button variant={"outline"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 w-[160px] mt-3 rounded-3xl" onClick={()=>handleOpenAlbum(index)}>View Album</Button>
                                        
                                                
                                        </div>
                                </div>                            
                            )
                        })
                        }
                        </div>
                        <h3 className="font-[600] text-[24px] leading-[48px] ml-[10px] mb-[30px] mt-[10px] italic">Funny Video</h3>
                        <div className="grid grid-cols-2 gap-4">
                        {
                        listTemp.map((video, index) => {
                            return (
                                <div key={index} className="group relative overflow-hidden flex items-center justify-center " >
                                <div className="md:w-[300px] md:h-[450px] w-[150px] h-[225px] hover:opacity-90 rounded-2xl overflow-hidden">
                                        <video src={video.link_video_da_swap} className="h-full w-full object-cover" controls/>
                                </div>
                                <div className="absolute">
                                        <Link to={`/funnyvideo/detail/${id}/${video.id_saved}`}><Button variant={"default"} className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 
                                                group-hover:translate-y-0 w-[160px] rounded-3xl">View Event's Detail</Button></Link> <br />
                                        </div>
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
export default Profile