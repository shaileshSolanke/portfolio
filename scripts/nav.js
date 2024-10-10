const nav = document.querySelector("nav");

nav.innerHTML = `
<div class="left-nav">
        <p>
          <a href="https://drive.google.com/file/d/1OOibbVRxzWNtgx7JCMI9WdjTa0xdRDga/view"
            ><span class="alpha">shaileshSolanke</span>&#40;&#41;<span
              class="delta"
              >&#59;</span
            ></a
          >
        </p>
      </div>
      <div class="right-nav">
        <ul>
          <li>
            <a href="#home"
              ><span class="alpha">home</span>&#40;&#41;<span class="delta"
                >&#59;</span
              ></a
            >
          </li>
          <li>
            <a href="#about"
              ><span class="alpha">about</span>&#40;&#41;<span class="delta"
                >&#59;</span
              ></a
            >
          </li>
          <li>
            <a href="#projects"
              ><span class="alpha">projects</span>&#40;&#41;<span class="delta"
                >&#59;</span
              ></a
            >
          </li>
          <li>
            <a href="#contact"
              ><span class="alpha">contact</span>&#40;&#41;<span class="delta"
                >&#59;</span
              ></a
            >
          </li>
        </ul>
        <img
          src="./assets/icons/menu.svg"
          alt="menu-icon"
          class="menu show-nav"
        />
      </div>
      <div class="sidebar">
        <p>
          <img src="./assets/icons/close.svg" alt="close-icon" class="hide-nav" />
        </p>
        <div class="sidebar-nav">
          <a href="#home"
          class="hide-nav"
            ><span class="alpha">home</span>&#40;&#41;<span class="delta"
              >&#59;</span
            ></a
          >
          <a href="#about"
          class="hide-nav"
            ><span class="alpha">about</span>&#40;&#41;<span class="delta"
              >&#59;</span
            ></a
          >
          <a href="#projects"
          class="hide-nav"
            ><span class="alpha">projects</span>&#40;&#41;<span class="delta"
              >&#59;</span
            ></a
          >
          <a href="#contact"
          class="hide-nav"
            ><span class="alpha">contact</span>&#40;&#41;<span class="delta"
              >&#59;</span
            ></a
          >
        </div>
      </div>
`;

const sidebar = document.querySelector(".sidebar");
const btnShowNav = document.querySelector(".show-nav");
const btnHideNav = document.querySelectorAll(".hide-nav");

btnShowNav.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

btnHideNav.forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
});
