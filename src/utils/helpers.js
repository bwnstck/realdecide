export const choosOneRandom = (array) => {
  const randNrInArray = Math.floor(Math.random() * array.length);
  return array[randNrInArray];
};
export const getDate = () => {
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  return `${day}|${month}|${year}`;
};

export const setLocalStorage = (
  values,
  alreadyChoosen,
  theLuckyOne,
  sets,
  activeSet,
  round
) => {
  localStorage.setItem("values", JSON.stringify(values));
  localStorage.setItem("alreadyChoosen", JSON.stringify(alreadyChoosen));
  localStorage.setItem("theLuckyOne", JSON.stringify(theLuckyOne));
  localStorage.setItem("sets", JSON.stringify(sets));
  localStorage.setItem("activeSet", JSON.stringify(activeSet));
  localStorage.setItem("round", JSON.stringify(round));
};

export const chooseGroups = (groupSet) => {
  let members = groupSet.values;
  const size = 3;
  const groupsChosen = [];

  while (members.length > 0) {
    let group = [];
    if (members.length >= size) {
      while (group.length < size) {
        let index = Math.floor(Math.random() * members.length);
        // if (!group.includes(members[index].name)) {
        group.push(members[index].name);
        members.splice(index, 1);
        // }
      }
    } else {
      group = members.map((member) => member.name);
      members = [];
    }
    groupsChosen.push(group);
  }
  return groupsChosen;
};
