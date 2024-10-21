import Link from "next/link"

const CarDetails = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center items-center flex-col max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold underline">
      Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
      </h1>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLwuB4-u8KKOR_5XuDVaP_U-cChSDQV2VRw&s" 
        alt="Toyota Corolla"
        className="h-72 w-96" 
        />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda nihil quae unde optio, non amet, quos atque quis commodi excepturi blanditiis neque ullam quaerat laborum. Deleniti quaerat aperiam optio.
        </p>

        <p className="text-green-600 text-4xl">
            RS 80,00,000
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
