import { Button } from "../../components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

const Preview = () => {
    return (
        <div className="w-[1440px] h-[1688px] bg-[#C2E9F0] py-[70px]">
            <div className="w-[1120px] h-[1544px] bg-white rounded-3xl shadow-sm mx-auto">
        <Carousel className="w-full pt-11">
                        <div className="flex ml-14 mb-8">
                        <Button variant={"cus3"} className="w-[190px] h-[50px]">
                            Download
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                        <Button variant={"cus3"} className="w-[295px] h-[50px] ml-4">
                            Save to your collection
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                        </div>
                        
            <CarouselContent className="ml-11">
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="w-[992px] h-[992px] rounded-3xl overflow-hidden">
                    <img className="w-full" src="https://picsum.photos/1000" alt="" />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-[992px] flex gap-10 mx-auto mt-10">
                <div className="w-[308px] h-[308px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div  className="w-[308px] h-[308px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[308px] h-[308px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
            </div>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        </div>
        </div>
        )
}
export default Preview