'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Hero() {
    return (

        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <section
                className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden text-black"
                style={{
                    backgroundImage: "url('./banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundBlendMode: "overlay"
                }}
            >
                <div className="relative max-w-3xl px-4">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                        Discover Amazing Products
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-black font-semibold">
                        High-quality items, best deals, and a seamless shopping experience.
                    </p>

                    <button className="mt-8 px-8 py-3 bg-white font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                        Shop Now
                    </button>
                </div>

                <style>{`
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `}</style>
            </section>
            <section
                className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden text-white"
                style={{
                    backgroundImage: "url('./banner2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundBlendMode: "overlay"
                }}
            >
                <div className="relative max-w-3xl px-4">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                        Explore Premium Collections

                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-white font-semibold">
                        Find top-quality products, unbeatable offers, and a smooth shopping journey.
                    </p>

                    <button className="mt-8 px-8 py-3 bg-gray-500 font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                        Shop Now
                    </button>
                </div>

                <style>{`
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `}</style>
            </section>
            <section
                className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden text-black"
                style={{
                    backgroundImage: "url('./banner3.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundBlendMode: "overlay"
                }}
            >
                <div className="relative max-w-3xl px-4">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                        Your Favorite Products in One Place

                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-black font-semibold">
                        Discover great deals, quality items, and effortless shopping.
                    </p>

                    <button className="mt-8 px-8 py-3 bg-white font-semibold rounded-xl shadow-lg hover:bg-blue-100 transition animate-[fadeIn_2s_ease-out]">
                        Shop Now
                    </button>
                </div>

                <style>{`
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `}</style>
            </section>
        </Carousel>


    );
}

