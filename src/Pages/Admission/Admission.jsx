import { useEffect, useState } from "react";
import Container from "../../Component/Container";
import AdmissionCard from "./AdmissionCard";

const Admission = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/university")
        .then((res) => res.json())
        .then((data) => setDatas(data));
    }, []);
    console.log(datas);


  return (
    <div>
      <Container>
        <div className="overflow-x-auto my-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>University Image</th>
                <th>University Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((item,i) => (
            <AdmissionCard key={item._id} item={item} i={i}></AdmissionCard>
          ))}

            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Admission;
