import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog"



const HomePage = () => {
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
  return (
    <div className="text-center ">
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
                              user.link_avatar.includes("https://futurelove.online")
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
          <div className="bg-[#F2FDFF] md:w-[1440px] md:h-[790px] h-[620px] w-[360px] relative mx-auto z-0">  
              <div className=" md:right-2 md:pt-[154px] md:ml-[700px] w-[320px] md:w-fit pt-8 mx-auto items-center justify-center text-center z-0">
                <img src="img\ba-bpn.png " className="" alt="" />
              </div>
              <div className="absolute md:w-[623px] text-left md:top-[240px] md:left-[200px] md:ml-0 ml-[40px] md:mt-0 mx-auto items-center justify-center">
                <h1 className="text-[#009DC4] md:font-[900] md:text-[56px] md:leading-[68px] font-black text-[28px]">AI Face Swap Online</h1>
                <h2 className="text-[#009DC4] md:font-[700] md:text-[40px] md:leading-[40px] md:my-3 font-extrabold text-[20px]">Make Your Dream Wedding</h2>
                <p className="text-[#000] md:font-[500] md:text-[24px] md:leading-[24px] md:w-[500px] font-semibold text-[16px] w-[300px]">Upload your photos to swap the face with AI. Experience powerful realistic face swapping effects. Create gorgeous wedding photos!</p>
                <Link to={`/listcategories`}><button className="text-[#fff] bg-[#33C5E9] mt-8 rounded-3xl px-[20px] py-[10px] text-center font-[800] text-[20px] leading-[20px] ml-3 flex">
                  <span>Start face swapping</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>

                </button></Link>
              </div>
              
          </div>
          <div className="bg-[#FFF] md:w-[1440px] md:mx-auto md:mb-[100px] mt-5 md:mt-0 mx-auto justify-center">
              <h1 className="md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center md:mt-[100px] md:mb-[50px] text-[24px] font-extrabold mx-auto justify-center">How to Swap a Face Online</h1>
              <div className="md:grid md:grid-cols-2 md:px-[100px] md:gap-8 mt-10 mx-auto">
              <div className="">
              <ul className=" space-y-2 ulhome md:block hidden mx-auto">
                <li className="">
                  <div className="rounded-xl my-auto hover:shadow-xl  w-[550px] h-[170px] cards mx-auto">
                    <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">1</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Upload an Image</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Simply click 'Upload an Image' and select 2 photos you want to use as the source image. Ensure only one face in the photo is of good quality.</p>
                    </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="rounded-xl hover:shadow-xl w-[550px] h-[170px] cards card1 mx-auto">
                    <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">2</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Swap Face with AI</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Click the 'Swap Face Now' button to show AI its magic. Faceswapper will finish face swapping in a few seconds. Our AI does the job automatically while guaranteeing the best output.</p>
                    </div>
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="rounded-xl my-auto hover:shadow-xl w-[550px] h-[170px] cards card1 mx-auto">
                    <div className="flex gap-[16px] pt-6 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">3</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Preview and Download</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Bingo! Your face is swapped to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!</p>
                    </div>
                    </div>
                  </div>
                </li>
              </ul>
              </div>
                <div className="px-5 md:px-0 md:w-[448px] md:h-[528px] w-[300px] h-[300px]  rounded-3xl overflow-hidden mx-auto">
                  <img src="img\cd9.jpg" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <Carousel className="block md:hidden ml-5 pb-3 mx-auto">
              <CarouselContent>
                  <CarouselItem className="">
                    <li className="">
                    <div className="rounded-xl my-auto hover:shadow-xl  md:w-[550px] h-[170px] w-[390px] cards mx-auto">
                      <div className="flex gap-[16px] pt-3 pl-6 group">
                      <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">1</strong>
                      <div className="mt-[10px] text-xs font-medium text-gray-300">
                        <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Upload an Image</h5>
                        <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Simply click 'Upload an Image' and select 2 photos you want to use as the source image. Ensure only one face in the photo is of good quality.</p>
                      </div>
                      </div>
                    </div>
                  </li>
                  </CarouselItem>
                  <CarouselItem >
                  <li className="">
                  <div className="rounded-xl hover:shadow-xl md:w-[550px] h-[170px] w-[390px] cards card1 mx-auto">
                    <div className="flex gap-[16px] pt-3 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">2</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Swap Face with AI</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Click the 'Swap Face Now' button to show AI its magic. Faceswapper will finish face swapping in a few seconds. Our AI does the job automatically while guaranteeing the best output.</p>
                    </div>
                    </div>
                  </div>
                </li>
                  </CarouselItem>
                  <CarouselItem >
                  <li className=" ">
                  <div className="rounded-xl my-auto hover:shadow-xl md:w-[550px] w-[390px] h-[170px] cards card1 mx-auto">
                    <div className="flex gap-[16px] pt-3 pl-6 group">
                    <strong className="font-black text-black text-[60px] group-hover:text-[#33C5E9]">3</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left group-hover:text-[#33C5E9]">Preview and Download</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Bingo! Your face is swapped to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!</p>
                    </div>
                    </div>
                  </div>
                </li>
                  </CarouselItem>
              </CarouselContent>
              </Carousel>
          </div>
          <div className="bg-[#F2FDFF] md:h-[707px] md:py-[95px] py-11">
          <h1 className="md:w-[1064px] w-[310px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">Your Ultimate AI Maker to Generate Wedding Photos for Free</h1>
            <div className="md:grid md:grid-cols-3 md:gap-[48px] md:mx-[100px] md:my-auto md:mt-[45px] mt-5 w-[352px] md:w-auto mx-auto">
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <img src="img\easy-to-use 2.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">Easy to use</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">All you need to do is upload 2 excellent face portrait. AI will swap faces smoothly without requiring manual editing.</p>
                </div>
              </div>
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-7 md:mt-0">
                <img src="img\light.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">Privacy Protection</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">We promise that all your uploaded images and other data will be protected well. No one will see these things except yourself. We make sure the face swapping procedure is highly private.</p>
                </div>
              </div>
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-7 md:mt-0">
                <img src="img\lights.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">One-sec Face Swap</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">This online AI face swap app can switch to the faces of anyone online. No installation, no ads, and no watermarks! Create your face magic in fantastic style and without too much effort!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] md:py-[95px] py-11">
          <h1 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">Jump Start Your Creation with 50+ Wedding Photos Template</h1>
          <div className="md:grid grid-cols-3 gap-6 mx-[125px] mt-[50px] hidden">
            <div className=" w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal1.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal2.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal3.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal4.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px]  h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal5.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal6.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal7.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal8.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="w-[355px] h-[254px] rounded-xl overflow-hidden">
              <img src="img\gal9.png" className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="mx-[60px] mt-5 md:hidden block">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4">
                    <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal1.png" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal2.png" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal3.png" className="w-full h-full object-cover"  alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal4.png" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-2 gap-4  ">
                    <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal5.png" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal6.png" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal7.png" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="w-[150px] h-[110px] rounded-lg overflow-hidden">
                    <img src="img\gal8.png" className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
              <CarouselNext/>
          </Carousel>
          </div>
          </div>
          <div className="bg-[#F2FDFF] md:h-[1061px] md:py-[110px] py-11 ">
            <h1 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">Say Goodbye to Photographer, Studios, Expense and More</h1>
            <div className="md:grid grid-cols-2 md:px-[120px] mt-10 w-[352px] md:w-auto mx-auto">
              <div className="md:w-[544px] w-[352px] md:p-[32px] p-8 block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">Traditional Wedding Photo</h5>
                <div className="h-[354px]">
                <img className="mt-[30px] h-full w-full object-contain" src="img\cd1.png" alt="" />
                </div>
                <div className="mt-[30px] text-left">
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-2">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    High cost of cameras, studios, sound stage, etc.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Long time in preparing, shooting, and editing.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Complex manual processes through all stages.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Hard to update the photos after done
                  </li>
                </div>
              </div>
              <div className="md:w-[544px] w-[352px] md:p-[32px] p-8 block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-9 md:mt-0">
                <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">AI Wedding Photo</h5>
                <div className="h-[354px]">
                <img className="mt-[30px] h-full w-full object-contain" src="img\cd2.png" alt="" />
                </div>
                <div className="mt-[30px] text-left">
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    No camera, no studios, no more specific environment
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Choose from 50+ AI frames, without hiring studios.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Generate AI photos within several minutes
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Intuitive & easy processes powered by AI tech.
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] md:h-[876px] md:py-[110px] py-11 flex gap-2">
              
            <div className="md:w-[1200px] w-[360px] items-center mx-auto justify-center">
              <h1 className="md:w-[1064px] w-[360px] md:font-[800] md:text-[48px] leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">Trusted by Millions of Creators and Companies Worldwide</h1>
              <div className="md:w-[1200px] w-[360px] md:mt-[40px] mx-auto items-center justify-center text-center mt-5">
              <Carousel
              opts={{
                align: "start",
              }}
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/3">
                    <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl1.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                  </div>
                  </CarouselItem >
                  <CarouselItem className="md:basis-1/3">
                    <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl2.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                  </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl3.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                  </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/3">
                    <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <img src="img\cdl2.png" alt="" />
                    <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                  </div>
                  </CarouselItem>
                  
                </CarouselContent> 
                <CarouselPrevious className="md:block hidden"/>
                  <CarouselNext  className="md:block hidden"/>   
              </Carousel>
              </div>
            </div>
            
          </div>
          <div className="bg-white md:h-[400px] pb-3">
            <h2 className="md:w-[1064px] w-[300px] md:font-[800] md:text-[48px] md:leading-[58px] text-black text-center mx-auto text-[24px] font-extrabold">Make Wedding Photo Easy for All!</h2>
            <h5 className="font-[500] text-[24px] md:leading-[30px] mt-10 md:w-[1120px] w-[300px] px-[5px] mx-auto">Use the power of AI to create professional wedding photos faster, with less effort and cost. Create your dream wedding . Get started with Wedding AI!</h5> 
            <Link to={`/listcategories`}><button className="text-[#fff] w-[340px] bg-[#009DC4] mt-11 rounded-3xl px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[20px] flex mx-auto items-center">
              <div className="mx-auto flex">
                  <span className="">Create Free Wedding Photo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
              </div>                 
            </button></Link>           
          </div>
          <Footer/>
    </div>
  )
}

export default HomePage
