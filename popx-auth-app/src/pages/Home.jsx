import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-full p-6 text-left">
      <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button
        className="bg-purple-600 text-white py-3 rounded-lg mt-4 w-full"
        onClick={() => navigate("/signup")}
      >
        Create Account
      </button>
      <button
        className="bg-purple-300 text-purple-800 py-3 rounded-lg mt-2 w-full"
        onClick={() => navigate("/signin")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;
