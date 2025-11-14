function show(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}

let wishlist = [];

function addToWishlist(itemName) {
    if (!wishlist.includes(itemName)) {
        wishlist.push(itemName);
        updateWishlist();
        alert(itemName + " added to wishlist!");
    } else {
        alert(itemName + " is already in the wishlist!");
    }
}

function updateWishlist() {
    const container = document.getElementById("wishlistBox");
    if (wishlist.length === 0) {
        container.innerHTML = "<p>No items yet.</p>";
        return;
    }
    container.innerHTML = "";
    wishlist.forEach(item => {
        container.innerHTML += `<p>⭐ ${item}</p>`;
    });
}

function addReview() {
    let reviewText = document.getElementById("reviewText").value.trim();
    if (reviewText === "") {
        alert("Please write a review before submitting!");
        return;
    }
    let reviewList = document.getElementById("reviewList");
    let newReview = document.createElement("p");
    newReview.textContent = "📝 " + reviewText;
    reviewList.appendChild(newReview);
    document.getElementById("reviewText").value = "";
}

function submitReport() {
    let report = document.getElementById("reportBox").value.trim();
    if (report === "") {
        alert("Please describe the issue before submitting!");
        return;
    }
    alert("Your report has been submitted. Thank you!");
    document.getElementById("reportBox").value = "";
}

function registerUser() {
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass = document.getElementById("regPass").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passError").textContent = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        valid = false;
    }

    if (pass.length < 6) {
        document.getElementById("passError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }
}

function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    if (email === "" || pass === "") {
        alert("Please enter both email and password.");
        return;
    }

    alert("Login Successful!");
}
