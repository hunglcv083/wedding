import { Button } from "../../components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel"

const Preview = () => {
    return (
        <div className="md:w-[1440px] md:h-[1688px] w-[390px] bg-[#C2E9F0] md:py-[70px] py-4">
            <div className="md:w-[1120px] md:h-[1544px] w-[390px] bg-white rounded-3xl shadow-sm mx-auto">
        <Carousel className="w-full py-11">
                        <div className="flex md:ml-14 mb-8 ml-[100px]">
                        <Button variant={"cus3"} className="w-[190px] h-[50px]">
                            Download
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                        <Button variant={"cus3"} className="w-[295px] h-[50px] ml-4 hidden md:flex">
                            Save to your collection
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" strokeWidth="3.08394" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Button>
                        </div>
                        
            <CarouselContent className="md:ml-11 mx-auto">
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="md:w-[992px] md:h-[992px] w-[326px] h-[326px] rounded-3xl overflow-hidden ml-3">
                    <img className="w-full" src="https://picsum.photos/1000" alt="" />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <div className="w-[326px] md:flex gap-5 mx-auto mt- hidden">
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div  className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
            </div>
            <div className="w-[326px] grid grid-cols-2 gap-5 mx-auto mt-5">
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div  className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-3xl overflow-hidden">
                <img className="w-full" src="https://picsum.photos/200" alt="" />
                </div>
            </div>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
        </Carousel>
        </div>
        </div>
        )
}
export default Preview