import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import Swal from 'sweetalert2';

const MyCollegeCard = ({ item }) => {
  console.log(item);
  const { img, name, email, phone, address, college_name,subject,date,rating,sports,researchers } = item;
  const [btnDis,setBtnDis]=useState(false)
  
  const handleAddClass=(event)=>{
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;
    const star = parseInt(form.rating.value);
    

    const addInfo ={
        name: name,
        img: img,
        email:email,
        feedback:feedback,
        star:star,
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
            setBtnDis(true)
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
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full mt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src={img}
            alt=""
            className="border-spacing-1 rounded-full w-60 h-60"
          />
          <div>
            <h1 className="text-2xl font-bold mt-4 mb-2 capitalize text-[#15295f]">
              Name: {name}
            </h1>
            <h2 className="font-semibold text-[#15295f]">
              Email: {email}
            </h2>
            <h2 className="font-semibold capitalize text-[#15295f]">
              Phone: {phone}
            </h2>
            <h2 className="font-semibold capitalize text-[#15295f]">
              Address: {address}
            </h2>
          </div>
        </div>
        {/* 2nd section */}
        <div>
          <div className="college-card  rounded-lg overflow-hidden">
            <h2 className="college-name text-2xl font-bold mt-4 mb-2">
              {college_name}
            </h2>
            <div className="admission-dates">
              <p className="font-semibold">Subject: {subject}</p>
              
            </div>
            <div className="events">
              <p className="font-semibold">Date Of Birth : {date}</p>
              
            </div>
            <div className="research-history">
              <p className="font-semibold">Research History:</p>
              <p>{researchers}</p>
            </div>
            <div className="sports">
              <p className="font-semibold">Sports:</p>
              <p>{sports}</p>
            </div>
            <Rating style={{ maxWidth: 100 }} value={rating} />
            
          </div>
        </div>
        {/* 3rd section */}
        <div>
            <h1 className='text-2xl font-bold mt-4 mb-2 capitalize'>
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
