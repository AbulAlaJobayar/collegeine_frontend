
import data from "../../../../public/data.json"
const HeaderData = (inputText) => {
    
   
    console.log(inputText.inputText)
    const filteredData = data.filter((el) => {
        if (inputText.inputText === '') {
            return el;
        } else {
            return el.text?.toLowerCase().includes(inputText.inputText)
        }
    })
    return (
        <div>
             <ul>
            {filteredData.slice(0, 3).map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
        </div>
    );
};

export default HeaderData;