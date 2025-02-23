import ReactStars from "react-rating-stars-component";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";


const Stars = ({ rate }) => {
    return (
        <ReactStars
            count={5}
            size={24}
            isHalf={true}
            color="#F2F2F2"
            value={rate}
            emptyIcon={<MdOutlineStarBorderPurple500 />}
            halfIcon={<MdOutlineStarHalf />}
            fullIcon={<MdOutlineStarBorderPurple500 />}
            activeColor="#ffd700"
        />
    )
}

export default Stars