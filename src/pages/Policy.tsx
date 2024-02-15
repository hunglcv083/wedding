import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog"
import { Button } from "../components/ui/button"



const Policy = () => {
  const [checkUser, setCheckUser] = useState(false)
   const [user, setUser] = useState({id_user:'', link_avatar:''})
   useEffect(()=>{
    setUser(JSON.parse(String(localStorage.getItem('user'))))
    if(localStorage.getItem('user')) setCheckUser(true)
   },[])
    const logOut = () =>{
        localStorage.clear();
        window.location.reload()
    }
  const  scrollToSection = (sectionId:string) => {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div className="text-center ">
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
          <div className="mx-auto">
            <div className="grid grid-cols-2">
                 <div className="text-left p-11">
                  <h1 className="text-center font-bold text-[40px]">Start with <span className="text-[#54ffc0]">Fake Wedding</span></h1>
                  <p className="text-[25px]">You want to know the future of you and your lover?, you want to have fun with a software that predicts your future, experience our artificial intelligence application, we are artificial intelligence software create future predictions, we will automatically generate your predictions, experience it, we will create future scenarios of love</p>
                  <Button variant={'cus1'} className="w-[200px] mt-2 ml-[200px]">Download Android</Button><br />
                  <Button variant={'cus1'} className="w-[200px] mt-2 ml-[200px]">Download IOS</Button>
                  </div>
                  <div className="mt-4">
                      <img className="w-[700px] h-[480px] object-cover rounded-3xl" src="img\gal7.png"/>
                  </div>            
            </div>
          </div>
          <div className="mx-auto mt-11">
            <div className="grid grid-cols-2">
                  <div className="mt-4">
                      <img className="w-[700px] h-[480px] object-cover rounded-3xl" src="img\gal9.png"/>
                  </div>  
                 <div className="text-left p-11">
                  <h1 className="text-center font-bold text-[40px]">About <span className="text-[#54ffc0]">Us?</span></h1>
                  <p className="text-[25px]">You want to know the future of you and your lover?, you want to have fun with a software that predicts your future, experience our artificial intelligence application, we are artificial intelligence software create future predictions, we will automatically generate your predictions, experience it, we will create future scenarios of love</p>
                  <Button variant={'cus1'} className="w-[200px] mt-2 ml-[200px]">Download Android</Button><br />
                  <Button variant={'cus1'} className="w-[200px] mt-2 ml-[200px]">Download IOS</Button>
                  </div>          
            </div>
            <div className="mx-auto text-left">
              <h1 className="mt-11 font-bold text-[40px]">Privacy Notice</h1>
                  <p className="text-[25px] mt-4">Last updated: 8 April 2022 This Privacy Notice is designed to help you understand how Thinkdiff, a company duly incorporated under the Vietnam, which principal place of business is Ha Noi VietNam (“we,” “us,” and “our”) collects, uses, and shares your personal information and to help you understand and exercise your privacy rights.CONTENT
                  </p>
            </div>
            <div className="mx-auto text-left text-[25px] mt-4">
                <div className="">
                <h1 className="mt-11 font-bold text-[40px]">Content</h1>
                  <ul className="text-[#46b8ff] cursor-pointer">
                    <li onClick={() => scrollToSection('section1')}>1. Scope</li>
                    <li onClick={() => scrollToSection('section2')}>2. Changes to our privacy notice</li>
                    <li onClick={() => scrollToSection('section3')}>3. Personal information we collect</li>
                    <li onClick={() => scrollToSection('section4')}>4. How we use your information</li>
                    <li onClick={() => scrollToSection('section5')}>5. How we disclose your information</li>
                    <li onClick={() => scrollToSection('section6')}>6. Your privacy choices and rights</li>
                    <li onClick={() => scrollToSection('section7')}>7. Security of your information</li>
                    <li onClick={() => scrollToSection('section8')}>8. International data transfers</li>
                    <li onClick={() => scrollToSection('section9')}>9. Retention of personal information</li>
                    <li onClick={() => scrollToSection('section10')}>10. Supplemental notice for California residents</li>
                    <li onClick={() => scrollToSection('section11')}>11. Supplemental notice for Nevada residents</li>
                    <li onClick={() => scrollToSection('section12')}>12. Children’s information</li>
                    <li onClick={() => scrollToSection('section13')}>13. Third-party websites/applications</li>
                    <li onClick={() => scrollToSection('section14')}>14. Supervisory authority</li>
                    <li onClick={() => scrollToSection('section15')}>15. WHAT face data does your app collect?</li>
                    <li onClick={() => scrollToSection('section16')}>16. How do you use the collected face data? Provide a complete and clear explanation of all planned uses of this data.</li>
                    <li onClick={() => scrollToSection('section17')}>17. Will the data be shared with any third parties? Where will this information be stored?Ï</li>
                    <li onClick={() => scrollToSection('section18')}>18. How long will face data be retained?</li>
                    <li onClick={() => scrollToSection('section19')}>19. Contact us</li>
                  </ul>
                  <section id="section1">
                  <h1 className="mt-11 font-bold text-[40px]">1. SCOPE</h1>
                  <p className="text-[25px] mt-4">This Privacy Notice applies to personal information processed by us on our FutureLove mobile app, and our related online and offline offerings. To make this Privacy Notice easier to read, our FutureLove mobile app and our related offerings are collectively called “Services.”
                  </p>
                  </section>
                  <section id="section2">
                  <h1 className="mt-11 font-bold text-[40px]">2. CHANGES TO OUR PRIVACY NOTICE</h1>
                  <p className="text-[25px] mt-4">We may revise this Privacy Notice from time to time in our sole and absolute discretion. If there are any material changes to this Privacy Notice, we will notify you as may be required by applicable law effective as of the date of such material changes becoming effective. You understand and agree that you will be deemed to have accepted the updated Privacy Notice if you continue to use our Services after the new Privacy Notice takes effect.
                  </p>
                  </section>
                  <section id="section3">
                  <h1 className="mt-11 font-bold text-[40px]">3. PERSONAL INFORMATION WE COLLECT</h1>
                  <p className="text-[25px] mt-4">The categories of personal information we collect depend on how you interact with us, our Services and the requirements of applicable law. We collect information that you provide to us, information we obtain automatically when you use our Services, and information from other sources such as third-party services and organizations, as described below.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">3.1. Information You Provide to Us Directly</h1>
                  <p className="text-[25px] mt-4">We may collect the following personal information that you provide to us.
                    (a) Biometric Data. Subject to your separate opt-in consent, we may collect biometric data from you including photos and videos of your face, including your facial geometry. You may opt out of our use of this data at any time by contacting us at the contact information provided below in Section 15.
                    (b) Interactive Features. We and others who use our Services may collect personal information that you submit or make available through our interactive features (e.g., the content that you share and social media pages). Any information you provide on the public sections of these features will be considered “public,” unless otherwise required by applicable law, and is not subject to the privacy protections referenced herein.
                    (c) Purchases. As soon as FutureLove allows any purchases, we may collect personal information and details associated with your purchases, including payment information. In some cases, you may need to provide us with additional information to verify your identity before completing a transaction. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment card information entered through our Services, but we may receive information associated with your payment card information (e.g., your billing details).
                    (d) Your Communications with Us. We may collect personal information, such as email address and phone number when you request information about our Services, register to receive our newsletter or marketing, request customer or technical support, or otherwise communicate with us.
                    (e) Surveys. We may contact you to participate in the surveys. If you decide to participate, you may be asked to provide certain information which may include personal information.
                    (f) Sweepstakes or Contests. We may collect personal information you provide for any sweepstakes or contests that we offer. In some jurisdictions, we are required to publicly share information of sweepstakes and contest winners.

                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">3.2. Information Collected Automatically</h1>
                  <p className="text-[25px] mt-4">We may collect personal information automatically when you use our Services:
                  (a) Automatic Data Collection. We may collect certain information automatically when you use our Services, such as your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, browser or device information, location information (including approximate location derived from IP address), Internet service provider, and metadata about the content you provide which can provide details such as the location of where a picture was taken. We may also automatically collect information regarding your use of our Services, such as pages that you visit before, during and after using our Services, information about the links you click, the types of content you interact with, the frequency and duration of your activities, your history of using the app history, and other information about how you use our Services.
                  (b) Cookies, Pixel Tags/Web Beacons, and Other Technologies. We, as well as third parties that provide content, advertising, or other functionality on our Services, may use cookies, pixel tags, local storage, and other technologies (“Technologies”) to automatically collect information through your use of our Services.
                  i. Cookies. Cookies are small text files placed in device browsers that store preferences and facilitate and enhance your experience.
                  ii. Pixel Tags/Web Beacons. A pixel tag (also known as a web beacon) is a piece of code embedded in our Services that collects information about engagement on our Services. The use of a pixel tag allows us to record, for example, that a user has visited a particular web page or clicked on a particular advertisement. We may also include web beacons in e-mails to understand whether messages have been opened, acted on, or forwarded.
                  Our use of these Technologies fall into the following general categories:
                  • Operationally Necessary. This includes Technologies that allow you access to our Services, applications, and tools that are required to identify irregular website behavior, prevent fraudulent activity and improve security or that allow you to make use of our functionality;
                  • Performance-Related. We may use Technologies to assess the performance of our Services, including as part of our analytic practices to help us understand how individuals use our Services (please see Analytics below);
                  • Functionality-Related. We may use Technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our Services or keeping track of your specified preferences, interests, or past items viewed;
                  • Advertising- or Targeting-Related. We may use first party or third-party Technologies to deliver content, including ads relevant to your interests, on our Services or on third-party websites.

                  Please see Section 6 below to understand your choices regarding these Technologies.
                  (c) Analytics. We may use Technologies and other third-party tools to process analytics information on our Services. Some of our analytics partners include Google Firebase. For more information, please visit the Google Privacy Terms web page. To learn more about how to opt-out of Google’ use of your information on our mobile app, please follow the instructions provided in Google Privacy Terms.

                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">3.3. Information Collected from Other Sources</h1>
                  <p className="text-[25px] mt-4">Third-Party Sources. We may obtain information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party or third-party application that you have made available via your privacy settings.

                  </p>
                  </section>
                  <section id="section4">
                  <h1 className="mt-11 font-bold text-[40px]">4. HOW WE USE YOUR INFORMATION</h1>
                  <p className="text-[25px] mt-4">We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">4.1 Provide Our Services</h1>
                  <p className="text-[25px] mt-4">We use your information to fulfill our contract with you and provide you with our Services, such as:

                  Providing face(-s) animation on a photo or a picture features, and other similar Services;
                  Managing your information and accounts;
                  Providing access to certain areas, functionalities, and features of our Services;
                  Answering requests for customer or technical support;
                  Communicating with you about your account, activities on our Services, and policy changes; and
                  Processing your financial information and other payment methods for products or Services purchased.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">4.2 Administrative Purposes</h1>
                  <p className="text-[25px] mt-4">We use your information for various administrative purposes, such as:

                  Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;
                  Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity;
                  Measuring interest and engagement in our Services;
                  Short-term, transient use, such as contextual customization of ads;
                  Improving, upgrading or enhancing our Services;
                  Developing new products and Services;
                  Ensuring internal quality control and safety;
                  Authenticating and verifying individual identities;
                  Debugging to identify and repair errors with our Services;
                  Auditing relating to interactions, transactions and other compliance activities;
                  Enforcing our agreements and policies; and
                  Complying with our legal obligations.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">4.3 Marketing and Advertising our Products and Services</h1>
                  <p className="text-[25px] mt-4">We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law.

                  Some of the ways we may market to you include email campaigns, custom audiences advertising, and “interest-based” or “personalized advertising,” including through cross-device tracking.

                  If you have any questions about our marketing practices or if you would like to opt out of the use of your personal information for marketing purposes, you may contact us at any time as set forth in Section 15 below.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">4.4 Other Purposes</h1>
                  <p className="text-[25px] mt-4">We also use your information for other purposes as requested by you or as permitted by applicable law.
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">Consent.</h1>
                  <p className="text-[25px] mt-4">We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">De-identified and Aggregated Information.</h1>
                  <p className="text-[25px] mt-4">We may use personal information and other information about you to create de-identified and/or aggregated information, such as de-identified demographic information, de-identified location information, information about the device from which you access our Services, or other analyses we create.
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">Share Content with Friends or Colleagues.</h1>
                  <p className="text-[25px] mt-4">Our Services may offer various tools and functionalities. For example, we may allow you to provide information about your friends or colleagues through our referral services. Our referral services may allow you to forward or share certain content with a friend or colleague, such as an email inviting your friend to use our Services.
                  </p>
                  </section>
                  
                  <section id="section5">
                  <h1 className="mt-11 font-bold text-[40px]">5. HOW WE DISCLOSE YOUR INFORMATION</h1>
                  <p className="text-[25px] mt-4">We use your information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">5.1 Disclosures to Provide our Services</h1>
                  <p className="text-[25px] mt-4">The categories of third parties with whom we may share your information are described below.

                  a Other Users or Third Parties.
                  When you use the Services, you may choose to share personal information or content with other users or third parties. In addition, certain aspects of your profile may be available to other users.

                  b Service Providers.
                  We may share your personal information with our third-party service providers who use that information to help us provide our Services. This includes service providers that provide us with IT support, hosting, payment processing, customer service, and related services.

                  c Business Partners.
                  We may share your personal information with business partners to provide you with a product or service you have requested. We may also share your personal information with business partners with whom we jointly offer products or services.

                  d Advertising Partners.
                  We may share your personal information, except for your biometric data, with third-party advertising partners. These third-party advertising partners may set Technologies and other tracking tools on our Services to collect information regarding your activities and your device (e.g., your IP address, cookie identifiers, page(s) visited, location, time of day). These advertising partners may use this information (and similar information collected from other services) for purposes of delivering personalized advertisements to you when you visit digital properties within their networks. This practice is commonly referred to as “interest-based advertising” or “personalized advertising.”

                  e APIs/SDKs.
                  We may use third-party application program interfaces (“APIs”) and software development kits (“SDKs”) as part of the functionality of our Services. For more information about our use of APIs and SDKs, please contact us as set forth below.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">5.2 Disclosures to Protect Us or Others</h1>
                  <p className="text-[25px] mt-4">We may access, preserve, and disclose any information we store associated with you to external parties if we, in good faith, believe doing so is required or appropriate to: comply with law enforcement or national security requests and legal process, such as a court order or subpoena; protect your, our, or others’ rights, property, or safety; enforce our policies or contracts; collect amounts owed to us; or assist with an investigation or prosecution of suspected or actual illegal activity.
                  </p>
                  </section>
                  <section id="section6">
                  <h1 className="mt-11 font-bold text-[40px]">6. YOUR PRIVACY CHOICES AND RIGHTS</h1>
                  
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">6.1. Your Privacy Choices</h1>
                  <p className="text-[25px] mt-4">The privacy choices you may have about your personal information are determined by applicable law and are described below.

                    (a) Email Communications.
                    If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, and you will not be able to opt out of those communications (e.g., communications regarding our Services or updates to our Terms of Use or this Privacy Notice).

                    (b) Text Messages.
                    You may opt out of receiving text messages from us by following the instructions in the text message you have received from us or by otherwise contacting us.

                    (c) Mobile Devices.
                    We may send you push notifications through our mobile app. You may opt out from receiving these push notifications by changing the settings on your mobile device. With your consent, we may also collect precise location-based information via our mobile app. You may opt out of this collection by changing the settings on your mobile device.

                    (d) “Do Not Track.”
                    Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals or similar mechanisms transmitted by web browsers.

                    (e) Cookies and Interest-Based Advertising.
                    You may stop or restrict the placement of Technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt-out of personalized advertisements on some mobile applications by following the instructions for Android, iOS and others. The online advertising industry also provides websites from which you may opt out of receiving targeted ads from data partners and other advertising partners that participate in self-regulatory programs. You can access these and learn more about targeted advertising and consumer choice and privacy by visiting the Network Advertising Initiative, the Digital Advertising Alliance, the European Digital Advertising Alliance, and the Digital Advertising Alliance of Canada. Please note you must separately opt out in each browser and on each device.
                  </p>
                  </section>
                  <section id="">
                  <h1 className="mt-11 font-bold text-[25px]">6.2. Your Privacy Rights</h1>
                  <p className="text-[25px] mt-4">In accordance with applicable law, you may have the right to:
                    (a) Request access to your personal data: Commonly known as a “data subject access request,” this enables you to receive a copy of the personal data we hold about you and to verify that we are lawfully processing it.
                    (b) Request correction of the personal data that we hold about you: This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                    (c) Request erasure of your personal data: This enables you to ask us to delete or remove personal data where there is no good reason for us to continue processing it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully, or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request for erasure for specific legal reasons, which will be notified to you, if applicable, at the time of your request.
                    (d) Object to processing of your personal data: This applies when we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation that makes you want to object to processing on this ground, as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
                    (e) Request restriction of processing of your personal data: This enables you to ask us to suspend the processing of your personal data in the following scenarios:
                    i. If you want us to establish the data’s accuracy;
                    ii. Where our use of the data is unlawful but you do not want us to erase it;
                    iii. Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims; or
                    iv. You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.
                    (f) Request the transfer of your personal data: We will provide your personal data in a structured, commonly used, machine-readable format to you or a third party you have chosen. Please note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
                    (g) Withdraw consent: You may withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.

                  </p>
                  </section>
                  <section id="section7">
                  <h1 className="mt-11 font-bold text-[40px]">7. SECURITY OF YOUR INFORMATION</h1>
                  <p className="text-[25px] mt-4">We take steps to ensure that your information is treated securely and in accordance with this Privacy Notice. Unfortunately, no system is 100% secure, and we cannot ensure or warrant the security of any information you provide to us. To the fullest extent permitted by applicable law, we do not accept liability for unauthorized disclosure. By using our Services or providing personal information to us, you agree that we may communicate with you electronically regarding security, privacy, and administrative issues relating to your use of our Services. If we learn of a security system’s breach, we may attempt to notify you electronically by posting a notice on our Services, by mail or by sending an email to you.
                  </p>
                  </section>
                  <section id="section8">
                  <h1 className="mt-11 font-bold text-[40px]">8. INTERNATIONAL DATA TRANSFERS</h1>
                  <p className="text-[25px] mt-4">Many of our external third parties are based outside the UK so their processing of your personal data will involve a transfer of data outside the UK. We may transfer your personal data to our group companies that are located outside the UK, including, but not limited, in the United States, or other countries, which may have data protection laws that are different from the laws where you live. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
                  (a) We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data.
                  (b) Where we use certain service providers, we may use specific contracts approved by the UK which give personal data the same protection it has in the UK. Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the UK.
                  </p>
                  </section>
                  <section id="section9">
                  <h1 className="mt-11 font-bold text-[40px]">9. RETENTION OF PERSONAL INFORMATION</h1>
                  <p className="text-[25px] mt-4">We may store the personal information we collect as described in this Privacy Notice for as long as you use our Services or as necessary to fulfill the purpose(s) for which it was collected, provide our Services, resolve disputes, establish legal defenses, conduct audits, pursue legitimate business purposes, enforce our agreements, and comply with applicable laws. Notwithstanding the foregoing, we may store biometric data for three (3) years.
                  </p>
                  </section>
                  <section id="section10">
                  <h1 className="mt-11 font-bold text-[40px]">10. SUPPLEMENTAL NOTICE FOR CALIFORNIA RESIDENTS</h1>
                  <p className="text-[25px] mt-4">This Supplemental California Privacy Notice only applies to our processing of personal information that is subject to the California Consumer Privacy Act of 2018 (“CCPA”). The CCPA provides California residents with the right to know what categories of personal information a person (either a natural person or a legal entity) has collected about them and whether such person disclosed that personal information for a business purpose (e.g., to a service provider) in the preceding twelve months. California residents can find this information below:
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">Category of Personal Information Collected by Company</h1>
                  <p className="text-[25px] mt-4">Identifiers
                    Personal information categories listed in Cal. Civ. Code § 1798.80(e) <br />
                    Commercial information <br />
                    Biometric <br />
                    Internet or other electronic network activity <br />
                    Sensory data <br />
                    Geolocation data <br />
                    Professional or employment-related information <br />
                    Inferences drawn from other personal information to create a profile about a consumer
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">Categories of Third Parties Personal Information is Disclosed to for a Business Purpose</h1>
                  <p className="text-[25px] mt-4">Service providers <br />
                    Other users or third parties you share with <br />
                    Advertising partners <br />
                    The categories of sources from which we collect personal information and our business and commercial purposes for using personal information are set forth above.
                  </p>
                  <h1 className="mt-11 font-bold text-[25px]">Additional Privacy Rights for California Residents:</h1>
                  <p className="text-[25px] mt-4">“Sales” of Personal Information under the CCPA. For purposes of the CCPA, we do not “sell” personal information, nor do we have actual knowledge of any “sale” of personal information of minors under 16 years of age. <br />

                  Non-Discrimination. California residents have the right not to receive discriminatory treatment by us for the exercise of their rights conferred by the CCPA. <br />

                  Authorized Agent. Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your personal information. To designate an authorized agent, please contact us as set forth below. <br />

                  Verification. When you make a request, we will ask you to provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include confirming the email address associated with any personal information we have about you. <br />

                  If you are a California resident and would like to exercise any of your rights under the CCPA, please contact us as set forth in Section 15 below. We will process such requests in accordance with applicable laws.


                  </p>
                  </section>
                  <section id="section11">
                  <h1 className="mt-11 font-bold text-[40px]">11. SUPPLEMENTAL NOTICE FOR NEVADA RESIDENTS</h1>
                  <p className="text-[25px] mt-4">If you are a resident of Nevada, you have the right to opt-out of the sale of certain personal information to third parties who intend to license or sell that personal information. You can exercise this right by contacting us as set forth in Section 15 below with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address associated with your account. Please note that we do not currently sell your personal information as sales are defined in Nevada Revised Statutes Chapter 603A.
                  </p>
                  </section>
                  <section id="section12">
                  <h1 className="mt-11 font-bold text-[40px]">12. CHILDREN’S INFORMATION</h1>
                  <p className="text-[25px] mt-4">The Services are not directed to children under 13, (or other age as required by local law), and we do not knowingly collect personal information from children. If you learn that your child has provided us with personal information without your consent, you may contact us as set forth in Section 15 below. If we learn that we have collected a child’s personal information in violation of applicable law, we will promptly take steps to delete such information.
                  </p>
                  </section>
                  <section id="section13">
                  <h1 className="mt-11 font-bold text-[40px]">13. THIRD-PARTY WEBSITES/APPLICATIONS</h1>
                  <p className="text-[25px] mt-4">The Services may contain links to other websites/applications and other websites/applications may reference or link to our Services. These third-party services are not controlled by us. We encourage our users to read the privacy policies of each website and application with which they interact. We do not endorse, screen or approve, and are not responsible for, the privacy practices or content of such other websites or applications. Providing personal information to third-party websites or applications is at your own risk.
                  </p>
                  </section>
                  <section id="section14">
                  <h1 className="mt-11 font-bold text-[40px]">14. SUPERVISORY AUTHORITY</h1>
                  <p className="text-[25px] mt-4">If you are located in the Ha Noi Vietnam, you have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable law. The full list of authorities on the protection of personal data in each Vietnam member state.
                  </p>
                  </section>
                  <section id="section15">
                  <h1 className="mt-11 font-bold text-[40px]">15. WHAT face data does your app collect?</h1>
                  <p className="text-[25px] mt-4">⇒ Our application takes a photo of a face without makeup, without glasses, without a mask. Our application will take a photo of a man and 1 photo of a woman to create a pairing event. Take a look at our running results here:https://futurelove.online/detail/920980354218/1
                  </p>
                  </section>
                  <section id="section16">
                  <h1 className="mt-11 font-bold text-[40px]">16. How do you use the collected face data? Provide a complete and clear explanation of all planned uses of this data.</h1>
                  <p className="text-[25px] mt-4">⇒ Our application will take a frontal photo of the face, build a 3D model of it, then swap the face into another photo. Note that we will not store the face, we will upload the photo to a temporary server. It will serve to generate modal and swap faces, we do not store images data for a long time. These face images will be deleted immediately after users download or close the application.
                  </p>
                  </section>
                  <section id="section17">
                  <h1 className="mt-11 font-bold text-[40px]">17. Will the data be shared with any third parties? Where will this information be stored?</h1>
                  <p className="text-[25px] mt-4">⇒ We do not share user data with any third parties, unless users want to do that via any other application like social media. This information is stored in the user's device. We will only temporarily store this data on an intermediary server and if the user does not want anyone else to store this data in the future, they can delete it.
                  </p>
                  </section>
                  <section id="section18">
                  <h1 className="mt-11 font-bold text-[40px]">18. How long will face data be retained?</h1>
                  <p className="text-[25px] mt-4">- Face data will be stored if the user wishes, our application logic is to allow users to store a web link list of events created by AI so that users can share online, share love between people. 2 people, to share with friends who are interested, it may be saved for 3-4 month as the user's right, if the user deletes the account, it will be lost, the data will disappear if the user deletes the account
                  </p>
                  </section>
                  <section id="section19">
                  <h1 className="mt-11 font-bold text-[40px]">19. CONTACT US</h1>
                  <p className="text-[25px] mt-4">Thinkdiff AI Company is the controller of your personal information. If you have any questions about our privacy practices or this Privacy Notice, or to exercise your rights as detailed in this Privacy Notice, please contact us at: <br />
                  Thinkdiff AI Company <br />
                  30Louis7 Louis City Dai Mo, Nam Tu Liem Ha Noi Vietnam
                  </p>
                  </section>
                </div>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Policy
