import { useLoaderData } from 'react-router-dom';
import Container from '../../../Component/Container';

const Details = () => {
    const datas = useLoaderData();
    const {image,college_name,admission_date,event,sports,researchers,admission_process}=datas

    return (
        
    <div>
        <Container>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="w-1/2 rounded-lg shadow-2xl" />
    <div>

 {/* body */}
 <div className="college-card ml-4 rounded-lg overflow-hidden">
          
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
            <div className="admission-Process">
              <p className="font-semibold">Admission Process:</p>
                <p className="list-disc pl-6">{admission_process}</p>
              
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


    </div>
  </div>
</div>
</div>
</Container>











           
            {/* <div className="bg-[#ff6900] text-white py-2 px-4 rounded-full inline-block mt-4">
             
            </div> */}
          </div>
        
    );
};

export default Details;