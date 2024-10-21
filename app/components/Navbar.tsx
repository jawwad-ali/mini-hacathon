import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-blue-900 text-white h-12 mb-5 flex items-center justify-center">
            <div className="w-4/12">
            <Link href="/">
                <img src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg" alt="" className="h-7 w-40" />
            </Link>
            </div>

            <div className="w-8/12">
                <ul className="flex items-end justify-end gap-5">
                    <li>
                        <Link href="/toyota-corolla">Toyota Corolla</Link>
                    </li>
                    <li>
                        <Link href="/honda-civic">Honda Civic</Link>
                    </li>
                    <li>
                        <Link href="/suzuki-alto">Suzuki Alto</Link>
                    </li>
                    <li>
                        <Link href="/honda-city">Honda City</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
