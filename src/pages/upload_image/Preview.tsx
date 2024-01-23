import { Link, useLocation } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"
import JSZip from "jszip";
import { saveAs } from "file-saver";
import nProgress from "nprogress";
import JSZipUtils from "jszip-utils";
import axios from "axios";
const zip = new JSZip
const Preview = () => {
    const locate = useLocation()
    const { data } = locate.state || {}
    console.log(data.link_anh_swap[0])
    const handleDownloadImage = async (img:string) => {
        try {
          const fileName = img.split("/").pop()
          await saveAs(img, fileName);
        } catch (error) {
          console.log(error);
        }
      };
      const handleDownloadAllImages = async () => {
        nProgress.start();
        try {
          if (data.link_anh_swap.length < 1)
            throw new Error("No swapped image found");
    
          let count = 0;
          let zipFileName = "images.zip";
          for (const img of data.link_anh_swap) {
            const fileName = img.split("/").pop();
            const fileBuffer = axios.get(img,{ responseType: 'arraybuffer' }).then((res)=>{return res.data})
            zip.file(fileName, fileBuffer, { binary: true });
            count++;
            if (count === data.link_anh_swap.length) {
              zip.generateAsync({ type: "blob" }).then((content) => {
                saveAs(content, zipFileName);
              });
            }
          }
        } catch (error) {
          console.log(error);
        }
        nProgress.done();
      };
    
    return (
        <div className="md:w-[1440px] md:h-[1788px] w-[390px] bg-[#C2E9F0] md:py-[70px] py-4 mx-auto">
            <div className="md:w-[1120px] md:h-[1644px] w-[390px] bg-white rounded-3xl shadow-sm mx-auto">
        <Carousel className="w-full py-11">
                        <div className="flex md:ml-14 mb-8 ml-[100px]">
                        <Button onClick={()=>handleDownloadAllImages()} variant={"cus3"} className="w-[190px] h-[50px]">
                            Download
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                        <Link to={`/listcategories`}><Button variant={"cus3"} className="w-[295px] h-[50px] ml-4 hidden md:flex">
                            Create New Album
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button></Link>
                        </div>
                        
            <CarouselContent className="md:ml-11 mx-auto">
                {Array.from({ length: 46 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="md:w-[992px] md:h-[1400px] w-[326px] h-[326px] rounded-3xl overflow-hidden ml-3">
                    <img className="w-full h-full object-cover" onClick={()=>handleDownloadImage(data.link_anh_swap[index])} src={data.link_anh_swap[index]} alt="" />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-[326px] grid grid-cols-2 gap-5 mx-auto mt-5 md:hidden">
                {
                    data.link_anh_swap.slice(1,45).map((img:string,index:number)=>{
                        return(
                            <div className="w-[155px] h-[190px] rounded-3xl overflow-hidden" key={index}>
                            <img className="w-full object-cover h-full" src={img} alt="" />
                            </div>
                        )
                    })
                }
                
            </div>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
        </Carousel>
        </div>
        </div>
        )
}
export default Preview