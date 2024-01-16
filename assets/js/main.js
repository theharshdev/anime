const cursorBall = document.getElementById("cursorBall");
const smallBall = document.getElementById("smallBall");
const ring = document.getElementById("ring");
const togglemenu = document.getElementById("togglemenu");
const navBar = document.getElementById("navBar");
const closeAllWorkPopup = document.getElementById("closeAllWorkPopup");
const allWorkPopup = document.getElementById("allWorkPopup");
const closeWorkPopup = document.getElementById("closeWorkPopup");
const workPopup = document.getElementById("workPopup");
const viewAllWork = document.getElementById("viewAllWork");
const workPopupBg = document.getElementById("workPopupBg");
const mainHeading = document.getElementById("mainHeading");
const experiences = document.getElementById("experiences");
const preview1 = document.getElementById("preview1");
const preview2 = document.getElementById("preview2");
const preview3 = document.getElementById("preview3");
const preview4 = document.getElementById("preview4");
const preview5 = document.getElementById("preview5");
const description = document.getElementById("description");
const livePreviewLink = document.getElementById("livePreviewLink");
const smallDescription = document.getElementById("smallDescription");
const body = document.querySelector("body");
const viewWorks = document.querySelectorAll(".viewWork");
const viewAllWorkBtns = document.querySelectorAll(".viewAllWorkBtn");
let menuOpen = false;

// adding event on mousmove on the window ------
window.addEventListener("mousemove", (event) => {
  document.getElementById("mainCursorBox").style.display = "block";
  // Horizontal co-ordinates of the cursor ---
  const x = event.clientX;
  // Vertical co-ordinates of the cursor ---
  const y = event.clientY;
  cursorBall.style.top = `${y}px`;
  cursorBall.style.left = `${x}px`;
  smallBall.style.top = `${y}px`;
  smallBall.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  ring.style.left = `${x}px`;

  // if hovers element has the class "cursorscale" ----
  const target = event.target;
  if (target.classList.contains("cursorScale")) {
    cursorBall.classList.add("scale-[6]");
    ring.style.display = "none";
  } else {
    cursorBall.classList.remove("scale-[6]");
    ring.style.display = "inline-block";
  }
});

// Toggling the menu on button click ------
window.addEventListener("click", (event) => {
  const target = event.target;
  // Checking the tagetted element has class "togglemenu" ----
  if (target.classList.contains("togglemenu") && menuOpen === false) {
    navBar.classList.remove("-translate-x-full");
    togglemenu.innerHTML = "close";
    menuOpen = true;
  } else {
    navBar.classList.add("-translate-x-full");
    togglemenu.innerHTML = "Menu";
    menuOpen = false;
  }
});

document.addEventListener("mouseleave", () => {
  document.getElementById("mainCursorBox").style.display = "none";
});

closeAllWorkPopup.addEventListener("click", () => {
  allWorkPopup.classList.add("hidden");
  body.classList.remove("h-screen");
  body.classList.remove("overflow-hidden");
});

closeWorkPopup.addEventListener("click", () => {
  workPopup.classList.add("hidden");
  body.classList.remove("h-screen");
  body.classList.remove("overflow-hidden");
});

viewAllWork.addEventListener("click", () => {
  allWorkPopup.classList.remove("hidden");
  body.classList.add("h-screen");
  body.classList.add("overflow-hidden");
});

viewWorks.forEach((viewWork) => {
  viewWork.addEventListener("click", () => {
    workPopup.classList.remove("hidden");
    body.classList.add("h-screen");
    body.classList.add("overflow-hidden");
    workPopupBg.innerHTML = `<div class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat -z-20" style="background-image: url('${viewWork.getAttribute(
      "bgImage"
    )}')"></div>`;
    mainHeading.innerText = viewWork.getAttribute("mainHeading");
    smallDescription.innerText = viewWork.getAttribute("smallDescription");
    experiences.innerText = viewWork.getAttribute("experiences");
    const imgPreview1 = viewWork.getAttribute("preview1");
    const imgPreview2 = viewWork.getAttribute("preview2");
    const imgPreview3 = viewWork.getAttribute("preview3");
    const imgPreview4 = viewWork.getAttribute("preview4");
    const imgPreview5 = viewWork.getAttribute("preview5");

    preview1.innerHTML = `<img src="${imgPreview1}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview2.innerHTML = `<img src="${imgPreview2}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview3.innerHTML = `<img src="${imgPreview3}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview4.innerHTML = `<img src="${imgPreview4}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview5.innerHTML = `<img src="${imgPreview5}" alt="..." class="w-full rounded-lg border border-white/10" />`;

    description.innerText = viewWork.getAttribute("description");

    const livePreviewLinkTxt = viewWork.getAttribute("livePreviewLink");
    livePreviewLink.setAttribute("href", livePreviewLinkTxt);
  });
});

viewAllWorkBtns.forEach((viewAllWorkBtn, index) => {
  viewAllWorkBtn.addEventListener("click", () => {
    workPopup.classList.remove("hidden");
    body.classList.add("h-screen");
    body.classList.add("overflow-hidden");
    workPopupBg.innerHTML = `<div class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat -z-20" style="background-image: url('${viewWorks[
      index
    ].getAttribute("bgImage")}')"></div>`;
    mainHeading.innerText = viewWorks[index].getAttribute("mainHeading");
    smallDescription.innerText =
      viewWorks[index].getAttribute("smallDescription");
    experiences.innerText = viewWorks[index].getAttribute("experiences");
    const imgPreview1 = viewWorks[index].getAttribute("preview1");
    const imgPreview2 = viewWorks[index].getAttribute("preview2");
    const imgPreview3 = viewWorks[index].getAttribute("preview3");
    const imgPreview4 = viewWorks[index].getAttribute("preview4");
    const imgPreview5 = viewWorks[index].getAttribute("preview5");

    preview1.innerHTML = `<img src="${imgPreview1}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview2.innerHTML = `<img src="${imgPreview2}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview3.innerHTML = `<img src="${imgPreview3}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview4.innerHTML = `<img src="${imgPreview4}" alt="..." class="w-full rounded-lg border border-white/10" />`;
    preview5.innerHTML = `<img src="${imgPreview5}" alt="..." class="w-full rounded-lg border border-white/10" />`;

    description.innerText = viewWorks[index].getAttribute("description");

    const livePreviewLinkTxt = viewWorks[index].getAttribute("livePreviewLink");
    livePreviewLink.setAttribute("href", livePreviewLinkTxt);
  });
});
