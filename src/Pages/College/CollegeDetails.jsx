import { useLoaderData } from "react-router-dom";
import Container from "../../Component/Container";

const CollegeDetails = () => {
  const datas = useLoaderData();
  const {
    college_name,
    admission_date,
    researchers,
    admission_process,
    sports_facilities,
    university_events,
  } = datas;
  

  return (
    <div>
      <Container>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
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
                  <h1 className="font-semibold">University Events:</h1>
                  <p>{university_events}</p>
                  
                </div>
                <div className="research-history">
                  <p className="font-semibold">Research History:</p>
                  <p>{researchers}</p>
                </div>
                <div className="sports">
                  <h1 className="font-semibold">Sports Facilities:</h1>
                  <p>{sports_facilities}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollegeDetails;
