
import { useEffect, useState } from "react";

import HeaderCard from "./HeaderCard";
const HeaderData = (inputText) => {
    
   const [datas,setDatas]=useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/university')
    .then(res=>res.json())
    .then(data => setDatas(data))
   },[])
   console.log(datas)
   
    const filteredData = datas.filter((el) => {
        if (inputText.inputText === '') {
            return el;
        } else {
            return el.college_name?.toLowerCase().includes(inputText.inputText)
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-7 mt-20">
            {filteredData.slice(0, 3).map((item) =><HeaderCard key={item._id} item={item}></HeaderCard> )}
        </div>
    );
};

export default HeaderData;