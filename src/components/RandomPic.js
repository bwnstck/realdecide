import Gryffindor from "../img/Gryffindor.png";
import Slytherin from "../img/Slytherin.png";
import Hufflepuff from "../img/Hufflepuff.png";
import Ravenclaw from "../img/Ravenclaw.png";

const randomPics = [Gryffindor, Slytherin, Hufflepuff, Ravenclaw];
const altHouse = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

export default function RandomPic({ index }) {
  return <img src={randomPics[index]} alt={altHouse[index]} />;
}
