"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const { user } = useAuth();
    if (!user) {
        return
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const material = e.target.material.value;
        const dimensions = e.target.dimensions.value;
        const stock = true;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const email = e.target.email.value;
        const data = {
            name, category, price, material, dimensions, stock, image, description, email
        }
        // console.log(name, category, price, material, dimensions, stock, image, description, email)
        const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const post = await res.json();
        if (res.ok) {
            toast.success("Product added successfully!");

            // Optional: clear form
            e.target.reset();
        } else {
            toast.error("Failed to add product!");
        }

    }
    return (<>
        <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6">

            <h2 className="text-3xl font-bold col-span-2 text-gray-800">Create Furniture Product</h2>

            {/* Product Name */}
            <div>
                <label className="block font-semibold mb-1">Product Name</label>
                <input type="text" name="name" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Category */}
            <div>
                <label className="block font-semibold mb-1">Category</label>
                <input type="text" name="category" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Price */}
            <div>
                <label className="block font-semibold mb-1">Price ($)</label>
                <input type="number" name="price" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Material */}
            <div>
                <label className="block font-semibold mb-1">Material</label>
                <input type="text" name="material" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Dimensions */}
            <div>
                <label className="block font-semibold mb-1">Dimensions</label>
                <input type="text" name="dimensions" placeholder="e.g. 40 x 22 x 18 in" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Stock */}
            <div>
                <label className="block font-semibold mb-1">Stock Status</label>
                <select name="stock" className="w-full border p-3 rounded-lg">
                    <option value="In Stock">In Stock</option>
                    {/* <option value="Out of Stock">Out of Stock</option> */}
                </select>
            </div>

            {/* Image */}
            <div className="col-span-2">
                <label className="block font-semibold mb-1">Image URL</label>
                <input type="text" name="image" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Email */}
            <div className="col-span-2">
                <label className="block font-semibold mb-1">Seller Email</label>
                <input type="email" value={user?.email} readOnly name="email" className="w-full border p-3 rounded-lg" />
            </div>

            {/* Description */}
            <div className="col-span-2">
                <label className="block font-semibold mb-1">Description</label>
                <textarea name="description" rows="4" className="w-full border p-3 rounded-lg"></textarea>
            </div>

            <button type='submit' className="col-span-2 bg-blue-600 text-white text-lg py-3 rounded-lg hover:bg-blue-700 transition-all">
                Submit Product
            </button>
        </form>
        <ToastContainer />
    </>
    );
};

export default page;