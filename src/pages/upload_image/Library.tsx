import { Link, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
// import JSZip from "jszip";
// import { saveAs } from "file-saver";
// import nProgress from "nprogress";
import axios from "axios";
import { useEffect, useState } from "react";
import { albumType } from "../../common/types/Album";
import { ScrollBar, ScrollArea } from "../../components/ui/scroll-area";
import clipboardCopy from 'clipboard-copy'
import { useToast } from "../../components/ui/use-toast";
// const zip = new JSZip
const Preview = () => {
    // const locate = useLocation()
    // const { data } = locate.state || {}
    const [album, setAlbum] = useState<albumType[]>([])
    const [currentAlbum, setCurrentAlbum] = useState(0)
    const {id} = useParams()
    useEffect(()=>{
      axios.get(`https://metatechvn.store/get/list_2_image/id_image_swap?id_user=${id}`)
          .then(res=>setAlbum(res.data))
          .then(()=>setCurrentAlbum(album.length))
        },[]) 
    let albumData = []
    for(let item of album){
    albumData.push(item.list_sukien_video)
    }
    const {toast} = useToast()
    const handleSaveLink = () => {
        clipboardCopy(window.location.href)
        toast({
          variant: "default",
          description: `Library's link has been saved to clipboard!`
        })
    }
    // const handleDownloadImage = async (img:string) => {
    //     try {
    //       const fileName = img.split("/").pop()
    //       await saveAs(img, fileName);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   const handleDownloadAllImages = async () => {
    //     nProgress.start();
    //     try {
    //       if (data.link_anh_swap.length < 1)
    //         throw new Error("No swapped image found");
    
    //       let count = 0;
    //       let zipFileName = "images.zip";
    //       for (const img of data.link_anh_swap) {
    //         const fileName = img.split("/").pop();
    //         const fileBuffer = axios.get(img,{ responseType: 'arraybuffer' }).then((res)=>{return res.data})
    //         zip.file(fileName, fileBuffer, { binary: true });
    //         count++;
    //         if (count === data.link_anh_swap.length) {
    //           zip.generateAsync({ type: "blob" }).then((content) => {
    //             saveAs(content, zipFileName);
    //           });
    //         }
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     nProgress.done();
    //   };
    return (
        <div className="md:w-[1440px] md:h-[1800px] w-[390px] bg-[#C2E9F0] md:py-[70px] py-4 mx-auto">
            <div className="md:w-[1120px] md:h-[1700px] w-[390px] bg-white rounded-3xl shadow-sm mx-auto">
              <Carousel className="w-full py-11">
                            <div className="flex md:ml-14 mb-8">
                            <Button variant={"cus3"} className="w-[150px] h-[50px] ml-5 md:ml-0">
                                Download
                                
                            </Button>
                            <Button variant={"cus1"} onClick={()=>handleSaveLink()} className="w-[150px] h-[50px] ml-5 md:ml-5">
                                Share Library
                            </Button>
                            <Link to={`/listcategories`}><Button variant={"cus3"} className="md:w-[295px] h-[50px] ml-4 md:flex">
                                Create New Album
                                <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Button></Link>
                            </div>
                            
                <CarouselContent className="md:ml-11 mx-auto items-center md:mt-[50px]">
                    {
                    albumData&&albumData[currentAlbum]?.map((item:{link_da_swap:string},index:number)=>{
                      return <>     
                        <CarouselItem key={index} className="mx-auto">
                        <div className="md:w-[692px] md:h-[1000px] w-[320px] h-[400px] rounded-xl overflow-hidden ml-4 md:ml-[150px]">
                        <img src={item.link_da_swap} className="h-full w-full object-cover" alt="empty image"/>
                        </div>
                        </CarouselItem>
                      </>
                    })                    
                    }
                </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
              </Carousel>
              <div className="px-[80px] mt-[50px] hidden md:block">
              <ScrollArea className="md:w-full whitespace-nowrap rounded-md border mt-[100px] md:mt-0 ">
                  <div className="flex w-max space-x-8 p-8">
                      {albumData.map((img,index) => (
                          <div key={index} className="shrink-0">
                          <div className="overflow-hidden rounded-md">
                            <img src={img[0].link_da_swap} onClick={()=>setCurrentAlbum(index)} className="object-cover w-[200px] h-[300px]" alt={`Image ${index}`} />                   
                             </div>
                            </div>
                          ))}
                        </div>
                      <ScrollBar orientation="horizontal" />
              </ScrollArea>
              
              </div>
              <div className=" px-[40px] md:hidden">
              <div className="grid grid-cols-2 mx-auto pb-11">
                      {albumData.map((img,index) => (
                          <div key={index} className="shrink-0 mt-4">
                          <div className="overflow-hidden ">
                            <img src={img[0].link_da_swap} onClick={()=>setCurrentAlbum(index)} className="object-cover w-[140px] h-[175px] cursor-pointer" alt={`Image ${index}`} />                   
                             </div>
                            </div>
                      ))}
                  </div>
              </div>
            </div>
        </div>
        )
}
export default Preview