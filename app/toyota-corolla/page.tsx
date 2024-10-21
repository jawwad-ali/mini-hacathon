import Link from "next/link"

const CarDetails = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center items-center flex-col max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold underline">
      Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9InJkLxRYcyNRGZIg_4denvi4NG1WhcEpw&s" 
        alt="Toyota Corolla"
        className="h-72 w-96" 
        />

        <div className="flex w-8/12 gap-5">
            <button className="px-8 py-4 bg-blue-800 text-white rounded-md mt-5">
              Book a test drive
           </button>

           <button className="px-8 py-4 text-blue-800 bg-white rounded-md mt-5 border border-blue-900">
              Request Bank Finance
           </button>

           <button className="px-8 py-4 text-blue-800 bg-white rounded-md mt-5 border border-blue-900">
              Visit Place
           </button>

           <button className="px-8 py-4 text-blue-800 bg-white rounded-md mt-5 border border-blue-900">
              Car Inspection
           </button>
        </div>

        {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
        </p> */}
        <div>
          <h2 className="text-4xl">Vehicle Description</h2>
          <ul className="text-xl flex flex-wrap gap-5 mt-5">
            <li> <strong> Number of Doors</strong> 4 </li>
            <li> <strong> Engine </strong> 1800 CC</li>
            <li> <strong> Condition </strong> 8.5 / 10</li>
            <li> <strong> Driven </strong> 9,500 KM</li>
            <li> <strong> Suspension Type: </strong> Soft Suspension</li>
          </ul>

          <ul className="text-xl flex flex-wrap gap-5 mt-5">
            <li> <strong> Avg </strong> 13 Km per ltr</li>
            <li> <strong> Transmission </strong> Automatic</li>
            <li> <strong> Fuel Type </strong> High Octane</li>
          </ul>
        </div>

        <p className="text-green-600 text-4xl">
            PKR 50,00,000
        </p>

        <Link href={'/payment'}>
           <button className="px-8 py-4 bg-blue-800 text-white rounded-md mt-5">
             Make Payment
           </button>
         </Link>
        </div>
    </div>
  )
}

export default CarDetails
