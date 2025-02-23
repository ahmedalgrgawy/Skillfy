import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactStars from "react-rating-stars-component";

const Card = ({ img, type, time, nameCourse, desc, percentage, cost, rate }) => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className=" relative py-3 px-2 rounded-xl shadow-cardShadow max-w-[300px]">
      <img
        src={img}
        alt={`${img}`}
        className="w-full "
      />
      <div className="text-[#33333] space-x-3 text-xs my-5">
        <span className="bg-[#A685FA] rounded-md px-4 py-1">{type}</span>
        <span className="bg-[#A685FA] rounded-md px-4 py-1">{time}</span>
      </div>
      <div className="flex justify-between ">

        <h1 className="text-xl font-semibold mb-4">{nameCourse}</h1>
        {
          cost &&
          <span className="text-base mr-4 mt-1 text-main_color">{cost}</span>
        }
      </div>
      {rate && <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        color="#F2F2F2"
        value={rate}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />}
      <p className="text-xs font-medium  mb-8">{desc}</p>
      {(percentage || percentage == 0) &&
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {
              width: "35px",
              height: "35px",
              position: "absolute",
              bottom: "15px",
              right: "15px",
            },
            // Customize the path, i.e. the "completed progress"
            path: {
              stroke: `#703BF7`,

              transition: "stroke-dashoffset 0.5s ease 0s",
              strokeLinecap: "rounded",
            },

            trail: {
              transformOrigin: "center center",
              stroke: "#D9D9D9",
              strokeLinecap: "rounded",
            },
            // Customize the text
            text: {
              // Text colo
              fill: "#36454F",
              // Text size
              fontSize: "30px",
              fontWeight: "700",
            },
          }}
        />
      }
    </div>
  );
};

export default Card;