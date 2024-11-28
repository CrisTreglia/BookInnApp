import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import logo from '../../src/assets/logoBookInn.png';

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
<div className="bg-gray-800 py-6">
  <div className="container mx-auto flex justify-between items-center">
    {/* Logo Section */}
    <div className="flex-shrink-0">
      <Link to="/">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-20 w-auto" 
        />
      </Link>
    </div>

    {/* Navigation Links */}
    <div className="flex space-x-4">
      {isLoggedIn ? (
        <>
          <Link
            className="text-m text-white px-2 py-1 font-bold hover:bg-blue-600 rounded"
            to="/my-bookings"
          >
            My Bookings
          </Link>
          <Link
            className="text-m text-white px-2 py-1 font-bold hover:bg-blue-600 rounded"
            to="/my-hotels"
          >
            My Hotels
          </Link>
          <SignOutButton />
        </>
      ) : (
        <Link
          to="/sign-in"
          className="text-m bg-white text-blue-600 px-2 py-1 font-bold hover:bg-gray-100 rounded"
        >
          Sign In
        </Link>
      )}
    </div>
  </div>
</div>

  );
};

export default Header;