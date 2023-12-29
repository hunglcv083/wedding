import Header from "../components/Header"



const HomePage = () => {

  return (
    <div className="text-center">
          <Header/>
          <div className="bg-[#F2FDFF] w-[1440px] h-[790px] relative mx-auto">  
              <div className="absolute w-[623px] text-left top-[240px] left-[200px]">
                <h1 className="text-[#009DC4] font-[900] text-[56px] leading-[68px]">AI Face Swap Online</h1>
                <h2 className="text-[#009DC4] font-[700] text-[40px] leading-[40px] my-3">Make Your Dream Wedding</h2>
                <p className="text-[#000] font-[500] text-[24px] leading-[24px] w-[500px]">Upload your photos to swap the face with AI. Experience powerful realistic face swapping effects. Create gorgeous wedding photos!</p>
                <button className="text-[#fff] bg-[#33C5E9] mt-8 rounded-3xl px-[20px] py-[10px] text-center font-[800] text-[20px] leading-[20px] flex">
                  <span>Start face swapping</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>

                </button>
              </div>
              <div className="absolute right-2">
                <img src="src\pages\img\ba-bpn.png " className="" alt="" />
              </div>
          </div>
          <div className="bg-[#FFF] w-[1440px] mx-auto mb-[100px]">
              <h1 className="font-[800] text-[48px] leading-[58px] text-black text-center mt-[100px] mb-[50px]">How to Swap a Face Online</h1>
              <div className="grid grid-cols-2 px-[100px] gap-8 mt-10">
              <div className="">
              <ul className="mt-4 space-y-2 ulhome">
                <li>
                  <div className="rounded-xl my-auto hover:shadow-xl  w-[550px] h-[170px] cards">
                    <div className="flex gap-[16px]">
                    <strong className="font-black text-black text-[60px]">1</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left">Upload an Image</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Simply click 'Upload an Image' and select 2 photos you want to use as the source image. Ensure only one face in the photo is of good quality.</p>
                    </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="rounded-xl hover:shadow-xl w-[550px] h-[170px] cards card1">
                    <div className="flex gap-[16px]">
                    <strong className="font-black text-black text-[60px] ml-[]">2</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left">Swap Face with AI</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Click the 'Swap Face Now' button to show AI its magic. Faceswapper will finish face swapping in a few seconds. Our AI does the job automatically while guaranteeing the best output.</p>
                    </div>
                    </div>
                  </div>
                </li>
                <li className=" ">
                  <div className="rounded-xl my-auto hover:shadow-xl w-[550px] h-[170px] cards card1">
                    <div className="flex gap-[16px]">
                    <strong className="font-black text-black text-[60px] ml-[]">3</strong>
                    <div className="mt-[10px] text-xs font-medium text-gray-300">
                      <h5 className="font-[600] text-black text-[24px] leading-[30px] text-left">Preview and Download</h5>
                      <p className="mt-3 font-[500] text-black text-[16px] leading-[20px] text-left">Bingo! Your face is swapped to who you like! Preview the final result on the same page. Click 'Download' to save the watermark-free picture to your device. Share it for fun!</p>
                    </div>
                    </div>
                  </div>
                </li>
              </ul>
              </div>
                <div className="">
                  <img src="src\pages\img\swap-online.png" alt="" />
                </div>
              </div>
          </div>
          <div className=""></div>
    </div>
  )
}

export default HomePage
