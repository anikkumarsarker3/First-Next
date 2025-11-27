import React from 'react';

function Testimonials() {
    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {Array(3).fill(0).map((_, i) => (
                    <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
                        <p className="text-gray-600 mb-4">“This platform is amazing!”</p>
                        <div className="font-semibold">User {i + 1}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;