import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen p-5">
      <div className="mt-12 flex xl:justify-between gap-8 p-8">
        <div className="w-3/5 xl:w-2/5 flex items-center">
          <div className="pr-5">
            <h1 className="text-4xl font-bold text-slate-600 mb-4">NextAdmin <span className="text-cyan-600">dahsboard,</span> A beautiful multi purpose admin panel.</h1>
            <p className="text-gray-500 mb-4">The NextJS powered admin dashboard, free and open source project. You can customize and use in your projects. Responsive and intuative user interfaces</p>
            <Link href="/" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-8 rounded-md inline-block mt-3">Explore</Link>
          </div>
        </div>
        <div className="w-2/5 bg-white rounded-3xl flex items-center p-5">
          <Image src="/images/hero-bg-01.png" style={{width: '100%', height: 'auto'}} width={750} height={500} alt="Next admin dashboard" />
        </div>
      </div>
    </div>
  );
}
