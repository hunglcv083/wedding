import Footer from "../components/Footer"
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
          <div className="bg-[#F2FDFF] h-[707px] py-[95px]">
          <h1 className="w-[1064px] font-[800] text-[48px] leading-[58px] text-black text-center mx-auto">Your Ultimate AI Maker to Generate Wedding Photos for Free</h1>
            <div className="grid grid-cols-3 gap-[48px] mx-[100px] my-auto mt-[45px]">
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <img src="src\pages\img\easy-to-use 2.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">Easy to use</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">All you need to do is upload 2 excellent face portrait. AI will swap faces smoothly without requiring manual editing.</p>
                </div>
              </div>
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <img src="src\pages\img\easy-to-use 2.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">Privacy Protection</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">We promise that all your uploaded images and other data will be protected well. No one will see these things except yourself. We make sure the face swapping procedure is highly private.</p>
                </div>
              </div>
              <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <img src="src\pages\img\easy-to-use 2.png" alt="" />
                <div className="mt-[10px] text-left">
                  <h5 className="font-[700] text-[24px]">One-sec Face Swap</h5>
                  <p className="mt-[10px] font-[500] text-[16px] leading-[19px]">This online AI face swap app can switch to the faces of anyone online. No installation, no ads, and no watermarks! Create your face magic in fantastic style and without too much effort!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] py-[95px]">
          <h1 className="w-[1064px] font-[800] text-[48px] leading-[58px] text-black text-center mx-auto">Jump Start Your Creation with 50+ Wedding Photos Template</h1>
          <div className="grid grid-cols-3 gap-6 mx-[125px] mt-[50px]">
            <div className="">
              <img src="src\pages\img\gal1.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal2.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal3.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal4.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal5.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal6.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal7.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal8.png" alt="" />
            </div>
            <div className="">
              <img src="src\pages\img\gal9.png" alt="" />
            </div>
          </div>
          </div>
          <div className="bg-[#F2FDFF] h-[1061px] py-[110px]">
            <h1 className="w-[1064px] font-[800] text-[48px] leading-[58px] text-black text-center mx-auto">Say Goodbye to Photographer, Studios, Expense and More</h1>
            <div className="grid grid-cols-2 px-[120px] mt-10">
              <div className="w-[544px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">Traditional Wedding Photo</h5>
                <img className="mt-[30px]" src="src\pages\img\cd1.png" alt="" />
                <div className="mt-[30px]">
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-2">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    High cost of cameras, studios, sound stage, etc.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Long time in preparing, shooting, and editing.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Complex manual processes through all stages.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-3">
                    <svg className="mr-[15px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.43884 0.418419C1.88095 -0.139473 0.976437 -0.139473 0.418549 0.418418C-0.139339 0.97631 -0.139339 1.88083 0.418549 2.43872L7.9797 9.99993L0.418416 17.5613C-0.139472 18.1192 -0.139472 19.0237 0.418416 19.5816C0.976304 20.1395 1.88082 20.1395 2.43871 19.5816L9.99999 12.0202L17.5613 19.5816C18.1192 20.1395 19.0237 20.1395 19.5816 19.5816C20.1395 19.0237 20.1395 18.1192 19.5816 17.5613L12.0203 9.99993L19.5814 2.43872C20.1393 1.88083 20.1393 0.976312 19.5814 0.41842C19.0236 -0.139471 18.119 -0.139471 17.5612 0.41842L10 7.97962L2.43884 0.418419Z" fill="#FF6A55"/>
                    </svg>
                    Hard to update the photos after done
                  </li>
                </div>
              </div>
              <div className="w-[544px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <h5 className="font-[700] text-[24px] leading-[30px] text-black text-center mx-auto">Traditional Wedding Photo</h5>
                <img className="mt-[30px]" src="src\pages\img\cd2.png" alt="" />
                <div className="mt-[30px]">
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    No camera, no studios, no more specific environment
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Choose from 50+ AI frames, without hiring studios.
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Generate AI photos within several minutes
                  </li>
                  <li className="flex font-[500] text-[16px] leading-[19px] mt-1">
                  <svg width="28" className="mr-[15px]" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6554 7.40201C24.1149 7.93802 24.1149 8.80707 23.6554 9.34309L13.5545 21.1275C12.1762 22.7355 9.94148 22.7355 8.56315 21.1275L4.34458 16.2058C3.88514 15.6698 3.88514 14.8008 4.34458 14.2648C4.80402 13.7287 5.54892 13.7287 6.00836 14.2648L10.2269 19.1864C10.6864 19.7224 11.4313 19.7224 11.8907 19.1864L21.9916 7.40201C22.4511 6.866 23.196 6.866 23.6554 7.40201Z" fill="#61DE35"/>
                    </svg>
                    Intuitive & easy processes powered by AI tech.
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] h-[876px] py-[110px] flex gap-2">
              <svg width="81" className="my-auto" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M51.2933 19.0337C52.4174 20.1698 52.4174 22.0117 51.2933 23.1478L34.6201 39.9998L51.2933 56.8519C52.4174 57.9879 52.4174 59.8299 51.2933 60.9659C50.1693 62.102 48.3469 62.102 47.2229 60.9659L30.5496 44.1139C28.3016 41.8418 28.3016 38.1579 30.5496 35.8857L47.2229 19.0337C48.3469 17.8976 50.1693 17.8976 51.2933 19.0337Z" fill="#6F767E"/>
            </svg>
            <div className="">
              <h1 className="w-[1064px] font-[800] text-[48px] leading-[58px] text-black text-center mx-auto">Trusted by Millions of Creators and Companies Worldwide</h1>
              <div className="grid grid-cols-3 mt-10 gap-10">
                <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <img src="src\pages\img\cdl1.png" alt="" />
                  <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                </div>
                <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <img src="src\pages\img\cdl2.png" alt="" />
                  <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                </div>
                <div className="w-[352px] p-[32px] block rounded-xl border bg-white border-gray-100 shadow-xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <img src="src\pages\img\cdl3.png" alt="" />
                  <p className="text-left mt-4 font-[500] text-[16px] leading-[20px]">Lorem ipsum dolor sit amet consectetur. Porttitor rhoncus arcu nec erat felis scelerisque turpis maecenas imperdiet. Quam ut ultrices erat massa blandit malesuada purus. Integer pulvinar congue facilisi leo nec ut tellus at. Feugiat condimentum magna tellus feugiat cras quis pulvinar congue.</p>
                </div>
              </div>
            </div>
            <svg className="my-auto" width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7067 60.9663C28.5826 59.8302 28.5826 57.9883 29.7067 56.8522L46.3799 40.0002L29.7067 23.1481C28.5826 22.0121 28.5826 20.1701 29.7067 19.034C30.8307 17.898 32.6531 17.898 33.7771 19.034L50.4504 35.8861C52.6984 38.1582 52.6984 41.8421 50.4504 44.1143L33.7771 60.9663C32.6531 62.1024 30.8307 62.1024 29.7067 60.9663Z" fill="#6F767E"/>
            </svg>
          </div>
          <div className="bg-white h-[400px]">
            <h2 className="font-[800] text-[48px] leading-[58px] ">Make Wedding Photo Easy for All!</h2>
            <h5 className="font-[500] text-[24px] leading-[30px] mt-10 w-[1120px] px-[5px] mx-auto">Use the power of AI to create professional wedding photos faster, with less effort and cost. Create your dream wedding . Get started with Wedding AI!</h5> 
            <button className="text-[#fff] w-[340px] bg-[#009DC4] mt-11 rounded-3xl px-[20px] py-[10px] text-center font-[700] text-[16px] leading-[20px] flex mx-auto items-center">
              <div className="mx-auto flex">
                  <span className="">Create Free Wedding Photo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
              </div>                 
            </button>           
          </div>
          <Footer/>
    </div>
  )
}

export default HomePage
