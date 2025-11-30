"use client";

import Update from "@/components/Update";
import { use, useEffect, useState } from "react";

export default function Page(props) {
    const { id } = use(props.params);

    const [furniture, setFurniture] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            const res = await fetch(`https://my-first-next-server-one.vercel.app/furniture/${id}`);
            const data = await res.json();
            setFurniture(data);
            setLoading(false);
        }
        loadData();
    }, [id]);

    if (loading) {
        return <p className="text-center py-8 text-lg">Loading...</p>;
    }

    return (
        <div className="my-10">
            <Update furniture={furniture} />
        </div>
    );
}
