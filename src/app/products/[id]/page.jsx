"use client"
import React, { use, useEffect, useState } from 'react';

export default function Page({ props }) {
    const { id } = use(props.params);
    const [post, setFurnitures] = useState([])
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture/${id}`);
            const post = await res.json();
            setFurnitures(post);
        };

        loadData();
    }, [id]);

    const { name, category, price, material, dimensions, stock, image, description } = post;
    return (
        <section className="px-6 py-14 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-8 md:flex gap-10">

                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        {name}
                    </h1>

                    <p className="text-lg mt-2 text-gray-600">
                        Category: <span className="font-semibold">{category}</span>
                    </p>

                    <p className="text-xl mt-3 font-semibold text-gray-800">
                        Price: <span className="text-green-600">${price}</span>
                    </p>

                    <p className="text-gray-700 mt-2">
                        Material: <span className="font-semibold">{material}</span>
                    </p>

                    <p className="text-gray-700 mt-1">
                        Dimensions: <span className="font-medium">{dimensions}</span>
                    </p>

                    {/* Stock Badge */}
                    <span
                        className={`inline-block px-4 py-1 text-sm font-semibold rounded-full mt-4
                        ${stock
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {stock ? "In Stock" : "Out Stock"}
                    </span>

                    <div className="mt-6">
                        <h2 className="text-xl font-bold">Description</h2>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                            {post.description}
                        </p>
                    </div>

                    <button
                        className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-xl shadow-lg font-semibold"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    );
};






