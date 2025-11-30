"use client"

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    const [furnitures, setFurnitures] = useState([])
    const { user } = useAuth();
    const [call, setCall] = useState(true)
    useEffect(() => {
        const loadData = async () => {
            if (!user?.email) return;
            const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture?email=${user.email}`);
            const furnitures = await res.json();
            setFurnitures(furnitures);
        };

        loadData();
    }, [user, call]);


    if (!user) {
        return
    }

    const handleDelete = async (id) => {
        // console.log(id)
        const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture/${id}`, { method: "DELETE" })
        if (res.ok) {
            toast.success("Product Delete successfully!");
            setCall(!call)
        } else {
            toast.error("Failed to Delete product!");
        }


    }
    return (
        <div className="my-10 ">
            <h3 className='text-3xl text-center font-bold mb-3'>Products Manage</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            furnitures.map((furniture, i) => (<tr key={furniture._id}>
                                <th>{i + 1}</th>
                                <td>{furniture.name}</td>
                                <td>{furniture.price}$</td>
                                <td>
                                    <Link href={`/manage-products/${furniture._id}`} className="btn">Update</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(furniture._id)} className="btn">Delete</button>
                                </td>
                            </tr>))
                        }


                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default page;