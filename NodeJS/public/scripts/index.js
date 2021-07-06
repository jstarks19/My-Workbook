let nav = document.querySelector(".nav-logo span:nth-of-type(1)");

let x = window.matchMedia("(max-width: 420px)");

function compressLogo(elem) {
  if (elem.matches) {
    nav.innerText = "{ JS }";
  } else {
    nav.innerText = "Jason Starkey";
  }
}

{
  /* <div class="nav-logo">
  <a href="#">
    {" "}
    <span>Jason Starkey</span>
    <span>.dev</span>{" "}
  </a>
</div>; */
}

compressLogo(x);

x.addEventListener("change", compressLogo);
