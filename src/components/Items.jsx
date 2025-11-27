export default function Items() {
    return (
        <section className="py-16 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
                        <div className="h-40 bg-gray-200 rounded mb-4"></div>
                        <h3 className="text-lg font-semibold">Item {i + 1}</h3>
                        <p className="text-gray-600 text-sm">Item short description</p>
                    </div>
                ))}
            </div>
        </section>
    );
}