import React from 'react'

function Contactus() {
    return (
        <div>
            <div className="  flex items-center justify-center bg-gray-50 py-12  ">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" alt="Try Again"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Contact Us
      </h2>
      
    </div>
    <form className="mt-8 space-y-6  " action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
      <div >
          <label for="Name" className="sr-only">Name</label>
          <input id="password" name="name" type="text" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
        </div>
        <div>
          <label for="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        
        <div>
          <label for="Mobile Number" className="sr-only">Mobile Number</label>
          <input id="password" name="mobile" type="text" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mobile Number"/>
        </div>
        <div >
          <label for="Textarea" className="sr-only">Text Area</label>
          <textarea className="h-250 " id="textarea" name="password" type="textarea" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 h-100 w-100 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Comment Here"/>
        </div>


      </div>

       

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           
          Send
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
    )
}

export default Contactus
