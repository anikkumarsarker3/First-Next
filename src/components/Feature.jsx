export default function Features() {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
                        <p className="text-gray-600">Short description of the feature and benefits.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}