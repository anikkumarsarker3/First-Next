export default function Hero() {
    return (
        <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse -top-10 -left-10"></div>
                <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-2xl animate-bounce bottom-0 right-0"></div>
            </div>


            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-[slideDown_1s_ease-out]">
                    Discover Amazing Products
                </h1>


                <p className="mt-4 text-lg md:text-xl text-white/90 animate-[fadeIn_1.6s_ease-out]">
                    High‑quality items, best deals, and a seamless shopping experience.
                </p>


                <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-50 transition animate-[fadeIn_2s_ease-out]">
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
    );
}

