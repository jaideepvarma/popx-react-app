import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add validation or API request here if needed
    navigate("/account-settings"); // Redirect to Account Settings page
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black">Sign in to your PopX account</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mt-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mt-2 p-2 border rounded"
      />
      
      <button onClick={handleLogin} className="w-full mt-4 bg-gray-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
};

export default SignIn;
