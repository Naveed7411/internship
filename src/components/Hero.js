import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
         <>
         <div className="relative bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <div>
        
  
      </div>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">We Are Digital AgencyData to enrich your</span>
            <span className="block text-indigo-600 xl:inline">& Technology Solution</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
         
        </div>
        <div className="mt-5 sm:mt-6 sm:flex sm:justify-center  sm:w-100   lg:justify-start">
            <div className="rounded-md    ">
              <Link to='/about' className='py-6    px-8 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'
  >
                Get started
              </Link>
            </div>
           
          </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full  lg:h-full" src="https://images.unsplash.com/photo-1565967070415-99f7c8bd3646?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbiUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
  </div>
</div>
         </>
    )
}

export default Hero
