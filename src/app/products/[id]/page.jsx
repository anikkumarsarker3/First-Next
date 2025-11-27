"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

const Page = ({ params }) => {
    const { id } = params;
    const { user, loading } = useAuth();

    if (loading) return <p className="text-center py-10">Loading...</p>;

    if (!user) {
        return (
            <p className="text-center py-10 text-red-500 font-semibold">
                You must be logged in to view this page.
            </p>
        );
    }

    return (
        <div className="bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News! ID: {id}</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Page;
