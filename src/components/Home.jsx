'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    return (
        <Slider {...settings}>
            <section
                className="flex items-center justify-center text-center text-black overflow-hidden"
            >
                <div className="relative">
                    <img src="./banner.jpg" alt="" className="w-full bg-center h-[80vh] z-0" />
                    <div className="absolute max-w-3xl px-4 z-10 mx-auto inset-0 flex justify-center items-center flex-col">
                        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                            Discover Amazing Products
                        </h1>

                        <p className="mt-4 text-lg md:text-xl font-semibold">
                            High-quality items, best deals, and a seamless shopping experience.
                        </p>

                        <button className="mt-8 px-8 py-3 bg-white font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                            Shop Now
                        </button>
                    </div>
                </div>


            </section>
            <section
                className="flex items-center justify-center text-center text-white overflow-hidden"
            >
                <div className="relative">
                    <img src="./banner2.jpg" alt="" className="w-full bg-center h-[80vh] z-0" />
                    <div className="absolute max-w-3xl px-4 z-10 mx-auto inset-0 flex justify-center items-center flex-col">
                        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                            Explore Premium Collections
                        </h1>

                        <p className="mt-4 text-lg md:text-xl font-semibold">
                            Find top-quality products, unbeatable offers, and a smooth shopping journey.
                        </p>

                        <button className="mt-8 text-black px-8 py-3 bg-white font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                            Shop Now
                        </button>
                    </div>
                </div>


            </section>
            <section
                className="flex items-center justify-center text-center text-black overflow-hidden"
            >
                <div className="relative">
                    <img src="./banner3.webp" alt="" className="w-full bg-center h-[80vh] z-0" />
                    <div className="absolute max-w-3xl px-4 z-10 mx-auto inset-0 flex justify-center items-center flex-col">
                        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                            Your Favorite Products in One Place
                        </h1>

                        <p className="mt-4 text-lg md:text-xl font-semibold">
                            Discover great deals, quality items, and effortless shopping.
                        </p>

                        <button className="mt-8 px-8 py-3 bg-white font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                            Shop Now
                        </button>
                    </div>
                </div>


            </section>
        </Slider>
    );
}
