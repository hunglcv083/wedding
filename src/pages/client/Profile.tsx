
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog"

const Profile = () =>{

    const {id} = useParams()
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:''})
    const [uploadedImage, setUploadedImage] = useState<string[] | []>([]);
    useEffect(()=>{
    axios.get(`https://metatechvn.store/profile/${id}`)
        .then((res) => setUser(res.data))
    axios.get(`https://metatechvn.store/images/${id}?type=video`).then(res => {
                setUploadedImage(res.data.image_links_video);
        })  
      },[]) 
    const [checkUser, setCheckUser] = useState(false)
    useEffect(()=>{
      if(localStorage.getItem('user')) setCheckUser(true)
    },[])
    
    const navi = useNavigate()
    const logOut = () =>{
       localStorage.clear();
       navi('/')
   }
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
                              user.link_avatar.includes("https://futurelove.online/")
                              ?
                              <img className="h-full w-full" src={`${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
                              :
                              <img className="h-full w-full" src={`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
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
                              <img className="h-full w-full object-cover" src={`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`} alt="" />
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
                </div>
                <div className="md:w-full">
                    <h1 className="font-[600] text-[40px] leading-[48px] ml-[10px] mb-[30px] mt-[10px]">Library</h1>
                        <div className="grid grid-cols-2 gap-4">
                        {
                        uploadedImage.slice(0,20).map((image, index) => {
                            return (
                                <div key={index} className="group relative overflow-hidden flex items-center justify-center">
                                <div className="md:w-[300px] md:h-[300px] w-[150px] h-[150px] hover:opacity-70 rounded-2xl overflow-hidden">
                                        <img src={image} className="h-full w-full object-cover" alt={`Image ${index}`} />
                                           
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