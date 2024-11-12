"use client"
import Link from "next/link"
import image from"next/image"
import { Children } from "react"


export default function Nav () {
 return (
   <div>
 

   <title>SZ MINI MART</title>



        <header className="text-grey-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-grey-900 md:mb-0">
              <div className="flex space-x-4">
                <div className="avatar">
                 <div className="w-10 rounded-full relative">
                  <img
                    src="https://www.shutterstock.com/image-vector/sz-letter-original-monogram-logo-260nw-1700256415.jpg"
                    alt="sz logo"
                  />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white"></span>
               </div>
             </div>
           </div>

            <span className="ml-3 text-xl">SZ MINI MART</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-10  md:pl-4 md:border-1 md:border-blue-400 flex flex-wrap items-center text-base justify-center ">

      <Link className="ml-10  mr-16 hover:text-red-900" href={"http://localhost:3000"}>Home</Link>
      
      <Link className="mr-16 hover:text-blue-900" href={"http://localhost:3000/helpandsupport"}>Help and Support</Link>
      
            </nav>

            {/*buttons*/}
            <div  className="flex space-x-4 mt-4 md:mt-0">
                <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                   <a href="http://localhost:3001/login">
                    Login
                    </a>
                </button>

                <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                <a href="http://localhost:3001/signup">
                    sign up
                    </a>
                </button>
            </div>
            </div>
            </header>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center"/>
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">SIGN UP</h1>
      <p className="leading-relaxed mt-4">Sign up to your account</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Password</label>
        <input type="text" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">login</button>
          </div>
  </div>
</section>
</div>
 )
}