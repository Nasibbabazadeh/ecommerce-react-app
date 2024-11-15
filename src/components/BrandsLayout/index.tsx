import { Calvin, Gucci, Prada, Versace, Zara } from "../../assets";

export default function BrandsLayout() {
    return (
        <>
            <section className="bg-gray-100 py-16 home__layout">
                <div className="ml-[100px]">
                    <div className="container">
                        <h1 className="text-5xl font-bold leading-tight text-gray-900">
                            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-lg ">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <button className="mt-6 bg-black text-white py-3 px-6 rounded-full text-lg hover:bg-gray-800">
                            Shop Now
                        </button>
                    </div>
                    <div className="container  mt-12 flex flex-wrap max-w-[596px] justify-between">
                        <div >
                            <h2 className="text-3xl font-semibold text-gray-900">200+</h2>
                            <p className="text-gray-600">International Brands</p>
                        </div>
                        <div >
                            <h2 className="text-3xl font-semibold text-gray-900">2,000+</h2>
                            <p className="text-gray-600">High-Quality Products</p>
                        </div>
                        <div >
                            <h2 className="text-3xl font-semibold text-gray-900">30,000+</h2>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-black py-8 ">
                <div className="container mx-auto flex flex-wrap justify-around items-center text-white">
                    <img src={Versace} alt="versace" />
                    <img src={Calvin} alt="calvin" />
                    <img src={Prada} alt="prada" />
                    <img src={Gucci} alt="gucci" />
                    <img src={Zara} alt="zara" />
                </div>
            </div>
        </>

    )
}