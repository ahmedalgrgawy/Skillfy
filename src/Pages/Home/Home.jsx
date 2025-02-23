import Card from "../../Components/Cards/Card";
import UpgradePlanCard from "../../Components/Cards/UpgradePlanCard";
import UserCard from "../../Components/Cards/UserCard";
import Navbar from "../../Components/Navbar/Navbar";
import { homePageImgs } from "../../assets/data";


const Home = () => {

  return (
    <div>

      <Navbar />

      <div className="flex items-start gap-4 sm:gap-2 py-10">
        <div className="flex-[1] mx-9 sm:mx-4">

          <UserCard />

          <UpgradePlanCard />

        </div>

        {/* Start cards section  */}
        <div className="flex-[3]">
          {/* start keep going  */}
          <div className="mb-7">
            <h1 className="font-semibold text-xl mb-7 ">Keep Going</h1>

            <div className="grid  gap-[25px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
              {/* start card  */}
              <Card
                img={homePageImgs.card1}
                type="Computer Science"
                time="3 Days , 6 h"
                nameCourse="Flutter"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={50}
              />
              <Card
                img={homePageImgs.card2}
                type="Computer Science"
                time="3 Days , 5 h"
                nameCourse="Web"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={99}
              />
              <Card
                img={homePageImgs.card3}
                type="Graphic Design"
                time="3 Days , 6 h"
                nameCourse="Photoshop"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                percentage={70}
              />

              {/* end card  */}
            </div>
          </div>
          {/* End keep going  */}
          {/* start recommended */}
          <div className="mb-7">
            <h1 className="font-semibold text-xl mb-7 ">Recommended Courses</h1>

            <div className="grid  gap-[25px] sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  ">
              {/* start card  */}
              <Card
                img={homePageImgs.card4}
                type="Computer Science"
                time="3 Days , 6 h"
                nameCourse="Figma"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                cost="500$"
                rate={3.5}
              />
              <Card
                img={homePageImgs.card5}
                type="Computer Science"
                time="3 Days , 5 h"
                nameCourse="Data Analysis"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                cost="FREE"
                rate={3.5}
              />
              <Card
                img={homePageImgs.card6}
                type="Back End"
                time="3 Days , 6 h"
                nameCourse="Php"
                desc="is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy"
                rate={3.5}
                cost="FREE"
              />

              {/* end card  */}
            </div>
          </div>
          {/* end recommended */}
        </div>
        {/* End cards section  */}
      </div>
    </div>
  );
};

export default Home;
