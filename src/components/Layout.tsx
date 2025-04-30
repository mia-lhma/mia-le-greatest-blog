
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, FileText, Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex flex-col items-center mb-8">
            <Link to="/" className="text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Mia Le</h1>
              <p className="text-gray-600 text-sm md:text-base">MIA - The Greatest</p>
            </Link>
          </div>
          <nav className="flex justify-center space-x-8">
            <NavLink to="/about" active={location.pathname === "/about"}>About</NavLink>
            <NavLink to="/" active={location.pathname === "/"}>Projects</NavLink>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4 md:px-6 animate-fade-in">
        {children}
      </main>
      
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Mia Le. All rights reserved.</p>
          <p className="mt-2">Contact: miale.lhma@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link 
      to={to} 
      className={`text-base font-medium pb-2 border-b-2 transition-colors ${
        active 
          ? "text-black border-black" 
          : "text-gray-500 border-transparent hover:text-black hover:border-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default Layout;
