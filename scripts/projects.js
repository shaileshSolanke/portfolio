const projectList = [
  {
    img: "./assets/images/youtube-replica.png",
    name: "YouTube Replica",
    discription:
      "I created a YouTube homepage replica focused on replicating the UI. This project included the header, sidebar, and video grid layout to closely mimic YouTube's design, enhancing my skills in layout design and responsive web development.<br><br>Through this project, I enhanced my understanding of layout design,CSS styling, and responsive techniques, providing a solid foundation for future UI/UX projects.",
    code: "https://github.com/shaileshSolanke/Youtube-Replica",
    liveDemo: "https://shaileshsolanke.github.io/Youtube-Replica/",
  },
  {
    img: "./assets/images/store.gif",
    name: "Food Store",
    discription:
      "I recently developed a food store website that allows users to explore and manage their shopping experience effectively. The website consists of multiple sections, with a focus on the fruit section, where users can browse through available items.<br><br>Users can add fruits to their cart, update the quantity, or remove items as needed. After finalizing their selection, users can place an order and receive a sample text receipt summarizing their purchase.<br><br>This project helped me strengthen my skills in front-end development, particularly in handling dynamic content and user interactions.",
    code: "https://github.com/shaileshSolanke/Food-Store",
    liveDemo: "https://shaileshsolanke.github.io/Food-Store/",
  },
]

const projects=document.querySelector('#projects')

projectList.forEach((project)=>{
    projects.innerHTML+=`
<div class="project">
    <div class="project-poster">
        <img src=${project.img}>
    </div>
    <div class="project-info">
        <p class="project-title">
            ${project.name}
        </p>
        <div class="languages-used">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
        </div>
        <p class="project-description">${project.discription}</p>
        <div class="project-links">
            <a href=${project.code}>Code<img src="./assets/icons/github.svg"></a>
            <a href=${project.liveDemo}>Live Demo<img src="./assets/icons/go-to.svg"></a>
        </div>
    </div>
</div>
`;
})

