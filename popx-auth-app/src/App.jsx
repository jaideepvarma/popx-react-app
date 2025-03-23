import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AccountSettings from "./pages/AccountSettings";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Navigation Component (Fixed at Bottom)
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pages = ["/", "/signin", "/signup", "/account-settings"];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="w-full p-4 flex items-center justify-center gap-4 bg-white rounded-b-2xl">
      {/* Home Button */}
      <button onClick={() => navigate("/")} className="text-gray-500 hover:text-gray-900">
        <FaHome size={24} />
      </button>

      {/* Back Button (Loops to Last Page) */}
      <button
        onClick={() => navigate(pages[(currentIndex - 1 + pages.length) % pages.length])}
        className="text-gray-500 hover:text-gray-900"
      >
        <IoIosArrowBack size={24} />
      </button>

      {/* Page Indicator */}
      <span className="text-gray-700 font-semibold">
        {currentIndex + 1} of {pages.length}
      </span>

      {/* Next Button (Loops to First Page on Last Page) */}
      <button
        onClick={() => {
          if (currentIndex === pages.length - 1) {
            navigate(pages[0]); // If on last page, go to first page
          } else {
            navigate(pages[currentIndex + 1]); // Otherwise, move to next page
          }
        }}
        className="text-gray-500 hover:text-gray-900"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="flex items-center justify-center h-screen bg-white-100">
        {/* White Card Container */}
        <div className="bg-white shadow-xl rounded-2xl w-[320px] h-[600px] flex flex-col justify-between">
          {/* Page Content (Centered) */}
          <div className="flex-1 flex items-center justify-center px-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </div>

          {/* Fixed Navigation Bar (Inside the White Card) */}
          <Navigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
