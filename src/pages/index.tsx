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
                   <a href="http://localhost:3000/login">
                    Login
                    </a>
                </button>

                <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
                <a href="http://localhost:3000/signup">
                    sign up
                    </a>
                </button>
            </div>
            </div>
            </header>


            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/tshirt" className="block relative h-48 rounded overflow-hidden">
          <img alt="T-shirt" className="object-cover object-center font-blackbold w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xK-sHnQr3HQJEZs0wswpBvDBm6Qb87_9RA&s"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-shirt</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">new italian design t-shirts</h2>
          <p className="mt-1">rupees:1500</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/pants" className="block relative h-48 rounded overflow-hidden">
          <img  alt="Mens Denim Pant" className="object-cover object-center w-full h-full block" src="https://ae-pic-a1.aliexpress-media.com/kf/H1546a5c62470459fb4ce2622d91e42a0W/2023-CHOLYL-New-Light-Blue-Skinny-Jeans-Men-Spring-Summer-Slim-Denim-Jeans-Men-Cotton-Elastic.jpg_640x640Q90.jpg_.webp"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mens Pant</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">this design looks good denim</h2>
          <p className="mt-1">rupees:2500</p>+
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/watch" className="block relative h-48 rounded overflow-hidden">
          <img alt="Mens Watch" className="object-cover object-center w-full h-full block" src="https://currenwatches.com.pk/cdn/shop/products/8357_4_1445x.jpg?v=1633952345"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mens Wrist Watch</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">new designs mens wrist watch</h2>
          <p className="mt-1">rupees:1200</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/shoes" className="block relative h-48 rounded overflow-hidden">
          <img alt="Mens Shoes" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOziMTkT3KJOKPjNJE7jZunh1CQFgDifjE6g&s"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Mens Shoes</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">new designs of mens Shoes</h2>
          <p className="mt-1">rupees:800</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/gkurti" className="block relative h-48 rounded overflow-hidden">
          <img alt="Girls kurti" className="object-cover object-center w-full h-full block" src="https://www.rafia.pk/cdn/shop/files/DPCK-156_1_600x.jpg?v=1719553913"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Girls kurti</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">we design this new look for you</h2>
          <p className="mt-1">rupees:1800</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/gpants" className="block relative h-48 rounded overflow-hidden">
          <img alt="Girls Pant" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynh6cGVEbHBYFk2RHBv1lBYfR3P0rYbPsXQ&s"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Girls Pant</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">we design this new look for you</h2>
          <p className="mt-1">Rupees:2800</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/lwatch" className="block relative h-48 rounded overflow-hidden">
          <img alt="Ladies Watch" className="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwdYlRNDKVF1uETRS_DSP_ZYrJZwyJ1kJPA&s"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Ladies Watch</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">new designs of ladies watch</h2>
          <p className="mt-1">Rupees:1000</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="http://localhost:3000/lshoes" className="block relative h-48 rounded overflow-hidden">
          <img alt="Ladies shoes" className="object-cover object-center w-full h-full block" src="https://5.imimg.com/data5/ANDROID/Default/2022/2/QB/CV/LU/73718625/product-jpeg-500x500.jpg"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ladies Shoes</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">These new designs is for you</h2>
          <p className="mt-1">Rupees:3000</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
      <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">SZ MINI MART</h1>
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">SZ MINI MART</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">NEW DESIGNS FOR NEW GENERATIONS</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">shirts</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">pants</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">wrist watches</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">shoes</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">ladies clothes</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">watches </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">shoes for ladies</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">pants for ladies</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">children clothes</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">toys </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">crockery</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">toys</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">mobiles accessories</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">belts</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">mens wears</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">ladies slippers</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 SZ MINI MART—
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@SZ MINI MART</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</div>
 )
}