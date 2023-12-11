function navigateToClients(section) {
  let clientsWrapper = document.getElementById("clients-wrapper");
  console.log(section);
  clientsWrapper.scrollIntoView({ behavior: "smooth" });
}
function navigateToFeatures(section) {
  let featuresWrapper = document.getElementById("features-wrapper");
  console.log(section);
  featuresWrapper.scrollIntoView({ behavior: "smooth" });
}
function navigateToTestimonials(section) {
  let testimonialsWrapper = document.getElementById("testimonials-wrapper");
  console.log(section);
  testimonialsWrapper.scrollIntoView({ behavior: "smooth" });
}
function navigateToFaq(section) {
  let faqWrapper = document.getElementById("faq-wrapper");
  console.log(section);
  faqWrapper.scrollIntoView({ behavior: "smooth" });
}
function navigateToContact(section) {
  let contactWrapper = document.getElementById("contact-wrapper");

  contactWrapper.scrollIntoView({ behavior: "smooth" });
}
let isDownloadbtnClicked = false;
let downloadPage = document.getElementById("download-page");
let downloadBtn = document.getElementById("download-buton");
downloadBtn.addEventListener("click", (event) => {
  if (isDownloadbtnClicked === false) {
    isDownloadbtnClicked = true;
    downloadPage.style.display = "block";
    downloadPage.style.display = "flex";
  }
});

let downloadCancelBtn = document.getElementById("download-cancel-btn");
downloadCancelBtn.addEventListener("click", () => {
  isDownloadbtnClicked = false;
  downloadPage.style.display = "none";
});

let sendMsgBtn = document.getElementById("send-msg");
sendMsgBtn.addEventListener("click", (e) => {
  let nameInput = document.getElementById("name-input").value;

  let emailInput = document.getElementById("email-input").value;
  let phoneInput = document.getElementById("phone-input").value;
  let schoolInput = document.getElementById("school-input").value;
  let msgInput = document.getElementById("msg-input").value;

  e.preventDefault();
  const data = {
    name: nameInput,
    email: emailInput,
    phone: phoneInput,
    school: schoolInput,
    message: msgInput,
  };
  console.log(data);
  fetch("http://localhost:7000/api/data/post/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Data sent successfully");
      } else {
        console.error("Failed to send data");
        // Handle the error as needed.
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});

// Define the URL for the local server and endpoint
const baseUrl = "http://localhost:7000";
const endpoint = "/api/data/get";
const apiUrl = baseUrl + endpoint;

// admin page functionality
let adminPage = document.getElementById("admin-page-wrapper");
let adminBtn = document.getElementById("admin-btn");
adminBtn.addEventListener("click", () => {
  adminPage.style.display = "flex";

  // Function to fetch data and populate the table
  function fetchData() {
    // Replace the URL with your API endpoint
    const apiUrl = "http://localhost:7000/api/data/get";

    // Use Axios to make a GET request
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        const tableBody = document.querySelector("#data-table tbody");

        // Clear existing rows
        tableBody.innerHTML = "";

        // Iterate over the data and create table rows
        data.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
          
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
          <td>${item.school}</td>
          <td>${item.message}</td>
        `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  // Call the fetchData function to populate the table
  fetchData();
});

let adminCloseBtn = document.getElementById("admin-close-btn");
adminCloseBtn.addEventListener("click", () => {
  adminPage.style.display = "none";
});
