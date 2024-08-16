import React from "react";
import Image from "next/image";

const SignInForm:React.FC = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px3 py-12 lg:px-8">

     <header className="flex bg-emerald-300 mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="p-4">
        <Image 
          src='/logo_2024.svg'
          alt="Dans Levitating Logo"
          className="dark:invert"
          width={80}
          height={19}
          priority
        />
      </div>  
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-4xl font-bold text-blue-600">All souls welcome</h1>
      </div>
     </header>

     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>

      <form className="space-y-6" action="#" method="POST">
        
       <div>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">email</label>
        <div className="mt-2">
         <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3" id="email" name="email" type="email" maxLength={25} autoFocus required placeholder="email"></input>
        </div>
       </div>

       <div>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="password">password</label>
        <div className="mt-2">
         <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3" id="password" name="password" type="password" autoFocus required placeholder="password"></input>
        </div>
        <div className="mt-2 flex items-center justify-between">
         <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-500">Forgot password?</a>
         </div>
        </div>
       </div>

       <div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">sign in</button>
       </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?
       <a href="#" className="font-semibold leading-6 text-indigo-900 hover:text-indigo-500"> Start a 14 day free trial</a>
      </p>
    </div>
    </div>
  )
};

export default SignInForm;