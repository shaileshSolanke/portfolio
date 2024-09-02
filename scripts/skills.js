const skills = document.querySelector(".skills");

logoList = [
  {
    img: "./assets/skills/html-5.svg",
    alt: "HTML-5",
  },
  {
    img: "./assets/skills/css-3.svg",
    alt: "CSS-3",
  },
  {
    img: "./assets/skills/js.svg",
    alt: "JavaScript",
  },
  {
    img: "./assets/skills/react.svg",
    alt: "React",
  },

  {
    img: "./assets/skills/sql.svg",
    alt: "SQL",
  },
  {
    img: "./assets/skills/java.svg",
    alt: "Java",
  },
];

const logos = logoList
  .map((logo) => `<img src=${logo.img} alt=${logo.alt} title=${logo.alt}>`)
  .join("");

skills.innerHTML = `
<div class="logo">
    ${logos}
</div>
`;
