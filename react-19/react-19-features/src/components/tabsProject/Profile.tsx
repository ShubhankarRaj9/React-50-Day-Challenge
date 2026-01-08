import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://via.placeholder.com/100"
  );
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-20">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Channel logo */}
      <div className="flex items-center ml-4 mt-8">
        <img
          src={profileUrl}
          alt="Channel logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-10 mt-40 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-16">Shubhankar React Dev</h1>
          <p className="wt-2 ml-16">1M Views</p>
          <p className="wt-2 ml-16">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet non
            id assumenda dignissimos quaerat nulla culpa dolore nostrum, officia
            ad. Nam, facere libero? Excepturi cupiditate voluptas ratione, quam
            commodi repellendus.
          </p>
          <button className="ml-16 mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
