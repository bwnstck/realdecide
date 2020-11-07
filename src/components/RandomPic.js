export default function RandomNumber() {
  const randomNumber = Math.floor(Math.random() * 4);

  const randomPics = ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"];
  const chosenPic = randomPics[randomNumber];
  console.log(Math.Random);
  localStorage.setItem("House", { chosenPic });

  return <p>{chosenPic}</p>;
}
