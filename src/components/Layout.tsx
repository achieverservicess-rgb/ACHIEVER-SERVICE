import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f6f9] font-sans">
      <header className="bg-[#002f6c] text-white p-5 text-center">
        <h1 className="text-3xl font-bold mb-2">ACHIEVER LOAN SERVICE</h1>
        <p className="text-sm opacity-90">Fast & Trusted Loan Solutions</p>
      </header>

      <nav className="bg-[#0a4abf] p-3 text-center">
        <div className="flex justify-center gap-6">
          <Link to="/" className="text-white font-bold hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/apply" className="text-white font-bold hover:text-blue-200 transition-colors">Apply Loan</Link>
          <Link to="/about" className="text-white font-bold hover:text-blue-200 transition-colors">About Us</Link>
          <Link to="/admin" className="text-white font-bold hover:text-blue-200 transition-colors">Admin</Link>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-[#002f6c] text-white text-center p-4 mt-auto">
        &copy; {new Date().getFullYear()} ACHIEVER LOAN SERVICE
      </footer>
    </div>
  );
}
