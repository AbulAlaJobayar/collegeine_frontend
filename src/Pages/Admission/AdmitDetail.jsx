import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const AdmitDetail = () => {
  const { user } = useContext(AuthContext);
  const datas = useLoaderData();
  const [btnDis,setBtnDis]=useState(false)
    const {
      image,
      college_name,
      admission_date,
      sports,
      researchers,
      admission_process,
      gllary,
      rating,
      sports_facilities,
      university_events

    } = datas;

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const phone=form.phone.value;
    const date=form.date.value;
    const photo = form.photo.value;
    const address=form.address.value;

    const addInfo = {
        name: name,
        subject: subject,
        email:email,
        enroll_email:user?.email,
        phone:phone,
        date:date,
        photo:photo,
        img:user?.photoURL,
        address:address,
        college_name:college_name,
        college_img:image,
        admission_date: admission_date,
        sports:sports,
        researchers:researchers,
        admission_process:admission_process,
        gllary:gllary,
        rating:rating,
      sports_facilities:sports_facilities,
      university_events:university_events,
      review: "pending",
    };

    fetch("https://collegeine-backend.vercel.app/postdata", {
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
            text: "Added Information Successfully !",
          });
          form.reset();
          setBtnDis(true)
        }
      });
  };

  return (
    <div className="w-5/6 mx-auto my-auto ">
      <h1 className="text-5xl font-bold text-center mt-10">Welcome To {college_name}</h1>
      <form onSubmit={handleAddClass} className="mt-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input input-bordered"
              />
            </div>

           
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+008"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date of birth</span>
              </label>
              <input
                type="text"
                name="date"
                placeholder="Date of birth"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo-URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control my-6 w-full ">
            <input
              type="submit"
              className="btn btn-block  btn-primary"
              value="Add product"
              disabled={!user || btnDis}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmitDetail;
