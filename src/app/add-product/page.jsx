"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';

const page = () => {
    const { user } = useAuth();
    if (!user) {
        return
    }
    return (<>


        <form className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="text-2xl font-bold col-span-2">Create Product</h2>


            <div>
                <label className="block font-semibold mb-1">Title</label>
                <input type="text" name="title" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Price Min</label>
                <input type="number" name="price_min" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Price Max</label>
                <input type="number" name="price_max" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Email</label>
                <input type="email" name="email" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Category</label>
                <input type="text" name="category" className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="block font-semibold mb-1">Created At</label>
                <input type="datetime-local" name="created_at" className="w-full border p-2 rounded" />
            </div>


            <div className="col-span-2">
                <label className="block font-semibold mb-1">Image URL</label>
                <input type="text" name="image" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Status</label>
                <select name="status" className="w-full border p-2 rounded">
                    <option value="pending">Pending</option>
                    <option value="sold">Sold</option>
                </select>
            </div>


            <div>
                <label className="block font-semibold mb-1">Location</label>
                <input type="text" name="location" className="w-full border p-2 rounded" />
            </div>


            <div className="col-span-2">
                <label className="block font-semibold mb-1">Seller Image URL</label>
                <input type="text" name="seller_image" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Seller Name</label>
                <input type="text" name="seller_name" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Condition</label>
                <input type="text" name="condition" className="w-full border p-2 rounded" />
            </div>


            <div>
                <label className="block font-semibold mb-1">Usage</label>
                <input type="text" name="usage" className="w-full border p-2 rounded" />
            </div>


            <div className="col-span-2">
                <label className="block font-semibold mb-1">Description</label>
                <textarea name="description" rows="4" className="w-full border p-2 rounded"></textarea>
            </div>


            <div className="col-span-2">
                <label className="block font-semibold mb-1">Seller Contact</label>
                <input type="text" name="seller_contact" className="w-full border p-2 rounded" />
            </div>


            <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
                Submit
            </button>
        </form >
    </>
    );
};

export default page;