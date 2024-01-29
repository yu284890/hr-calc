
export default function Header() {
  return (
<header className="bg-white shadow">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="text-xl font-bold text-gray-800">Your Logo</a>
        <nav className="ml-6 space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
      </div>
      <div className="flex items-center">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 8h20M0 14h20M0 2h20"></path></svg>
          <span>Menu</span>
        </button>
      </div>
    </div>
  </header>
)}