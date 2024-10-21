import Link from "next/link"
const NewCars = () => {
  return (
    <div className="flex w-full justify-around items-center h-[100dvh]">
      <Link href="/toyota-corolla">
        <div className="h-auto w-48 border">
            <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Toyota Corolla</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5 lacs
            </p>
            <p className="text-slate-400">
              621 Reviews
            </p>
        </div>
      </Link>

        <div className="h-auto w-48 border">
            <img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Honda Civic</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5 lacs
            </p>
            <p className="text-slate-400">
              621 Reviews
            </p>
        </div>

        <div className="h-auto w-48 border">
            <img src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Suzuki Alto</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5 lacs
            </p>
            <p className="text-slate-400">
              621 Reviews
            </p>
        </div>

        <div className="h-auto w-48 border">
            <img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="" />
            <h4 className="text-blue-950 font-bold pt-5">Honda City</h4>
            <p className="text-green-600">
              PKR 59.7 - 75.5 lacs
            </p>
            <p className="text-slate-400">
              621 Reviews
            </p>
        </div>
    </div>
  )
}

export default NewCars
