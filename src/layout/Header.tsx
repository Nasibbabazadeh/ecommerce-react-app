import { ProfileIcon, ShoppingIcon } from "../assets"
export default function Header() {
    return (
        <header>
            <div className="bg-black text-white text-center py-2">
                <span>Sign up and get 20% off your first order. <a href="#" className="underline">Sign Up Now</a></span>
                <button className="absolute right-4 top-1 text-white text-xl font-bold">×</button>
            </div>
            <nav className="text-black border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="text-2xl font-extrabold pr-10">SHOP.CO</a>
                    <ul className="flex space-x-8">
                        <li><a href="#" className="hover:text-primary-700">Shop</a></li>
                        <li><a href="#" className="hover:text-primary-700">On Sale</a></li>
                        <li><a href="#" className="hover:text-primary-700">New Arrivals</a></li>
                    </ul>

                    <div className="flex-grow mx-4">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full py-2 px-4 rounded-lg bg-gray-100 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <a href="#">
                            <img src={ShoppingIcon} alt="shopping" />
                        </a>
                        <a href="#">
                            <img src={ProfileIcon} alt="profile" />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
