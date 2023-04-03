const teamMembers = [
  {
    image: "wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnett",
    role: "Founder & CEO"
  },
  {
    image: "angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    role: "Chief Editor"
  },
  {
    image: "walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager"
  },
  {
    image: "angela-lopez-social-media-manager.jpg",
    name: "Angela Lopez",
    role: "Social Media Manager"
  },
  {
    image: "scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer"
  },
  {
    image: "barbara-ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    role: "Graphic designer"
  }
];

const row = document.querySelector(".row");

for(let i in teamMembers){
  const teamMember = teamMembers[i];
  const col = document.createElement("div");
  col.classList.add("col", "bg-white", "mb-5", "px-0", "d-flex", "flex-column");
  row.append(col);
  for(let key in teamMember){
    console.log(key)
    switch (key) {
      case "name":
        const name = document.createElement("h2");
        name.classList.add("py-2");
        name.innerHTML =`
        ${teamMember[key]}
        `
        col.append(name);
        break;
        
      case "role":
        const role = document.createElement("span");
        role.classList.add("pb-4");
        role.innerHTML =`
        ${teamMember[key]}
        `
        col.append(role);
        break;
          
      case "image":
        const image = document.createElement("img");
        image.setAttribute("src", "assets/img/" + teamMember[key]);
        col.append(image);
        break;
        
        default:
          break;
    }
  }
}