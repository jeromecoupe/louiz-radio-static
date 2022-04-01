const body = document.querySelector("body");
const mobileMenu = document.querySelector(".js-mobilemenu");
const mobileNavTriggers = document.querySelectorAll(".js-navtrigger");
const activeClass = "is-active";
const bodyClass = "has-menu";

const init = () => {
  mobileNavTriggers.forEach((trigger) => {
    trigger.addEventListener(
      "click",
      (event) => {
        console.log("clicked");
        event.preventDefault();
        mobileMenu.classList.toggle(activeClass);
        body.classList.toggle(bodyClass);
      },
      false
    );
  });
};

export { init };
