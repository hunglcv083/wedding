import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog"
import { useEffect, useState } from "react"
const Generate = () => {
    const [seeMore, setSeeMore] = useState<boolean>(false);
   const [checkUser, setCheckUser] = useState(false)
   const [user, setUser] = useState({id_user:'', link_avatar:''})
   useEffect(()=>{
    setUser(JSON.parse(String(localStorage.getItem('user'))))
    if(localStorage.getItem('user')) setCheckUser(true)
   },[])
   const navi = useNavigate()
   const logOut = () =>{
       localStorage.clear();
       navi('/')
   }
   const locate = useLocation()
   const { data,src_res_1,src_res_2 } = locate.state || {}
   console.log(data,src_res_1,src_res_2)
    return(
        <>
            <div className="bg-[#F2FDFF]">
            <header className="bg-white md:w-[1440px] mx-auto w-[390px]">
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
            <div className="md:pb-[70px] md:pt-[60px] pt-[30px] pb-[30px] md:w-[1440px] w-[390px]">
                <div className="flex md:h-[256px] md:ml-[160px] gap-6 ml-[33px] ">
                    <div className="rounded-[20px] overflow-hidden md:w-[256px] w-[150px] md:mr-[50px]">
                        <img className="w-full h-full object-cover" src={`https://futurelove.online/${src_res_1.replace("/var/www/build_futurelove/","")}`} alt="" />
                    </div>
                    <svg width="161" className="mt-[60px] hidden md:block" height="141" viewBox="0 0 161 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80.3202 44.7407H80.3209C85.513 44.7467 90.6425 45.8818 95.3588 48.0683C100.075 50.2548 104.267 53.4411 107.648 57.4093C111.029 61.3774 113.519 66.0338 114.949 71.0602C116.379 76.0865 116.715 81.3645 115.933 86.5334C115.933 86.5335 115.933 86.5335 115.933 86.5335L115.439 86.4588C115.309 87.3161 114.847 88.0866 114.154 88.6007C113.46 89.1147 112.593 89.3303 111.742 89.1999C110.891 89.0695 110.126 88.6039 109.615 87.9055C109.105 87.2071 108.891 86.3331 109.021 85.4757L80.3202 44.7407ZM80.3202 44.7407C74.7163 44.742 69.19 46.06 64.1807 48.5897C59.1714 51.1195 54.8173 54.7912 51.4642 59.3128C48.1111 63.8343 45.8513 69.0811 44.8643 74.6362C43.8773 80.1912 44.1902 85.9016 45.7781 91.3135C47.366 96.7255 50.1853 101.69 54.0121 105.813C57.839 109.935 62.568 113.102 67.8234 115.061C73.0788 117.02 78.7155 117.717 84.2855 117.097C89.8555 116.478 95.205 114.557 99.9087 111.49L99.9091 111.49C100.743 110.945 101.326 110.089 101.533 109.112C101.74 108.136 101.553 107.116 101.012 106.277C100.472 105.438 99.6227 104.849 98.65 104.641C97.6773 104.432 96.6624 104.621 95.8288 105.166L80.3202 44.7407ZM146.82 46.8756V46.875C146.817 43.5652 145.51 40.3912 143.185 38.0497C140.861 35.708 137.708 34.3902 134.419 34.3866H134.419H112.326L108.746 20.9315L108.746 20.931C108.037 18.2777 106.48 15.9327 104.315 14.2591C102.15 12.5854 99.497 11.6763 96.7668 11.673H96.7662C91.1373 11.673 86.2601 11.6175 82.0306 11.5694C77.6706 11.5198 73.9989 11.478 70.9012 11.5129C64.8056 11.5816 60.7872 11.9436 57.9753 13.1813C55.1005 14.4466 53.5371 16.5999 52.2571 20.0358C51.3821 22.3843 50.6199 25.3906 49.6565 29.19C49.2533 30.78 48.8149 32.5089 48.3184 34.3866H26.222H26.2214C22.9323 34.3902 19.7798 35.708 17.4552 38.0497C15.1307 40.3912 13.8239 43.5652 13.8203 46.875V46.8756L13.8203 117.011L13.8203 117.012C13.8239 120.321 15.1307 123.495 17.4552 125.837C19.7798 128.179 22.9323 129.496 26.2214 129.5H26.222H134.419H134.419C137.708 129.496 140.861 128.179 143.185 125.837C145.51 123.495 146.817 120.321 146.82 117.012V117.011V46.8756ZM104.445 98.946C104.759 99.8958 105.436 100.682 106.327 101.131C106.768 101.353 107.248 101.486 107.74 101.521C108.233 101.556 108.727 101.493 109.195 101.336C109.663 101.179 110.095 100.931 110.468 100.605C110.84 100.28 111.145 99.8842 111.365 99.4406C111.585 98.9971 111.716 98.5143 111.751 98.02C111.786 97.5256 111.724 97.0291 111.569 96.5588C111.413 96.0884 111.167 95.6534 110.844 95.2785C110.521 94.9036 110.128 94.5962 109.687 94.374C108.796 93.9252 107.764 93.8513 106.819 94.1687C105.873 94.4861 105.093 95.1684 104.648 96.0642C104.204 96.9598 104.131 97.9963 104.445 98.946ZM74.2353 34.5692H86.4075C87.4021 34.5692 88.3553 34.1711 89.0575 33.4638C89.7596 32.7565 90.1534 31.7981 90.1534 30.7995C90.1534 29.8009 89.7596 28.8424 89.0575 28.1352C88.3553 27.4278 87.4021 27.0298 86.4075 27.0298H74.2353C73.2407 27.0298 72.2875 27.4278 71.5853 28.1352C70.8832 28.8424 70.4894 29.8009 70.4894 30.7995C70.4894 31.7981 70.8832 32.7565 71.5853 33.4638C72.2875 34.1711 73.2407 34.5692 74.2353 34.5692ZM29.8464 57.0945C29.8464 59.1428 30.6211 60.7158 31.8109 61.7717C32.9915 62.8193 34.5514 63.3326 36.0948 63.3329C37.6382 63.3332 39.1982 62.8205 40.3788 61.7729C41.5688 60.7171 42.3434 59.1438 42.3434 57.0945C42.3434 55.0453 41.5688 53.4715 40.379 52.415C39.1984 51.3668 37.6385 50.8532 36.095 50.8529C34.5515 50.8526 32.9915 51.3656 31.8109 52.4138C30.621 53.4702 29.8464 55.0443 29.8464 57.0945ZM137.889 43.3744C138.81 44.3024 139.329 45.5617 139.329 46.8756V117.011C139.329 118.325 138.81 119.584 137.889 120.512C136.968 121.44 135.72 121.961 134.419 121.961H26.222C24.921 121.961 23.6725 121.44 22.7515 120.512C21.8303 119.584 21.3121 118.325 21.3121 117.011V46.8756C21.3121 45.5617 21.8303 44.3024 22.7515 43.3744C23.6725 42.4466 24.921 41.9261 26.222 41.9261H51.1938C52.0653 41.9261 52.8155 41.7995 53.4576 41.2369C54.0694 40.701 54.5152 39.8249 54.9658 38.5265C55.5207 36.9278 56.1313 34.5282 57.034 30.9808C57.5993 28.7592 58.2792 26.0873 59.1317 22.88C59.4119 21.8269 60.029 20.8969 60.8866 20.2341C61.7442 19.5712 62.7944 19.2123 63.8744 19.2124H96.7662C97.8462 19.2123 98.8964 19.5712 99.754 20.2341C100.612 20.8969 101.229 21.8269 101.509 22.8801C102.353 26.0541 103.028 28.7029 103.591 30.9097C104.511 34.519 105.13 36.9459 105.69 38.5541C106.141 39.8479 106.586 40.7179 107.196 41.2483C107.837 41.8049 108.583 41.9261 109.447 41.9261H134.419C135.72 41.9261 136.968 42.4466 137.889 43.3744Z" fill="#009DC4" stroke="#009DC4"/>
                    <path d="M96.982 68.9018C90.9923 63.5468 84.2444 66.6752 80.3272 70.0574C76.4099 66.6752 69.662 63.5468 63.6471 68.9018C59.932 72.1994 58.3903 77.7517 59.6287 83.3885C61.5242 92.0693 69.0807 98.6644 79.8217 101.032C79.9986 101.06 80.1502 101.088 80.3272 101.088C80.4788 101.088 80.6557 101.06 80.8073 101.032C91.5736 98.6644 99.1301 92.0693 101.026 83.3885C102.239 77.7517 100.697 72.1994 96.982 68.9018Z" fill="#009DC4"/>
                    </svg>
                    <div className="rounded-[20px] overflow-hidden md:w-[256px] w-[150px] md:ml-[50px]">
                        <img className="w-full h-full object-cover" src={`https://futurelove.online/${src_res_2.replace("/var/www/build_futurelove/","")}`} alt="" />
                    </div>
                    <div className="hidden md:block">
                         <div className="ml-6 mt-[60px]">
                         <Button onClick={()=>navi(-1)} variant={"cus3"} className="w-[170px] h-[50px]">
                            Create new
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button> <br />
                        <Button onClick={()=>navi(`/preview`, {state:{data}})} variant={"cus3"} className="w-[240px] h-[50px] mt-6">
                            <span className="text-left">Go to your collection</span>
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                            </div>                              
                    </div>
                </div>
                  <Button onClick={()=>navi(-1)} variant={"cus3"} className="w-[330px] h-[50px] md:hidden my-4 ml-[30px]">
                            Create new
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                  </Button>
                  <Button onClick={()=>navi(`/preview`, {state:{data}})} variant={"cus3"} className="w-[330px] h-[50px] md:hidden my-4 ml-[30px]">
                            Go to your collection
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                  </Button>
                <div className="md:ml-[160px] md:w-[1120px] w-[370px] md:mt-11 ml-[10px] md:block hidden">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="">
                            <img className="w-full h-full object-cover" src={data.sukien_2_image.link_da_swap} alt="aaa" />
                        </div>
                        <div className=" grid grid-cols-2 gap-6">
                            <div className="">
                                <img className="w-full h-full object-cover" src={data.link_anh_swap[0]} alt="aaa" />
                            </div>
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[1]} alt="" />
                            </div>
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[2]} alt="" />
                            </div>
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[3]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 md:w-[1120px] w-[370px] mt-6 gap-6">
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[4]} />
                            </div>
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[5]} alt="" />
                            </div>
                            <div className="">
                            <img className="w-full h-full object-cover" src={data.link_anh_swap[6]} alt="" />
                            </div>
                            {
                              seeMore &&
                              data.link_anh_swap.slice(7,25).map((img:string,index:number)=>{
                                return(<img key={index} className="w-full h-full object-cover" src={img} alt="" />)
                              })                           
                            }
                    </div>
                </div>
                <div className="md:ml-[160px] md:w-[1120px] w-[360px] md:mt-11 ml-[15px] items-center justify-center md:hidden">
                    <div className="grid grid-cols-2 gap-4">
                    {
                    data.link_anh_swap.slice(1,45).map((img:string,index:number)=>{
                        return(
                            <div className="w-[175px] h-[205px] rounded-3xl overflow-hidden" key={index}>
                            <img className="w-full object-cover h-full" src={img} alt="" />
                            </div>
                        )
                    })
                }
                    </div>
                </div>
                    <Button onClick={() => { setSeeMore(prev => { return !prev }) }} variant={"cus3"} className="md:w-[544px] w-[250px] h-[50px] mt-11 md:ml-[448px] ml-[55px] hidden md:block">
                        <span className="text-left">See {seeMore ? 'less' : 'more'} results</span>   
                    </Button>
            </div>
            </div>
        </>
    )
}
export default Generate