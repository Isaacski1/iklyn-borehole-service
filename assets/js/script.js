// LightGallery Initialization
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    lightGallery(gallery, {
      selector: "a",
      download: false,
    });
  }
});

// Go to Top Button Functionality
const goToTopBtn = document.getElementById("goToTop");
goToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    goToTopBtn.classList.add("show");
  } else {
    goToTopBtn.classList.remove("show");
  }
});
// End of Go to Top Button Functionality

// WhatsApp Contact Form Handler
document.addEventListener("DOMContentLoaded", function () {
  const whatsappForm = document.getElementById("whatsapp-contact-form");
  if (!whatsappForm) return;

  whatsappForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number = whatsappForm.dataset.whatsappNumber || "";
    const formData = new FormData(whatsappForm);

    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const location = (formData.get("location") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const textLines = [
      "📝 New Website Enquiry",
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      email ? `✉️ Email: ${email}` : null,
      `📍 Location: ${location}`,
      `🛠️ Service: ${service}`,
      `💬 Message: ${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(textLines.join("\n"));
    const url = `https://wa.me/${number}?text=${text}`;

    window.open(url, "_blank", "noopener");
  });
});
