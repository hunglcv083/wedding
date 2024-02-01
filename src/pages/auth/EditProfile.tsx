
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react"
import { Dialog, DialogContent,DialogTrigger } from "../../components/ui/dialog"
const EditProfile = () =>{

    const {id} = useParams()
    const navi = useNavigate()
    const logOut = () =>{
        localStorage.clear();
        navi('/')
    }
    const [currentFunc, setCurrentFunc] = useState("Edit Profile")
    const handleChangeFunc = (current:string) =>{
            setCurrentFunc(current)
        console.log(currentFunc)
    }
    const [checkUser, setCheckUser] = useState(false)
    const [user, setUser] = useState({id_user:'', link_avatar:''})
    useEffect(()=>{
        setUser(JSON.parse(String(localStorage.getItem('user'))))
        if(localStorage.getItem('user')) setCheckUser(true)
    },[])
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
                <h1 className="font-[600] text-[40px] leading-[48px] md:ml-[210px] m-[30px] mb-[30px] mt-[10px]">Profile</h1>
                <div className="mx-auto md:w-[1020px] w-[390px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring md:flex gap-8 md:p-[24px]">
                <div className="transition-transform -translate-x-full sm:translate-x-0 w-[280px] hidden md:block">
                    <div className="bg-white">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to={`/profile/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`edit/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">Edit Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`account/${id}`} className="flex items-center p-2 text-slate-500 hover:text-black rounded-lg  hover:bg-gray-100  group">               
                                <span className="ms-3">Account</span>
                                </Link>
                            </li>
                            <li>
                                <span onClick={()=>{confirm('Are you fucking sure?')&&logOut()}} className="flex cursor-pointer items-center p-2 text-slate-500 hover:text-black rounded-lg hover:bg-gray-100  group">               
                                <span className="ms-3 flex">Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                                </svg>
                                </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                <div className="">
                
                </div>
                </div>
                <div className="md:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger asChild className="mx-auto">
                    <Button variant="outline2" className="w-[345px] justify-between ml-6 mt-3 outline-none"> 
                    <span>{currentFunc}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="#6F767E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[345px] bg-white p-2">
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                    
                    className="w-full bg-[#fff] hover:bg-accent hover:text-accent-foreground p-2 rounded-lg"
                    >
                    <Link to={`edit/${id}`} ><button onClick={()=>handleChangeFunc("Edit Profile")}>Edit Profile</button></Link>
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuCheckboxItem
                    
                    className="w-full bg-[#fff] hover:bg-accent hover:text-accent-foreground p-2 rounded-lg mt-2"
                    >
                    <Link to={`account/${id}`} ><button onClick={()=>handleChangeFunc("Change Password")}>Change Password</button></Link>
                    </DropdownMenuCheckboxItem>                 
                </DropdownMenuContent>
                </DropdownMenu>
                </div>
                 <Outlet/>              
                </div>
                
            </div>
            </div>
        </>
    )
}
export default EditProfile