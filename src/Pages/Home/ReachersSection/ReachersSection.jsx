import Container from "../../../Component/Container";

const ReachersSection = () => {
  return (
    <div className="mt-14 md:mt-28">
      <Container>
        <div>
          <h1 className="text-4xl font-semibold text-neutral-700">
            Research paper!
          </h1>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* card 1 */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/symPHgD/college-after-military-m.jpg"
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <a href="#" className="hover:underline text-[#15295f]">
                The Impact of Artificial Intelligence on Job Market Dynamics
                </a>
              </h2>
              <p className="hover:underline text-[#15295f]"><span className="text-base font-semibold hover:underline">Brianna Flavin</span> | 05.23.2023</p>
    
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/RNMdgRb/college-life-test-anxiety-tips-blog-s.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">
                <a href="#" className="hover:underline text-[#15295f]">
                Exploring the Relationship Between Social Media Usage and Mental Health in Young Adults
                </a>
              </h2>
              <p className="hover:underline text-[#15295f]"><span className="text-base font-semibold hover:underline">Jordan Jantz</span> | 08.03.2022</p>
              
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/fkPGXLx/money-management-tips-for-college-students-m.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">
                <a href="#" className="hover:underline text-[#15295f]">
                Assessing the Environmental Effects of Urbanization in Developing Countries
                </a>
              </h2>
              <p className="hover:underline text-[#15295f]"><span className="text-base font-semibold hover:underline">Kirsten Slyter</span> | 05.30.2022</p>
              
            </div>
          </div>
          {/* card 4 */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/G25Fm98/things-first-generation-college-students-should-knowe0384978-789a-42cc-a932-bafa560bd333.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
            <h2 className="card-title">
                <a href="#" className="hover:underline text-[#15295f]">
                A Comparative Study of Machine Learning Algorithms for Image Recognition
                </a>
              </h2>
              <p className="hover:underline text-[#15295f]"><span className="text-base font-semibold hover:underline">Carrie Mesrobian</span> | 02.28.2022</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReachersSection;
