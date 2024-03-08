
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [checkUser, setCheckUser] = useState(false)
  const [user, setUser] = useState({id_user:'', link_avatar:''})
  useEffect(()=>{
   setUser(JSON.parse(String(localStorage.getItem('user'))))
   if(localStorage.getItem('user')) setCheckUser(true)
  },[])
   const logOut = () =>{
       localStorage.clear();
       window.location.reload()
   }
   const [isOpen, setIsOpen] = useState(false)
    return (
      <>
            <header className="bg-white md:w-[1440px]">
              <div className="mx-auto">
                <div className="flex h-16 items-center justify-between">
                  <div className="md:flex md:items-center md:gap-4">
                    <Link to={'/'}><img src="img\logo.png" alt="" /></Link>
                    <div className="ml-[-200px] md:flex md:items-center md:gap-4 hidden">
                      <Link to={'/'}><img src="img\512x512.png" alt=""  className="object-contain h-10"/></Link>
                      <Link to={'https://play.google.com/store/apps/details?id=com.app.fakewedding'}><img src="img\512x5121.png" className="object-contain h-10" alt="" /></Link>
                    </div>
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
                          <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to="/aboutus"> About Us </Link>
                        </li>
  
                        <li>
                          <Link className="text-gray-500 transition hover:text-gray-500/75 font-['Montserrat']" to="/policy"> Policy</Link>
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
                        <div>
                          {isOpen?
                          <ul className="fixed inset-0 z-50 bg-white">
                            <button onClick={()=>setIsOpen(false)} className="mt-7 absolute right-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                            </svg>

                            </button>
                          <li className="mt-[50px]">
                            {
                              checkUser? 
                              <Link to={`/profile/edit/${user?.id_user}`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Profile
                            </Link> 
                            : 
                              <Link to={`/signin`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Sign In
                            </Link>
                            }
                            
                          </li>
                          <li className="mt-3">
                            <Link to={`/timeline`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Timeline
                            </Link>
                          </li>
                          <li className="mt-3">
                            <Link to={`/funnyvideo`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Funny Video
                            </Link>
                          </li>
                          <li className="mt-3">
                            <Link to={`/listvideotemplate`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Swap Video
                            </Link>
                          </li>
                          {
                            checkUser&&
                            <li className="mt-3">
                            <Link to={`/profile/${user.id_user}`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              My profile
                            </Link>
                            </li>
                          }
                          <li className="mt-3">
                            <Link to={`/aboutus`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              About Us
                            </Link>

                          </li> 
                          <li className="mt-3">
                            <Link to={`/policy`} className="block rounded-lg w-[300px] hover:bg-[#d6f1f6] px-4 py-2 text-sm font-medium text-gray-700 text-center mx-auto">
                              Policy
                            </Link>
                          </li>
                          {
                              checkUser? <li>
                              <button onClick={()=>{confirm('Are you fucking sure?')&&logOut()}} className="flex cursor-pointer items-center p-2 mt-2 text-slate-500 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-center mx-auto">               
                              <span className="ms-2 flex rounded-lg  hover:bg-[#d6f1f6] text-sm font-medium text-gray-700 text-center mx-auto">Logout <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                              </svg>
                              </span>
                              </button>
                          </li> :  <></> 
                          }
                          <div className="">
                            <Link to={'/'}><img src="img\512x512.png" alt=""  className="object-contain w-[30%] mx-auto mt-4"/></Link>
                            <Link to={'https://play.google.com/store/apps/details?id=com.app.fakewedding'}><img src="img\512x5121.png" className="object-contain w-[30%] mx-auto mt-4" alt="" /></Link>
                          </div>                 
                        </ul>
                        :
                        <button onClick={()=>setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                          </svg>
                          </button>
                        }
                          
                        </div>
                    </div>
                  </div>
                </div>
              </div>
          </header>
      </>
    )
  }
  
  export default Header
  