import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const datas= useLoaderData();
    
    const {name,email,college_name,address,_id} = datas;


const handleEdit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const university = form.university.value;
    const address=form.address.value;
    
    const updateInfo = {
        name: name, 
        email:email,
        college_name:university,
        address:address,
       };
       fetch(`https://collegeine-backend.vercel.app/updatedata/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Edited Success !",
            });
         }
        });

}



    return (
        <div>
            <div className="w-5/6 mx-auto my-auto ">
      <h1 className="text-5xl font-bold text-center mt-10">Edit Your Info </h1>
      <form onSubmit={handleEdit} className="mt-10">
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
                defaultValue={name}
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
                defaultValue={email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            
            <div className="form-control">
              <label className="label">
                <span className="label-text">university</span>
              </label>
              <input
                type="text"
                name="university"
                defaultValue={college_name}
                placeholder="University Name..."
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
                defaultValue={address}
                placeholder="Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control my-6 w-full ">
            <input
              type="submit"
              className="btn btn-block  "
              value="Save"
              
            />
          </div>
        </div>
      </form>
    </div>
        </div>
    );
};

export default EditProfile;