import Link from 'next/link';
const page = async () => {
    const res = await fetch("https://my-first-next-server-one.vercel.app/furniture");
    const posts = await res.json();
    return (
        <section className="py-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">All Items</h2>
            <div className=" mx-auto grid md:grid-cols-3 gap-5 px-3">
                {posts.map((post) => (
                    <Link href={`/products/${post._id}`} key={post._id} className=" bg-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition hover:scale-105">
                        <div className="h-60 bg-gray-200 rounded mb-4">
                            <img src={post.image} alt="" className="overflow-hidden bg-cover h-full w-full rounded-lg" />
                        </div>
                        <h3 className="text-lg font-semibold">{post.name}</h3>
                        <p className="text-gray-600 text-sm">{post.description}</p>
                        {post.stock && <span className="text-gray-600 text-sm bg-amber-400 rounded-2xl p-1 px-2 my-5">Stock</span>}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default page;