import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";
import Container from "../../Component/Container";

const College = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/university")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(datas);
  return (
    <div>
      <div className=" bg-neutral-100 w-full h-60 flex justify-center items-center">
        <h1 className="text-5xl text-center font-semibold text-[#15295f]">Colleges List</h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10">
          {datas.map((item) => (
            <CollegeCard key={item._id} item={item}></CollegeCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default College;
