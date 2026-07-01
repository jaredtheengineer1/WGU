const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  $("#year").textContent = year;
  console.log("DOM fully loaded and parsed");
  $("#email-required").innerHTML = "*";
  $("#email").required = true;
  $("#email").classList.add("required-field");
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
