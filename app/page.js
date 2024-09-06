import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen p-5">
      <div className="mt-12 flex gap-8 p-8">
        <div className="w-3/5">
          <h1 className="text-3xl font-bold text-slate-600 mb-4">NextAdmin <span className="text-cyan-600">dahsboard</span></h1>
          <p className="text-gray-500 mb-4">The NextJS powered admin dashboard, free and open source project</p>
          <Link href="#" className="bg-indigo-500 text-white py-2 px-5 rounded-[3px]">Explore</Link>
        </div>
        <div className="w-2/5">
          <p className="text-gray-500">The NextJS powered admin dashboard, free and open source project</p>
        </div>
      </div>
    </div>
  );
}
