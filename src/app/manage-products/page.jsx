"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';

const page = () => {
    const { user } = useAuth();
    if (!user) {
        return
    }
    return (
        <div className="my-10 ">
            <h3 className='text-3xl text-center font-bold mb-3'>Products Manage</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>1000$</td>
                            <td>
                                <button className="btn">Update</button>
                            </td>
                            <td>
                                <button className="btn">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;