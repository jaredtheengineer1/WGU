const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  console.log("DOM fully loaded and parsed");
  if ($("#year")) $("#year").textContent = year;
  if ($("#email-required")) $("#email-required").innerHTML = "*";
  if ($("#email")) $("#email").required = true;
  if ($("#email")) $("#email").classList.add("required-field");
  if ($("#how-contact"))
    $("#how-contact").addEventListener("change", ({ target }) => {
      const contactType = ["email", "phone"];
      for (const type of contactType) {
        const ele = $(`#${type}-required`);
        if (
          target.value === type ||
          (target.value === "text" && type === "phone")
        ) {
          ele.textContent = "*";
          $(`#${type}`).required = true;
        } else {
          ele.textContent = "";
          $(`#${type}`).required = false;
        }
      }
    });
});
