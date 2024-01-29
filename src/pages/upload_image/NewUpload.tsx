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
const NewUpload = () => {
    const {id} = useParams()
    const [original_Image_1, setOriginalImage1] = useState<File | null>(null);
    const [original_Image_2, setOriginalImage2] = useState<File | null>(null);
    const [chosenImage1, setChosenImage1] = useState('')
    const [checkChosen1, setCheckChosen1] = useState(false)
    const [chosenImage2, setChosenImage2] = useState('')
    const [checkChosen2, setCheckChosen2] = useState(false)
    const [uploadedImage, setUploadedImage] = useState<string[] | []>([]);
    const [isLoading, setIsLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem("user")||"{}")
    const navi = useNavigate()
    const logOut = () =>{   
        localStorage.clear();
        navi('/')
    }
    useEffect(() => {
        axios.get(`https://metatechvn.store/images/${user.id_user}?type=video`, {
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

    const On_Uploader_2_Drop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const image = new Image();
            //@ts-ignore
            image.src = event.target!.result;

            image.onload = () => {
                setOriginalImage2(acceptedFiles[0]);
                
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

    const {
        getRootProps: get_Uploader_2_RootProps,
        getInputProps: get_Uploader_2_InputProps,
        open: openUploader2,
        isDragActive: isUploader2DragActive,
    } = useDropzone({
        onDrop: On_Uploader_2_Drop,
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
            if(!original_Image_2&&!chosenImage2){
                toast({
                variant: "destructive",
                description: `Image 2 must not be empty!`,
                action: <ToastAction altText="Try again">Try again</ToastAction>
              })
              return
            }
            const postFormData = new FormData();
            const userData = JSON.parse(localStorage.getItem("user")||"{}");
            let req_post_img_1, req_post_img_2
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
            if(original_Image_2){
            postFormData.append("image_2", original_Image_2);            
            const image_2_formData = new FormData();
            image_2_formData.append('src_img', original_Image_2)
            req_post_img_2 = axios.post(`https://metatechvn.store/upload-gensk/${userData.id_user}?type=src_nu`, image_2_formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then(res => { return res.data })
            }else if(chosenImage2) {
                req_post_img_2 = `/var/www/build_futurelove/${chosenImage2.replace("https://futurelove.online/","")}`
            }
            const [src_res_1, src_res_2] = await Promise.all([req_post_img_1, req_post_img_2])
            if (src_res_1 != null && src_res_2 != null) {
                try{
                   setIsLoading(true)
                   nProgress.start()
                   nProgress.set(0)
                   nProgress.inc()
                   nProgress.configure({ showSpinner: false })
                   const response = await axios.get(`https://thinkdiff.us/getdata/swap/listimage_wedding?device_them_su_kien=${userData.device_register}&ip_them_su_kien=${userData.ip_register}&id_user=${userData.id_user}&list_folder=weddingface${id}`, {
                        headers: {
                            'link1': src_res_1,
                            'link2': src_res_2,
                            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                        }
                        
                    })
                    setIsLoading(false)
                    nProgress.set(1)
                    nProgress.done()
                    const data = response.data                                                         
                    navi("/generate",{state:{data,src_res_1,src_res_2}})
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
    const handleChoose2 = (src:string) =>{
        setOriginalImage2(null)
        setCheckChosen2(true)
        setChosenImage2(src)
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
                                    className="md:w-[256px] md:h-[256px] w-[116px] h-[116px] flex text-center items-center justify-center rounded-xl border md:bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
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
                                <DialogTrigger className="flex items-center w-[140px] md:w-[256px] mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] justify-center">
                                    Upload man's face
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
                        <svg width="161" className="md:block hidden" height="141" viewBox="0 0 161 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80.3202 44.7407H80.3209C85.513 44.7467 90.6425 45.8818 95.3588 48.0683C100.075 50.2548 104.267 53.4411 107.648 57.4093C111.029 61.3774 113.519 66.0338 114.949 71.0602C116.379 76.0865 116.715 81.3645 115.933 86.5334C115.933 86.5335 115.933 86.5335 115.933 86.5335L115.439 86.4588C115.309 87.3161 114.847 88.0866 114.154 88.6007C113.46 89.1147 112.593 89.3303 111.742 89.1999C110.891 89.0695 110.126 88.6039 109.615 87.9055C109.105 87.2071 108.891 86.3331 109.021 85.4757L80.3202 44.7407ZM80.3202 44.7407C74.7163 44.742 69.19 46.06 64.1807 48.5897C59.1714 51.1195 54.8173 54.7912 51.4642 59.3128C48.1111 63.8343 45.8513 69.0811 44.8643 74.6362C43.8773 80.1912 44.1902 85.9016 45.7781 91.3135C47.366 96.7255 50.1853 101.69 54.0121 105.813C57.839 109.935 62.568 113.102 67.8234 115.061C73.0788 117.02 78.7155 117.717 84.2855 117.097C89.8555 116.478 95.205 114.557 99.9087 111.49L99.9091 111.49C100.743 110.945 101.326 110.089 101.533 109.112C101.74 108.136 101.553 107.116 101.012 106.277C100.472 105.438 99.6227 104.849 98.65 104.641C97.6773 104.432 96.6624 104.621 95.8288 105.166L80.3202 44.7407ZM146.82 46.8756V46.875C146.817 43.5652 145.51 40.3912 143.185 38.0497C140.861 35.708 137.708 34.3902 134.419 34.3866H134.419H112.326L108.746 20.9315L108.746 20.931C108.037 18.2777 106.48 15.9327 104.315 14.2591C102.15 12.5854 99.497 11.6763 96.7668 11.673H96.7662C91.1373 11.673 86.2601 11.6175 82.0306 11.5694C77.6706 11.5198 73.9989 11.478 70.9012 11.5129C64.8056 11.5816 60.7872 11.9436 57.9753 13.1813C55.1005 14.4466 53.5371 16.5999 52.2571 20.0358C51.3821 22.3843 50.6199 25.3906 49.6565 29.19C49.2533 30.78 48.8149 32.5089 48.3184 34.3866H26.222H26.2214C22.9323 34.3902 19.7798 35.708 17.4552 38.0497C15.1307 40.3912 13.8239 43.5652 13.8203 46.875V46.8756L13.8203 117.011L13.8203 117.012C13.8239 120.321 15.1307 123.495 17.4552 125.837C19.7798 128.179 22.9323 129.496 26.2214 129.5H26.222H134.419H134.419C137.708 129.496 140.861 128.179 143.185 125.837C145.51 123.495 146.817 120.321 146.82 117.012V117.011V46.8756ZM104.445 98.946C104.759 99.8958 105.436 100.682 106.327 101.131C106.768 101.353 107.248 101.486 107.74 101.521C108.233 101.556 108.727 101.493 109.195 101.336C109.663 101.179 110.095 100.931 110.468 100.605C110.84 100.28 111.145 99.8842 111.365 99.4406C111.585 98.9971 111.716 98.5143 111.751 98.02C111.786 97.5256 111.724 97.0291 111.569 96.5588C111.413 96.0884 111.167 95.6534 110.844 95.2785C110.521 94.9036 110.128 94.5962 109.687 94.374C108.796 93.9252 107.764 93.8513 106.819 94.1687C105.873 94.4861 105.093 95.1684 104.648 96.0642C104.204 96.9598 104.131 97.9963 104.445 98.946ZM74.2353 34.5692H86.4075C87.4021 34.5692 88.3553 34.1711 89.0575 33.4638C89.7596 32.7565 90.1534 31.7981 90.1534 30.7995C90.1534 29.8009 89.7596 28.8424 89.0575 28.1352C88.3553 27.4278 87.4021 27.0298 86.4075 27.0298H74.2353C73.2407 27.0298 72.2875 27.4278 71.5853 28.1352C70.8832 28.8424 70.4894 29.8009 70.4894 30.7995C70.4894 31.7981 70.8832 32.7565 71.5853 33.4638C72.2875 34.1711 73.2407 34.5692 74.2353 34.5692ZM29.8464 57.0945C29.8464 59.1428 30.6211 60.7158 31.8109 61.7717C32.9915 62.8193 34.5514 63.3326 36.0948 63.3329C37.6382 63.3332 39.1982 62.8205 40.3788 61.7729C41.5688 60.7171 42.3434 59.1438 42.3434 57.0945C42.3434 55.0453 41.5688 53.4715 40.379 52.415C39.1984 51.3668 37.6385 50.8532 36.095 50.8529C34.5515 50.8526 32.9915 51.3656 31.8109 52.4138C30.621 53.4702 29.8464 55.0443 29.8464 57.0945ZM137.889 43.3744C138.81 44.3024 139.329 45.5617 139.329 46.8756V117.011C139.329 118.325 138.81 119.584 137.889 120.512C136.968 121.44 135.72 121.961 134.419 121.961H26.222C24.921 121.961 23.6725 121.44 22.7515 120.512C21.8303 119.584 21.3121 118.325 21.3121 117.011V46.8756C21.3121 45.5617 21.8303 44.3024 22.7515 43.3744C23.6725 42.4466 24.921 41.9261 26.222 41.9261H51.1938C52.0653 41.9261 52.8155 41.7995 53.4576 41.2369C54.0694 40.701 54.5152 39.8249 54.9658 38.5265C55.5207 36.9278 56.1313 34.5282 57.034 30.9808C57.5993 28.7592 58.2792 26.0873 59.1317 22.88C59.4119 21.8269 60.029 20.8969 60.8866 20.2341C61.7442 19.5712 62.7944 19.2123 63.8744 19.2124H96.7662C97.8462 19.2123 98.8964 19.5712 99.754 20.2341C100.612 20.8969 101.229 21.8269 101.509 22.8801C102.353 26.0541 103.028 28.7029 103.591 30.9097C104.511 34.519 105.13 36.9459 105.69 38.5541C106.141 39.8479 106.586 40.7179 107.196 41.2483C107.837 41.8049 108.583 41.9261 109.447 41.9261H134.419C135.72 41.9261 136.968 42.4466 137.889 43.3744Z" fill="#009DC4" stroke="#009DC4" />
                            <path d="M96.982 68.9018C90.9923 63.5468 84.2444 66.6752 80.3272 70.0574C76.4099 66.6752 69.662 63.5468 63.6471 68.9018C59.932 72.1994 58.3903 77.7517 59.6287 83.3885C61.5242 92.0693 69.0807 98.6644 79.8217 101.032C79.9986 101.06 80.1502 101.088 80.3272 101.088C80.4788 101.088 80.6557 101.06 80.8073 101.032C91.5736 98.6644 99.1301 92.0693 101.026 83.3885C102.239 77.7517 100.697 72.1994 96.982 68.9018Z" fill="#009DC4" />
                        </svg>
                        <div className="">
                            {/* image uploader 2 */}
                            <div className="flex gap-3 ml-2 md:ml-0">
                                <div
                                    {...get_Uploader_2_RootProps()}
                                    className="md:w-[256px] md:h-[256px] w-[116px] h-[116px] flex text-center items-center justify-center rounded-xl border md:bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                >
                                    <input
                                        {...get_Uploader_2_InputProps()}
                                        className="w-full h-full"
                                    />
                                    {isUploader2DragActive ? (
                                        <p className="text-red-500">Thả ảnh tại đây.</p>
                                    ) : (
                                        <div className="flex gap-1">
                                            {/* after upload an image if ok ưill display the image else will display default svg icon */}
                                            {
                                            !checkChosen2?
                                            (original_Image_2 ? (
                                                <img className="aspect-square w-full object-cover" src={URL.createObjectURL(original_Image_2)} alt={original_Image_2.name} />
                                            ) : (
                                                <div className="w-full h-full ">
                                                    <svg width="123" className="mx-auto" height="116" viewBox="0 0 123 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M122.617 54.75V92.25C122.984 95.4166 122.63 98.6253 121.582 101.636C120.534 104.646 118.819 107.381 116.565 109.635C114.311 111.889 111.576 113.605 108.566 114.653C105.555 115.701 102.346 116.055 99.1797 115.688H24.1797C21.0131 116.055 17.8044 115.701 14.7938 114.653C11.7832 113.605 9.04856 111.889 6.79443 109.635C4.5403 107.381 2.82504 104.646 1.77697 101.636C0.7289 98.6253 0.375146 95.4166 0.742171 92.25V29.75C0.375146 26.5834 0.7289 23.3748 1.77697 20.3641C2.82504 17.3535 4.5403 14.6189 6.79443 12.3648C9.04856 10.1106 11.7832 8.39537 14.7938 7.3473C17.8044 6.29923 21.0131 5.94548 24.1797 6.3125H67.9297C69.1729 6.3125 70.3652 6.80636 71.2442 7.68544C72.1233 8.56451 72.6172 9.7568 72.6172 11C72.6172 12.2432 72.1233 13.4355 71.2442 14.3146C70.3652 15.1936 69.1729 15.6875 67.9297 15.6875H24.1797C14.3234 15.6875 10.1172 19.8938 10.1172 29.75V87.5625L25.9922 71.6875C27.1722 70.5166 28.7673 69.8595 30.4297 69.8595C32.0921 69.8595 33.6871 70.5166 34.8672 71.6875L40.7422 77.5625C41.3263 78.1351 42.1117 78.4558 42.9297 78.4558C43.7477 78.4558 44.533 78.1351 45.1172 77.5625L75.9922 46.6875C77.1722 45.5166 78.7673 44.8595 80.4297 44.8595C82.0921 44.8595 83.6871 45.5166 84.8672 46.6875L113.242 75.0625V54.75C113.242 53.5068 113.736 52.3145 114.615 51.4354C115.494 50.5564 116.686 50.0625 117.93 50.0625C119.173 50.0625 120.365 50.5564 121.244 51.4354C122.123 52.3145 122.617 53.5068 122.617 54.75ZM36.6359 34.4375C34.5608 34.4433 32.5729 35.2724 31.1087 36.7428C29.6445 38.2132 28.8237 40.2046 28.8266 42.2797C28.8295 44.3547 29.6558 46.3438 31.1241 47.8101C32.5925 49.2764 34.5827 50.1 36.6578 50.1C38.7329 50.1 40.7231 49.2764 42.1915 47.8101C43.6598 46.3438 44.4861 44.3547 44.489 42.2797C44.4919 40.2046 43.6711 38.2132 42.2069 36.7428C40.7427 35.2724 38.7547 34.4433 36.6797 34.4375H36.6359ZM92.9297 21.9375H100.742V29.75C100.742 30.9932 101.236 32.1855 102.115 33.0646C102.994 33.9436 104.186 34.4375 105.43 34.4375C106.673 34.4375 107.865 33.9436 108.744 33.0646C109.623 32.1855 110.117 30.9932 110.117 29.75V21.9375H117.93C119.173 21.9375 120.365 21.4436 121.244 20.5646C122.123 19.6855 122.617 18.4932 122.617 17.25C122.617 16.0068 122.123 14.8145 121.244 13.9354C120.365 13.0564 119.173 12.5625 117.93 12.5625H110.117V4.75C110.117 3.5068 109.623 2.31451 108.744 1.43544C107.865 0.55636 106.673 0.0625 105.43 0.0625C104.186 0.0625 102.994 0.55636 102.115 1.43544C101.236 2.31451 100.742 3.5068 100.742 4.75V12.5625H92.9297C91.6865 12.5625 90.4942 13.0564 89.6151 13.9354C88.736 14.8145 88.2422 16.0068 88.2422 17.25C88.2422 18.4932 88.736 19.6855 89.6151 20.5646C90.4942 21.4436 91.6865 21.9375 92.9297 21.9375Z" fill="#777E91" />
                                                    </svg>
                                                </div>
                                            ))
                                            :
                                            <img className="aspect-square w-full object-cover" src={chosenImage2} />
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* onclick will trigger open upload file*/}
                            <Dialog>
                                <DialogTrigger className="flex items-center w-[140px] md:w-[256px] mt-6 text-[#fff] bg-[#16B6D4] my-auto rounded-3xl md:px-[15px] px-[10px] md:py-[10px] py-[10px] text-center font-[700] md:text-[14px] text-[10px] justify-center">
                                    Upload woman's face
                                    <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </DialogTrigger>
                                <DialogContent className="md:w-[818px] w-[360px] overflow-scroll h-[70%] md:h-[100%] md:overflow-auto">
                                <h3 className="font-[700] text-[24px] leading-[20px] mt-[20px] text-center">Upload woman's face</h3>
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
                                <DialogClose onClick={()=>{openUploader2();setCheckChosen2(false)}} className="text-[#fff]  bg-[#16B6D4] h-[60px] my-auto rounded-3xl px-[20px] py-[15px] text-center font-[700] md:text-[14px] text-[10px] flex items-center mt-4 mx-auto md:w-[736px] w-[320px]">
                                            Upload photo
                                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                </DialogClose> 
                                <h3 className="font-[600] text-[24px] leading-[20px] mt-8">Uploaded</h3>
                                    {
                                        <ScrollArea className="md:w-[729px] whitespace-nowrap rounded-md border mt-[100px] md:mt-0">
                                        <div className="flex w-max space-x-4 p-4">
                                          {uploadedImage.map((img,index) => (
                                            <div key={index} className="shrink-0">
                                              <DialogClose className="overflow-hidden rounded-md" onClick={()=>handleChoose2(img)}>
                                                    <img src={`${img}`} className="object-cover w-[160px] h-[160px]" alt={`Image ${index}`} />
                                              
                                              </DialogClose>
                                            </div>
                                          ))}
                                        </div>
                                        <ScrollBar orientation="horizontal" />
                                      </ScrollArea>
                                    }
                                    <div className="">

                                    </div>
                                <p className="font-[400] md:text-[20px] text-[14px] leading-[20px] md:mt-8 ml-2 mt-[100px]">We value your privacy. Rest assured, we handle  your data with utmost care.</p>

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
export default NewUpload