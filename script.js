const form = document.getElementById("contact-form");
const result = document.getElementById("result");

if (form && result) {
  const forminit = new Forminit();
  const FORM_ID = "x84xzruipt8";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const { error } = await forminit.submit(FORM_ID, formData);

    if (error) {
      result.textContent = error.message;
      return;
    }

    result.textContent = "";
    form.reset();
    window.location.href = "gracias.html";
  });
}
