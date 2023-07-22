import { useState } from "react";
import Container from "../../../Component/Container";
import HeaderData from "./HeaderData";

const HeaderSection = () => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
 
  return (
    <Container >
      <div className="z-50 relative ">
        <div className="form-control -mt-7 ">
          <input
            type="text"
            placeholder="Search"
            onChange={inputHandler}
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <HeaderData inputText={inputText}></HeaderData>
      </div>
    </Container>
  );
};

export default HeaderSection;
