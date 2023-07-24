import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCollegeCard = ({ item }) => {
  
  const {
    img,
    name,
    email,
    college_name,
    college_img,
    admission_process,
    admission_date,
    rating,
    sports,
    researchers,
  } = item;
  const [btnDis, setBtnDis] = useState(false);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const star = parseInt(form.rating.value);

    const addInfo = {
      name: name,
      img: img,
      email: email,
      feedback: feedback,
      star: star,
    };
    fetch("https://collegeine-backend.vercel.app/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "feedback Successfully Done!",
          });
          form.reset();
          setBtnDis(true);
        }
      });
  };

  return (
    <div className="my-10">
      <div className="mt-10 mb-20 text-5xl font-semibold">
        <h1 className="text-center text-[#15295f]">
          Welcome To {college_name}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-auto w-full mt-10">
        {/* first-section */}
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={college_img}
            alt=""
            className="border-spacing-1 rounded-full w-60 h-60"
          />
          <div>
            <h1 className="text-2xl font-bold mt-4 mb-2 capitalize text-[#15295f]">
              {college_name}
            </h1>
          </div>
        </div>
        {/* 2nd section */}
        <div>
          <div className="college-card ml-4 rounded-lg overflow-hidden">
            <div className="admission-dates">
              <p className="font-semibold">Admission Dates:</p>
              <ul className="list-disc pl-6">
                <li>Spring Semester: {admission_date[0].spring}</li>
                <li>Fall Semester: {admission_date[1].fall}</li>
              </ul>
            </div>
            <div className="admission-Process">
              <p className="font-semibold">Admission Process:</p>
              <p className="list-disc pl-6">{admission_process}</p>
            </div>

            <div className="research-history">
              <p className="font-semibold">Research History:</p>
              <p>{researchers}</p>
            </div>
            <div className="sports">
              <p className="font-semibold">Sports:</p>
              <p>{sports}</p>
            </div>
          </div>
          <Rating style={{ maxWidth: 100 }} value={rating} />
        </div>

        {/* 3rd section */}
        <div>
          <h1 className="text-2xl font-bold mt-4 mb-2 capitalize">
            give A feedback
          </h1>
          <form onSubmit={handleAddClass} className="mt-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <input
                type="text"
                name="feedback"
                placeholder="type here....."
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control my-6 w-full ">
              <input
                type="submit"
                className="btn btn-block  btn-primary"
                value="Feedback"
                disabled={btnDis}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeCard;
