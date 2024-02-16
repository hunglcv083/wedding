import axios from "axios";
import { Button } from "../../components/ui/button"
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../../components/ui/dialog";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { Link, useNavigate, useParams } from "react-router-dom";
import nProgress from "nprogress";
import HashLoader from "react-spinners/HashLoader"
import { useToast } from "../../components/ui/use-toast";
import { ToastAction } from "../../components/ui/toast";
import ProgressPercentage from "../../components/ProgressPercentage";
const NewUploadVideo = () => {
    const {id} = useParams()
    const [original_Image_1, setOriginalImage1] = useState<File | null>(null);
    const [chosenImage1, setChosenImage1] = useState('')
    const [checkChosen1, setCheckChosen1] = useState(false)
    const [uploadedImage, setUploadedImage] = useState<string[] | []>([]);
    const [isLoading, setIsLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem("user")||"{}")
    const navi = useNavigate()
    const logOut = () =>{   
        localStorage.clear();
        navi('/')
    }
    useEffect(() => {
        axios.get(`https://databaseswap.mangasocial.online/${user.id_user}?type=video`, {
            headers: {
                ContentType: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
                setUploadedImage(res.data.image_links_video);
        })
    },[])
    const On_Uploader_1_Drop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const image = new Image();
            //@ts-ignore
            image.src = event.target!.result;

            image.onload = () => {
                setOriginalImage1(acceptedFiles[0]);
                
            };
        };
        reader.readAsDataURL(acceptedFiles[0]);
    }, []);


    const {
        getRootProps: get_Uploader_1_RootProps,
        getInputProps: get_Uploader_1_InputProps,
        open: openUploader1,
        isDragActive: isUploader1DragActive,
    } = useDropzone({
        onDrop: On_Uploader_1_Drop,
        accept: {
            "image/*": [],
        },
        maxFiles: 1,
        multiple: false,
    });

    /**
     * when click button "Generate" if 2 image are uploaded will send to server
     */
    const {toast} = useToast()
    const handleGenerate = async () => {
            if(!original_Image_1&&!chosenImage1){
                toast({
                variant: "destructive",
                description: `Image 1 must not be empty!`,
                action: <ToastAction altText="Try again">Try again</ToastAction>
              })
              return
            }
            const postFormData = new FormData();
            const userData = JSON.parse(localStorage.getItem("user")||"{}");
            let req_post_img_1
            if (original_Image_1) {
                postFormData.append("image_1", original_Image_1);
                const image_1_formData = new FormData();
                image_1_formData.append('src_img', original_Image_1)
                req_post_img_1 = axios.post(`https://metatechvn.store/upload-gensk/${userData.id_user}?type=src_nam`, image_1_formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                    }
                }).then(res => { return res.data })
            }
            else if(chosenImage1){
               req_post_img_1 = `/var/www/build_futurelove/${chosenImage1.replace("https://futurelove.online/","")}`
            }
            const [src_res_1] = await Promise.all([req_post_img_1])
            if (src_res_1 != null) {
                try{
                   setIsLoading(true)
                   nProgress.start()
                   nProgress.set(0)
                   nProgress.inc()
                   nProgress.configure({ showSpinner: false })
                   const response = await axios.get(`https://lhvn.online/getdata/genvideo/swap/imagevid/wedding?device_them_su_kien=${userData.device_register}&ip_them_su_kien=${userData.ip_register}&id_user=${userData.id_user}&src_img=/var/www/build_futurelove/image/image_user/215/video/215_vid_87986.jpg&src_vid_path=${id}`, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                        }
                    })
                    setIsLoading(false)
                    nProgress.set(1)
                    nProgress.done()
                    const data = response.data                                                         
                    navi("/",{state:{data,src_res_1,id}})
                    console.log(data, src_res_1, id)
                }
                catch (error) {
                    console.log(error)
                }
            }
        
    }
    const handleChoose1 = (src:string) =>{
        setOriginalImage1(null)
        setCheckChosen1(true)
        setChosenImage1(src)
    }
    const [checkUser, setCheckUser] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('user')) setCheckUser(true)
       },[])
    return (
        <div className="">
            {isLoading&&
                (<div className="fixed inset-0 z-50 bg-black/50">
                <div className="absolute top-[50%] left-[50%] z-50 w-[30%] md:w-[20%] translate-x-[-50%] translate-y-[-50%] gap-4 border md:p-6 p-2 shadow-lg rounded-2xl items-center justify-center text-center bg-white opacity-100">
                     <div className="md:py-[30px]">
                     <HashLoader color="#16b6d4" className="mx-auto md:mb-11 mb-2"/>
                     <ProgressPercentage/> <br/>
                     <span className="md:text-xl text-[10px] font-bold text-[#409afa]">Please wait some minutes...</span>
                     </div>
                 </div>
                  </div>) 
            }           
            <div className="bg-[#F2FDFF]">
            <header className="bg-white md:w-[1440px]">
              <div className="mx-auto">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex-1 md:flex md:items-center md:gap-12">
                    <Link to={'/'}><img src="img\logo.png" alt="" /></Link>
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
                <div className="pb-[70px] pt-[40px] md:w-[1440px] w-[390px]  justify-center items-center mx-auto">
                    <h1 className="font-[700] md:text-[24px] text-[20px] leading-[20px] mb-[40px] mt-[60px] text-center items-center justify-center">Make Your Dream Wedding</h1>
                    <div className="md:flex grid grid-cols-2 gap-6 text-center items-center justify-center md:ml-0 ml-7">
                        <div className="text-center items-center justify-center">
                            {/* image uploader 1 */}
                            <div className="flex gap-3 ml-2 md:ml-0">
                                <div
                                    {...get_Uploader_1_RootProps()}
                                    className="md:w-[256px] md:h-[256px] w-[116px] h-[116px] flex ml-[220px] text-center items-center justify-center rounded-xl border md:bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                >
                                    <input
                                        {...get_Uploader_1_InputProps()}
                                        className="w-full h-full"
                                    />
                                    {isUploader1DragActive ? (
                                        <p className="text-red-500">Thả ảnh tại đây.</p>
                                    ) : (
                                        <div className="flex gap-1">
                                            {/* after upload an image if ok ưill display the image else will display default svg icon */}
                                            {
                                            !checkChosen1?
                                            (original_Image_1 ? (
                                                <img className="aspect-square w-full object-cover" src={URL.createObjectURL(original_Image_1)} alt={original_Image_1.name} />
                                            ) : (
                                                <div className="w-full h-full ">
                                                    <svg width="123" className="mx-auto" height="116" viewBox="0 0 123 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M122.617 54.75V92.25C122.984 95.4166 122.63 98.6253 121.582 101.636C120.534 104.646 118.819 107.381 116.565 109.635C114.311 111.889 111.576 113.605 108.566 114.653C105.555 115.701 102.346 116.055 99.1797 115.688H24.1797C21.0131 116.055 17.8044 115.701 14.7938 114.653C11.7832 113.605 9.04856 111.889 6.79443 109.635C4.5403 107.381 2.82504 104.646 1.77697 101.636C0.7289 98.6253 0.375146 95.4166 0.742171 92.25V29.75C0.375146 26.5834 0.7289 23.3748 1.77697 20.3641C2.82504 17.3535 4.5403 14.6189 6.79443 12.3648C9.04856 10.1106 11.7832 8.39537 14.7938 7.3473C17.8044 6.29923 21.0131 5.94548 24.1797 6.3125H67.9297C69.1729 6.3125 70.3652 6.80636 71.2442 7.68544C72.1233 8.56451 72.6172 9.7568 72.6172 11C72.6172 12.2432 72.1233 13.4355 71.2442 14.3146C70.3652 15.1936 69.1729 15.6875 67.9297 15.6875H24.1797C14.3234 15.6875 10.1172 19.8938 10.1172 29.75V87.5625L25.9922 71.6875C27.1722 70.5166 28.7673 69.8595 30.4297 69.8595C32.0921 69.8595 33.6871 70.5166 34.8672 71.6875L40.7422 77.5625C41.3263 78.1351 42.1117 78.4558 42.9297 78.4558C43.7477 78.4558 44.533 78.1351 45.1172 77.5625L75.9922 46.6875C77.1722 45.5166 78.7673 44.8595 80.4297 44.8595C82.0921 44.8595 83.6871 45.5166 84.8672 46.6875L113.242 75.0625V54.75C113.242 53.5068 113.736 52.3145 114.615 51.4354C115.494 50.5564 116.686 50.0625 117.93 50.0625C119.173 50.0625 120.365 50.5564 121.244 51.4354C122.123 52.3145 122.617 53.5068 122.617 54.75ZM36.6359 34.4375C34.5608 34.4433 32.5729 35.2724 31.1087 36.7428C29.6445 38.2132 28.8237 40.2046 28.8266 42.2797C28.8295 44.3547 29.6558 46.3438 31.1241 47.8101C32.5925 49.2764 34.5827 50.1 36.6578 50.1C38.7329 50.1 40.7231 49.2764 42.1915 47.8101C43.6598 46.3438 44.4861 44.3547 44.489 42.2797C44.4919 40.2046 43.6711 38.2132 42.2069 36.7428C40.7427 35.2724 38.7547 34.4433 36.6797 34.4375H36.6359ZM92.9297 21.9375H100.742V29.75C100.742 30.9932 101.236 32.1855 102.115 33.0646C102.994 33.9436 104.186 34.4375 105.43 34.4375C106.673 34.4375 107.865 33.9436 108.744 33.0646C109.623 32.1855 110.117 30.9932 110.117 29.75V21.9375H117.93C119.173 21.9375 120.365 21.4436 121.244 20.5646C122.123 19.6855 122.617 18.4932 122.617 17.25C122.617 16.0068 122.123 14.8145 121.244 13.9354C120.365 13.0564 119.173 12.5625 117.93 12.5625H110.117V4.75C110.117 3.5068 109.623 2.31451 108.744 1.43544C107.865 0.55636 106.673 0.0625 105.43 0.0625C104.186 0.0625 102.994 0.55636 102.115 1.43544C101.236 2.31451 100.742 3.5068 100.742 4.75V12.5625H92.9297C91.6865 12.5625 90.4942 13.0564 89.6151 13.9354C88.736 14.8145 88.2422 16.0068 88.2422 17.25C88.2422 18.4932 88.736 19.6855 89.6151 20.5646C90.4942 21.4436 91.6865 21.9375 92.9297 21.9375Z" fill="#777E91" />
                                                    </svg>
                                                </div>
                                            ))
                                            :
                                            <img className="aspect-square w-full object-cover" src={chosenImage1} />
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* onclick will trigger open upload file*/}
                            <Dialog>
                                <DialogTrigger className="flex items-center mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] justify-center md:w-[725px] w-[330px]">
                                    Upload your face
                                    <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </DialogTrigger>
                                <DialogContent className="md:w-[818px] w-[360px] h-[70%] md:h-[100%] overflow-scroll md:overflow-auto">
                                <h3 className="font-[700] text-[24px] leading-[20px] mt-[20px] text-center">Upload man's face</h3>
                                <div className="flex items-center mt-8">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
                                    </svg>
                                <span className="font-[600] md:text-[20px] text-[14px] leading-[20px] ml-2">
                                    Your image need to move closer or away from the camera to complete
                                </span>
                                </div>
                                <div className="flex items-center mt-3">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
                                    </svg>
                                <span className="font-[600] md:text-[20px] text-[14px] leading-[20px] ml-2">
                                    Make sure you are in the bright environment.
                                </span>
                                </div>
                                <DialogClose onClick={()=>{openUploader1();setCheckChosen1(false)}} className="text-[#fff]  bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px] flex items-center mt-4 mx-auto md:w-[736px] w-[320px]">
                                            Upload photo
                                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                </DialogClose> 
                                
                                <h3 className="font-[600] text-[24px] leading-[20px] mt-8">Uploaded</h3>  
                                        
                                        <ScrollArea className="md:w-[729px] whitespace-nowrap rounded-md border mt-[100px] md:mt-0">
                                        <div className="flex w-max space-x-4 p-4">
                                          {uploadedImage.map((img,index) => (
                                            <div key={index} className="shrink-0">
                                              <DialogClose className="overflow-hidden rounded-md" onClick={()=>handleChoose1(img)}>
                                                    <img src={`${img}`} className="object-cover w-[160px] h-[160px]" alt={`Image ${index}`} />
                                            
                                              </DialogClose>
                                            </div>
                                          ))}
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                      </ScrollArea>
                                <p className="font-[400] md:text-[20px] text-[14px] leading-[20px] md:mt-8 mt-[100px] ml-2">We value your privacy. Rest assured, we handle  your data with utmost care.</p>

                                <DialogClose asChild className="text-[#fff] bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px] flex items-center mx-auto mt-6 md:w-[736px] w-[320px]">
                                Save changes
                                </DialogClose>                            
                            </DialogContent>

                            </Dialog>
                        </div>
                    </div>
                    <Button variant="cus1" className="flex items-center mt-8 mx-auto md:w-[725px] w-[330px]" onClick={handleGenerate}>
                        GENERATE
                        <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </Button>
                </div>
            </div>
        </div>
    )
}
export default NewUploadVideo