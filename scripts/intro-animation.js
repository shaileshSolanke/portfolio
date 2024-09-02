const introAnimation = (document.querySelector(
  ".intro-animation-container"
).innerHTML = `
<div class="intro-animation">
    <div class="top-section">
      <button class="run-code">
        <img src="./assets/icons/refresh.svg" />Run
      </button>
    </div>
    <div class="bottom-section">
      <p>
        <span class="alpha">function</span>
        <span class="beta">enterYourName</span>&#40;<span class="gamma"
          >name</span
        >&#41; &#123;
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;
        <span class="gamma">localStorage</span><span class="delta">.</span
        ><span class="alpha">setItem </span>&#40;
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="gamma"
          ><span class="delta">"</span><span class="beta">uname</span
          ><span class="delta">",</span>name</span
        >
      </p>
      <p>&nbsp; &#41;<span class="delta">&#59;</span></p>
      <p>&#125;<span class="delta">&#59;</span></p>
      <p>
        <span class="alpha">enterYourName</span>&#40;
        <input type="text" class="name-input" autofocus placeholder="name" />
        &#41;<span class="delta">&#59;</span>
      </p>
    </div>
</div>
`);
let username = "";
const input = document.querySelector(".name-input");
const btn = document.querySelector(".run-code");

btn.addEventListener("click", () => {
  username = input.value.trim() || "Friend";
  localStorage.setItem("uname", username);
  btn.innerHTML=`<img src="./assets/icons/spinner.svg"/>Run`
  setTimeout(()=>{
    const container = document.querySelector(".intro-animation-container");
  container.classList.add("move-up");
  },700)
});

const uname = localStorage.getItem("uname");

if (uname) {
  setInterval(() => {
    if (document.title === "Hi, My name is Shailesh") {
      document.title = `Nice to meet you, ${uname}`;
    } else {
      document.title = "Hi, My name is Shailesh";
    }
  }, 5000);
}
