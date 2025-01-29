import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-6 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Thogiti Prem </Link>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/projects" className="hover:text-gray-600">Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
