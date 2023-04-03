const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
];

const unorderedList = document.querySelector("ul");

for(let i in teamMembers){
  const teamMember = teamMembers[i];
  unorderedList.innerHTML +=`
  <li>Object ${parseInt(i)+1}</li>
  `
  const ulGeneral = document.createElement("ul");
  unorderedList.append(ulGeneral)
  for(let key in teamMember){
    if(key === "image"){
      ulGeneral.innerHTML +=`
      <li>${key}: <img src="assets/img/${teamMember[key]}"></li>
      `
    }else{
      ulGeneral.innerHTML +=`
      <li>${key}: ${teamMember[key]}</li>
      `
    }
  }
}