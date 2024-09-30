import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const items = [
  {
    id: 1,
    img: "/src/assets/review/arman.jpg",
    name: "Arman Hossain",
    desig: "Software Engineer",
    icon: [
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <FaStarHalfAlt />,
      <FaRegStar />,
    ],
    review:
      "Hamim Hossain is a frontend wizard! His expertise and dedication make him stand out in the industry. Always delivering on time with top-notch quality—highly recommended!",
  },
  {
    id: 2,
    img: "/src/assets/review/kajal sir.jpg",
    name: "Moksedul Hoque",
    desig: "Sr. MIS Executive",
    icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />],
    review:
      "A true frontend pro! Hamim Hossain's skillset, punctuality, and ability to bring designs to life with finesse make him a top pick for any web development project.",
  },
  {
    id: 3,
    img: "/src/assets/review/shakib copy.jpg",
    name: "Md Shakhaout Hossain",
    desig: "Software Engineer",
    icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />],
    review:
      "Looking for a skilled and reliable frontend developer? Hamim Hossain is your guy! His attention to detail and punctuality set him apart, making every project a success",
  },
  {
    id: 4,
    img: "/src/assets/review/shoaib.jpg",
    name: "Shoaib Hoque",
    desig: "Certified Data Scientist",
    icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    review:
      "Hamim Hossain combines creativity with precision. His exceptional frontend skills and commitment to deadlines make him the perfect choice for any project. Highly recommended!",
  },
  {
    id: 5,
    img: "/src/assets/review/Uzma.jpg",
    name: "Uzam Khair",
    desig: "Fiverr Buyer",
    icon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    review:
      "A skilled and dedicated frontend developer, Hamim was a key contributor to one of my Fiverr projects. Always delivering top-quality work on time—highly recommended!",
  },
];

export default items;
