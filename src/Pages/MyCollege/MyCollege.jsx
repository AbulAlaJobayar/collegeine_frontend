import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Component/Container";
import MyCollegeCard from "./MyCollegeCard";

const MyCollege = () => {
    const [allclass, setAllClass] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAllClass(data));
    }, [user?.email]);
console.log(allclass)
    return (
        <div>
           <Container>
                <div>
                {allclass.slice(0,1).map((item) => (
            <MyCollegeCard key={item._id} item={item}></MyCollegeCard>
          ))}
                </div>
           </Container>
        </div>
    );
};

export default MyCollege;