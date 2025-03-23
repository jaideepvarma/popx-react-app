import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button className="bg-purple-600 text-white p-2 rounded mt-4 w-60" onClick={() => navigate("/signup")}>
        Create Account
      </button>
      <button className="bg-purple-300 text-white p-2 rounded mt-2 w-60" onClick={() => navigate("/signin")}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default WelcomeScreen;
