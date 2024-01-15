import Header from "../../components/Header"
import { Button } from "../../components/ui/button"
const FaceUpload = () => {
    return(
        <>
            <div className="bg-[rgb(181,232,241)] w-[1440px] pb-[120px]">
            <Header/>
            <div className="w-[818px] h-[710px] rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mt-[80px] mx-auto p-[40px]">
                <h3 className="font-[700] text-[24px] leading-[20px] mt-[50px] text-center">Upload your face</h3>
                <div className="flex items-center mt-8">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
                    </svg>
                <span className="font-[600] text-[20px] leading-[20px] ml-2">
                    Your image need to move closer or away from the camera to complete
                </span>
                </div>
                <div className="flex items-center mt-3">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
                    </svg>
                <span className="font-[600] text-[20px] leading-[20px] ml-2">
                    Make sure you are in the bright environment.
                </span>
                </div>
                <Button variant="cus1" className="flex items-center mt-4 mx-auto" style={{width:"736px"}}>
                            Upload photo
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" stroke-width="3.08394" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" stroke-width="3.08394" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                </Button>
                <h3 className="font-[600] text-[24px] leading-[20px] mt-8">Uploaded</h3>
                    <div className="grid grid-cols-4 gap-[20px] w-[736px] rounded-[20px] overflow-hidden mt-8">
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                        <img src="https://picsum.photos/200" alt="" />
                    </div>       
                <Button variant="cus1" className="flex items-center mx-auto mt-6" style={{width:"736px"}}>
                            See more
                            <svg width="21" className="ml-2" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8118 2.29015L18.5216 10L10.8118 17.7099" stroke="white" stroke-width="3.08394" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.5213 10.0001L2.11914 10.0001" stroke="white" stroke-width="3.08394" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                </Button>
                <p className="font-[400] text-[20px] leading-[20px] mt-8 ml-2">We value your privacy. Rest assured, we handle  your data with utmost care.</p>
            </div>
            </div>
        </>
    )
}
export default FaceUpload