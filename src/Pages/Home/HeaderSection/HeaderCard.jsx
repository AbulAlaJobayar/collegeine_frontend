import { Link } from "react-router-dom";

const HeaderCard = ({item}) => {
    const {image,_id,college_name,admission_date,event,sports,researchers}=item
    
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          {/* card body start */}

          <div className="college-card  rounded-lg overflow-hidden">
            <h2 className="college-name text-2xl font-bold mt-4 mb-2">
              {college_name}
            </h2>
            <div className="admission-dates">
              <p className="font-semibold">Admission Dates:</p>
              <ul className="list-disc pl-6">
                <li>Spring Semester: {admission_date[0].spring}</li>
                <li>Fall Semester: {admission_date[1].fall}</li>
              </ul>
            </div>
            <div className="events">
              <p className="font-semibold">Upcoming Events:</p>
              <ul className="list-disc pl-6">
                <li>Annual Cultural Fest - {event[0].annual}</li>
                <li>Science and Technology Expo - {event[1].science}</li>
              </ul>
            </div>
            <div className="research-history">
              <p className="font-semibold">Research History:</p>
              <p>
                {researchers}
              </p>
            </div>
            <div className="sports">
              <p className="font-semibold">Sports:</p>
              <p>
                {sports}
              </p>
            </div>
            <div className="bg-[#ff6900] text-white py-2 px-4 rounded-full inline-block mt-4">
            <Link to={`/viewdetails/${_id}`}>Details</Link>
             
            </div>
          </div>

          {/* card body end */}
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
