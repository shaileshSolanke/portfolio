const projectList = [
  {
    img: "./assets/images/youtube-replica.png",
    name: "YouTube Replica",
    languages: ["HTML5", "CSS3", "JavaScript"],
    discription:
      "I created a YouTube homepage replica focused on replicating the UI. This project included the header, sidebar, and video grid layout to closely mimic YouTube's design, enhancing my skills in layout design and responsive web development.<br><br>Through this project, I enhanced my understanding of layout design,CSS styling, and responsive techniques, providing a solid foundation for future UI/UX projects.",
    code: "https://github.com/shaileshSolanke/Youtube-Replica",
    liveDemo: "https://shaileshsolanke.github.io/Youtube-Replica/",
  },
  {
    img: "./assets/images/store.gif",
    name: "Food Store",
    languages: ["HTML5", "CSS3", "JavaScript"],
    discription:
      "I recently developed a food store website that allows users to explore and manage their shopping experience effectively. The website consists of multiple sections, with a focus on the fruit section, where users can browse through available items.<br><br>Users can add fruits to their cart, update the quantity, or remove items as needed. After finalizing their selection, users can place an order and receive a sample text receipt summarizing their purchase.<br><br>This project helped me strengthen my skills in front-end development, particularly in handling dynamic content and user interactions.",
    code: "https://github.com/shaileshSolanke/Food-Store",
    liveDemo: "https://shaileshsolanke.github.io/Food-Store/",
  },
  {
    img: "./assets/images/react-mini-projects.gif",
    name: "React Mini Projects",
    languages: ["React"],
    discription:
      "This collection of React mini projects showcases various UI components and interactions, built to enhance frontend skills and demonstrate the flexibility of React. These projects cover a wide range of use cases and are designed to help users and developers understand key concepts in modern web development.<br><br>Built custom cursor, accordion, random colors, rating, image slider, load more, navigation menu, QR code generator, theme switch, scroll indicator, and many more.",
    code: "https://github.com/shaileshSolanke/react-mini-projects",
    liveDemo: "https://shaileshsolanke-react-mini-projects.netlify.app/",
  },
  {
    img: "./assets/images/movie-app.gif",
    name: "Movie App",
    languages: ["React","TailWind","TMDB"],
    discription:
      "A React-based web application that allows users to browse and search for movies using the TMDB API. The app features multiple sections like popular movies, top-rated movies, upcoming releases, and more, with a clean, responsive design using Tailwind CSS. Movies are visually sorted by their ratings, and various UX improvements such as pagination control and loaders are implemented for better user experience.",
    code: "https://github.com/shaileshSolanke/movie-app-react-tailwind",
    liveDemo: "https://shaileshsolanke-movie-app.netlify.app/",
  },
  {
    img: "./assets/images/desktop-view.gif",
    name: "E-Commerce Furniture",
    languages: ["React","TailWind","Redux"],
    discription:
      "This project is a comprehensive React web application that enhances user interaction with a room-themed product showcase. The app features dedicated pages for the Living Room, Bedroom, Kitchen, and Workplace, each with a unique background image and a day/night mode toggle for immersive viewing.<br><br>Users can explore room-specific products that align with the items depicted in the room's background, such as chairs and sofas in the Living Room or cookware in the Kitchen. Product data is managed through a JSON file hosted on GitHub and used as an API, ensuring easy updates and scalability.",
    code: "https://github.com/shaileshSolanke/furniture",
    liveDemo: "https://shaileshsolanke-furniture.netlify.app/",
  },
];

const projects = document.querySelector("#projects");

const languages = projects.m;

projectList.forEach((project) => {
  const languages = project.languages.map((lang) => `<span>${lang}</span>`);

  projects.innerHTML += `
<div class="project">
    <div class="project-poster">
        <img src=${project.img}>
    </div>
    <div class="project-info">
        <p class="project-title">
            ${project.name}
        </p>
        <div class="languages-used">
            ${languages.join("").trim()}
        </div>
        <p class="project-description">${project.discription}</p>
        <div class="project-links">
            <a href=${
              project.code
            }>Code<img src="./assets/icons/github.svg"></a>
            <a href=${
              project.liveDemo
            }>Live Demo<img src="./assets/icons/go-to.svg"></a>
        </div>
    </div>
</div>
`;
});
