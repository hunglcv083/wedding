import { Form, FormControl, FormField, FormItem, FormLabel, } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import axios, { AxiosError } from "axios"
import { useToast } from "../../components/ui/use-toast"
import { useParams } from "react-router-dom"
const Editor = () => {
    const form = useForm()
    const token = localStorage.getItem('accessToken')
    const { toast } = useToast();
    const {id} = useParams()
    const [user, setUser] = useState<any>({user_name:'',email:'',link_avatar:''})
    const [avatarUploadFile, setAvatarUploadFile] = useState<File | null>(null);
    const [uploadedImage, setUploadedImage] = useState<string[] | []>([]);
    const [seeMore, setSeeMore] = useState<boolean>(false);
    const [chooseUploaded, setChooseUploaded] = useState(false)
    const [chosenImg, setChosenImg] = useState("")
    const [avatarLink, setAvatarLink] = useState<string>("")
    
    useEffect(() => {
        //@ts-ignore
        axios.get(`https://metatechvn.store/profile/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data)
        }).then(()=>{
            user.link_avatar.includes("/var/www/build_futurelove/") 
            ?
            setAvatarLink(`https://futurelove.online/${user.link_avatar.replace("/var/www/build_futurelove/","")}`)
            :
            setAvatarLink(user.link_avatar)
        })
    }, [user])

    useEffect(() => {
        axios.get(`https://metatechvn.store/images/${id}?type=video`, {
            headers: {
                ContentType: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
                setUploadedImage(res.data.image_links_video);
        })
    },[])

    const OnUploaderDrop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const image = new Image();
            //@ts-ignore
            image.src = event.target!.result;

            image.onload = () => {
                setAvatarUploadFile(acceptedFiles[0]);
            };
        };
        reader.readAsDataURL(acceptedFiles[0]);
    }, []);


    const {
        getRootProps: getUploaderRootProps,
        getInputProps: getUploaderInputProps,
        open: openUploader,
    } = useDropzone({
        onDrop: OnUploaderDrop,
        accept: {
            "image/*": [],
        },
        maxFiles: 1,
        multiple: false,
    });
    const handleChooseUploaded = (src:string) =>{
        setChooseUploaded(true);
        setAvatarUploadFile(null);
        setChosenImg(src)
    }
    const handleSaveForm = () => {
        if (avatarUploadFile) {
            const formData = new FormData();
            formData.append("src_img", avatarUploadFile);
            axios.post(`https://metatechvn.store/upload-gensk/${user.id_user}?type=src_vid`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status.toString().startsWith('2')) {
                    axios.post(`https://metatechvn.store/changeavatar/${user.id_user}`, {
                        link_img: res.data,
                        check_img: "upload"
                    }, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(() => {
                        toast({
                            variant:"default",
                            description: "Update avatar successfully!"
                        })
                    })
                }

            }).catch((err: AxiosError) => {
                console.log(err)
                setAvatarUploadFile(null);
                toast({
                    variant:'destructive',
                    title: "Upload failed",
                    description: "Avatar upload failed, please try again!"
                })
            })
        }
        else if(chooseUploaded&&chosenImg){
            axios.post(`https://metatechvn.store/changeavatar/${user.id_user}`, {
                        link_img: chosenImg,
                        check_img: "upload"
                    }, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(() => {
                        toast({
                            variant:"default",
                            description: "Update avatar successfully!"
                        })
                    }).catch((err: AxiosError) => {
                        console.log(err)
                        setAvatarUploadFile(null);
                        toast({
                            variant:'destructive',
                            title: "Upload failed",
                            description: "Avatar upload failed, please try again!"
                        })
                    })       
        }
    }

    return (
        <div className="p-4 w-[390px] md:p-0 md:w-fit">
            <h3 className="font-[600] md:text-[20px] leading-[32px] text-[18px]">Profile information</h3>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(handleSaveForm)}>
                    <div className="flex my-auto md:mt-[45px] mt-[24px]">
                        <input
                            {...getUploaderInputProps()}
                            className="w-full h-full"
                        />
                        <div className="w-[96px] h-[96px] rounded-[48px] overflow-hidden" {...getUploaderRootProps()}>
                            {
                                !chooseUploaded?
                                (avatarUploadFile? (
                                    <img className="aspect-square w-full object-cover" src={URL.createObjectURL(avatarUploadFile)} />
                                    ) : (
                                    <img src={`${avatarLink}`} className="object-cover h-full w-full" alt="" />
                                ))
                                :
                                <img className="aspect-square w-full object-cover" src={chosenImg}/>
    
                            }                            
                        </div>
                        <button type='button' onClick={()=>{openUploader();setChooseUploaded(false)}} className="text-[#fff] w-[253px] bg-[#16B6D4] h-[54px] my-auto md:ml-8 ml-2 rounded-[27px] px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[24px] flex mx-auto items-center">
                            <div className="mx-auto flex items-center ">
                                <span className="mr-2">Upload new picture</span>
                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.13465 1.5026C7.13465 0.995362 6.70196 0.610107 6.20122 0.610107C5.70047 0.610107 5.26778 0.995361 5.26778 1.5026V5.10752H1.41717C0.916423 5.10752 0.483734 5.49278 0.483734 6.00001C0.483734 6.50724 0.916423 6.8925 1.41717 6.8925H5.26778V10.4974C5.26778 11.0047 5.70047 11.3899 6.20121 11.3899C6.70196 11.3899 7.13465 11.0047 7.13465 10.4974V6.8925H10.9853C11.486 6.8925 11.9187 6.50724 11.9187 6.00001C11.9187 5.49278 11.486 5.10752 10.9853 5.10752H7.13465V1.5026Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </button>   
                    </div>
                    <h3 className="font-[600] text-[16px] leading-[20px] mt-10 hidden md:block">Uploaded</h3>
                    <div className="md:grid grid-cols-4 gap-8 w-[638px] rounded-[20px] hidden mt-6">
                        {seeMore ?
                            uploadedImage.map((image, index) => {
                                return (<img onClick={()=>handleChooseUploaded(image)} src={image} className="object-cover w-[136px] h-[136px]" alt={`Image ${index}`} key={index} />)
                            })
                            : uploadedImage.slice(0, 4).map((image, index) => {
                                return (<img onClick={()=>handleChooseUploaded(image)} src={image} className="object-cover w-[136px] h-[136px]" alt={`Image ${index}`}  key={index} />)
                            })}
                    </div>
                    <button type="button" onClick={() => { setSeeMore(prev => { return !prev }) }} className="text-[#fff] hidden md:block w-[638px] bg-[#16B6D4] h-[54px] my-auto mt-4 rounded-[27px] px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[20px] mx-auto items-center">
                        <span className="mx-auto">See {seeMore ? 'less' : 'more'}</span>
                    </button>

                    <FormField
                        control={form.control}
                        name="user_name"
                        disabled
                        render={({ field }) => (
                            <FormItem className="mt-8 gap-8">
                                <FormLabel className="flex font-[600] text-[14px] items-center">
                                    Display name
                                    <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5" />
                                    </svg>
                                </FormLabel>
                                <FormControl className="w-full">
                                    <Input {...field} value={user?.user_name} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        disabled
                        render={({ field }) => (
                            <FormItem className="mt-8 gap-8">
                                <FormLabel className="flex font-[600] text-[14px] items-center">
                                    Email
                                    <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5" />
                                    </svg>
                                </FormLabel>
                                <FormControl className="">
                                    <Input {...field} value={user?.email} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        disabled
                        render={({ field }) => (
                            <FormItem className="mt-8 gap-8">
                                <FormLabel className="flex font-[600] text-[14px] items-center">
                                    Location
                                    <svg width="14" className="ml-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6667 6.99992C13.6667 10.6818 10.6819 13.6666 7 13.6666C3.3181 13.6666 0.333336 10.6818 0.333336 6.99992C0.333336 3.31802 3.3181 0.333252 7 0.333252C10.6819 0.333252 13.6667 3.31802 13.6667 6.99992ZM7 6.33325C7.36819 6.33325 7.66667 6.63173 7.66667 6.99992V10.3338C7.66667 10.702 7.36819 11.0005 7 11.0005C6.63181 11.0005 6.33334 10.702 6.33334 10.3338V6.99992C6.33334 6.63173 6.63181 6.33325 7 6.33325ZM7 4.99992C7.36819 4.99992 7.66667 4.70144 7.66667 4.33325C7.66667 3.96506 7.36819 3.66659 7 3.66659C6.63181 3.66659 6.33334 3.96506 6.33334 4.33325C6.33334 4.70144 6.63181 4.99992 7 4.99992Z" fill="#9A9FA5" />
                                    </svg>
                                </FormLabel>
                                <FormControl className="">
                                    <Input {...field} value={"Viet Nam"} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button variant={"cus1"} type="submit" className="mt-11">Save</Button>
                </form>
            </Form>

        </div>
    )
}

export default Editor