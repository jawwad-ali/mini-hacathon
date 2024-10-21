import Link from 'next/link'
import React from 'react'

const Payment = () => {
  return (
    <div>
        <article>

       <h1 className='text-5xl font-bold'>Enter your Details</h1>

       <form className="border w-full flex flex-col justify-center items-center gap-5 h-[100vh]">
         <input type="text" className="w-96 border outline-none rounded-md h-12 px-4" placeholder='Enter Your Name' required />
         <input type="email" className="w-96 border outline-none rounded-md h-12 px-4" placeholder='Enter Your Email' required />
         <input type="text" className="w-96 border outline-none rounded-md h-12 px-4" placeholder='Card Number' required />
         <input type="text" className="w-96 border outline-none rounded-md h-12 px-4" placeholder='Address' required />

         <Link href={'/thank-you'}>
           <button className="px-8 py-4 bg-blue-800 text-white rounded-md mt-5">
             Place your order
           </button>
         </Link>
       </form>
     </article>
      
    </div>
  )
}

export default Payment
