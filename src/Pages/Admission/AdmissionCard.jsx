import { Link } from "react-router-dom";


const AdmissionCard = ({item,i}) => {
    const {image,college_name,_id}=item
    return (
        <>
            <tr>
        <th>{i + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <h1 className="font-bold">{college_name}</h1>
        </td>
        <td>
         
          <Link to={`/admit/${_id}`}>
          <button className="btn btn-primary bg-[#ff6900] border-none text-white hover:bg-[#c65300]">Admit</button>
          </Link>
        </td>
      </tr> 
        </>
    );
};

export default AdmissionCard;