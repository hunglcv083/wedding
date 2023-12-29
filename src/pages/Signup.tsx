
const Signup = () => {

    return (
      <div className="w-[1440px]">
          <header className="pt-[24px] pl-[24px]">
              <img src="src\pages\img\logo.png" alt="" />
          </header>
          <div className="grid grid-cols-2 pt-[100px]">
              <div className="w-[602px]">
                  <img className="px-[29px] my-auto" src="src\pages\img\signin.png" alt="" />
              </div>
              <div className="mx-auto w-[602px] max-w-screen-xl px-4 sm:px-6 lg:px-8">
                          <div className="mx-auto max-w-lg">
                              <form action="" className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                              <h1 className="text-2xl font-bold text-[#2A85FF]-600 sm:text-3xl">Sign Up</h1>
                              <h4 className="text-sm text-black font-[600] mb-[15px]">Sign up with Open accounts</h4>
                              <div className="flex items-center justify-center dark:bg-gray-700 mx-auto">
                                  <button className="w-full px-4 py-2 border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 ">
                                      <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                                      <span>Google</span>
                                  </button>
                              </div>
                              <span className="flex items-center ">
                                  <span className="h-px flex-1 bg-[#EFEFEF] my-[15px]"></span>
                              </span>
                              <h4 className="text-sm text-black font-[600]">Or continue with email address</h4>
                              <div>
                                  <label htmlFor="email" className="sr-only">Email</label>
  
                                  <div className="relative">
                                  <input
                                      type="email"
                                      className="w-full rounded-lg border-gray-200 p-4 ps-12 text-sm shadow-sm"
                                      placeholder="Your email"
                                  />
  
                                  <span className="absolute inset-y-0 start-0 grid place-content-center px-4">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                      </svg>
                                  </span>
                                  </div>
                              </div>
                              
                              <button
                                  type="submit"
                                  className="block w-full rounded-lg bg-[#2A85FF] px-5 py-3 text-sm font-medium text-white"
                              >
                                  Sign up
                              </button>
  
                              <p className="text-sm text-gray-500">
                                  Already a member?
                                  <a className="underline" href="">Sign in</a>
                              </p>
                              </form>
                          </div>
                      </div>
              </div>
      </div>
    )
  }
  
  export default Signup
  