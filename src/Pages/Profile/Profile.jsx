import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Component/Container";
import ProfileCard from "./ProfileCard";

const Profile = () => {
    const [allclass, setAllClass] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
      fetch(`https://collegeine-backend.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setAllClass(data));
    }, [user?.email]);

    return (
        <div className="my-20">
            <Container>
            <div>
            {allclass.slice(0,1).map((item) => (
            <ProfileCard key={item._id} item={item}></ProfileCard>
          ))}
            </div>
            </Container>
        </div>
        
    );
};

export default Profile;