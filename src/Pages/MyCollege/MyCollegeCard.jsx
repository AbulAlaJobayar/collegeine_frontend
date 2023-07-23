const MyCollegeCard = ({item}) => {
    console.log(item)
    const {img}=item
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full">
                <div>
                    <img src={img}  alt="" className="border-spacing-1 rounded-full w-60 h-60" />
                    <h1></h1>
                </div>
                <div>hello</div>
                <div>hello</div>
            </div>
        </div>
    );
};

export default MyCollegeCard;