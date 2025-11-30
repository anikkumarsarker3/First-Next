"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = ({ furniture }) => {
    if (!furniture) return null;

    const {
        _id,
        name,
        category,
        price,
        material,
        dimensions,
        stock,
        image,
        description,
        email,
    } = furniture;

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            name: e.target.name.value,
            category: e.target.category.value,
            price: e.target.price.value,
            material: e.target.material.value,
            dimensions: e.target.dimensions.value,
            stock: e.target.stock.value === "In Stock" ? true : false,
            image: e.target.image.value,
            description: e.target.description.value,
            email: e.target.email.value,
        };

        console.log("Updated:", updatedData);

        const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        const result = await res.json();

        if (res.ok) {
            toast.success("Product updated successfully!");
        } else {
            toast.error("Failed to update product!");
        }
    };

    return (
        <div>
            <form
                onSubmit={handleFormSubmit}
                className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <h2 className="text-3xl font-bold col-span-2 text-gray-800">
                    Update Furniture Product
                </h2>

                <div>
                    <label className="block font-semibold mb-1">Product Name</label>
                    <input type="text" name="name" defaultValue={name} className="w-full border p-3 rounded-lg" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Category</label>
                    <input type="text" name="category" defaultValue={category} className="w-full border p-3 rounded-lg" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Price ($)</label>
                    <input type="number" name="price" defaultValue={price} className="w-full border p-3 rounded-lg" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Material</label>
                    <input type="text" name="material" defaultValue={material} className="w-full border p-3 rounded-lg" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Dimensions</label>
                    <input
                        type="text"
                        name="dimensions"
                        defaultValue={dimensions}
                        placeholder="e.g. 40 x 22 x 18 in"
                        className="w-full border p-3 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Stock Status</label>
                    <select
                        name="stock"
                        defaultValue={stock ? "In Stock" : "Out of Stock"}
                        className="w-full border p-3 rounded-lg"
                    >
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>

                <div className="col-span-2">
                    <label className="block font-semibold mb-1">Image URL</label>
                    <input type="text" name="image" defaultValue={image} className="w-full border p-3 rounded-lg" />
                </div>

                <div className="col-span-2">
                    <label className="block font-semibold mb-1">Seller Email</label>
                    <input type="email" readOnly name="email" defaultValue={email} className="w-full border p-3 rounded-lg" />
                </div>

                <div className="col-span-2">
                    <label className="block font-semibold mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        defaultValue={description}
                        className="w-full border p-3 rounded-lg"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="col-span-2 bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Update Product
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default Update;
