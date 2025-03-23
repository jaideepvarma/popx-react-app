import profilePic from "../assets/profile.png"; // Ensure image is inside /assets/

const AccountSettings = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white p-4">
      {/* Title - Aligned at the top */}
      <h1 className="text-sm font-semibold text-gray-700 mb-4">Account Settings</h1>

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        {/* Profile Image */}
        <img src={profilePic} alt="Profile" className="w-14 h-14 rounded-full" />

        {/* User Info */}
        <div>
          <h2 className="font-bold text-black text-sm">Marry Doe</h2>
          <p className="text-gray-500 text-xs">Marry@Gmail.com</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-xs text-gray-700 leading-tight">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;
