import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    isAgency: "yes"
  });

  const handleCreateAccount = () => {
    navigate("/account-settings"); // Redirect to Account Settings page
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black">Create Your PopX Account</h2>
      
      <label className="block text-purple-600">Full Name*</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full mt-1 p-2 border rounded"
      />
      
      <label className="block text-purple-600 mt-2">Phone Number*</label>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full mt-1 p-2 border rounded"
      />
      
      <label className="block text-purple-600 mt-2">Email Address*</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full mt-1 p-2 border rounded"
      />
      
      <label className="block text-purple-600 mt-2">Password*</label>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="w-full mt-1 p-2 border rounded"
      />
      
      <label className="block text-purple-600 mt-2">Company Name</label>
      <input
        type="text"
        value={formData.companyName}
        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        className="w-full mt-1 p-2 border rounded"
      />
      
      <label className="block text-purple-600 mt-2">Are you an Agency?*</label>
      <div className="flex items-center gap-4 mt-1">
        <label>
          <input
            type="radio"
            name="agency"
            value="yes"
            checked={formData.isAgency === "yes"}
            onChange={() => setFormData({ ...formData, isAgency: "yes" })}
          /> Yes
        </label>
        <label>
          <input
            type="radio"
            name="agency"
            value="no"
            checked={formData.isAgency === "no"}
            onChange={() => setFormData({ ...formData, isAgency: "no" })}
          /> No
        </label>
      </div>
      
      <button onClick={handleCreateAccount} className="w-full mt-4 bg-purple-600 text-white p-2 rounded">
        Create Account
      </button>
    </div>
  );
};

export default SignUp;