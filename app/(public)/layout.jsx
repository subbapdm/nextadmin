import Navbar from "@/components/navbar/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
