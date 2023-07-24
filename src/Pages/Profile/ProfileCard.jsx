import { Link } from "react-router-dom";

const ProfileCard = ({ item }) => {
  const {
    img,
    name,
    email,
    phone,
    address,
    college_name,
    subject,
    date,
    _id
  } = item;
  return (
    <div>
      <div className="max-w-md mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <h className="text-2xl mt-4 md:text-4xl font-semibold text-center mx-auto flex justify-center items-center">
          Welcome Back{" "}
          <span className="text-[#ff6900] ml-2 capitalize"> {name}</span>
        </h>

        <div className="flex flex-row gap-8 justify-center items-center">
          <img
            className=" object-center  rounded-full w-28 h-28"
            src={img}
            alt="Profile"
            //   width={200}
            //   height={200}
          />
          <div className="py-4 px-6 ">
            <h1 className="text-2xl font-bold capitalize text-gray-800">
              {name}
            </h1>
            <p className="text-sm text-gray-600">Email: {email}</p>
            <p className="text-sm text-gray-600">Subject: {subject}</p>
            <p className="text-sm text-gray-600">Phone: {phone}</p>
            <p className="text-sm text-gray-600">University: {college_name}</p>
            <p className="text-sm text-gray-600">Date of Birth: {date}</p>
            <p className="text-sm text-gray-600">Location: {address}</p>
          </div>
        </div>
      <button className="btn w-full">
      <Link to={`/editprofile/${_id}`}>Edit Profile</Link>
      </button>
      </div>
    </div>
  );
};

export default ProfileCard;
