
/* -------------------------
      NAVIGATION
-------------------------- */
function show(page) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(page).classList.add("active");
}

/* -------------------------
     PRODUCT DATA
-------------------------- */
const products = [
    { name: "Laptop", price: "₹55,000", img: "https://picsum.photos/300?1" },
    { name: "Smartphone", price: "₹12,000", img: "https://picsum.photos/300?2" },
    { name: "Earbuds", price: "₹699", img: "https://picsum.photos/300?3" },
    { name: "Keyboard", price: "₹899", img: "https://picsum.photos/300?4" },
    { name: "Smartwatch", price: "₹1,999", img: "https://picsum.photos/300?5" },
    { name: "Headset", price: "₹1,499", img: "https://picsum.photos/300?6" }
];

/* GENERATE PRODUCT CARDS */
let productHTML = "";
products.forEach(p => {
    productHTML += `
    <div class="col-md-4 mt-3">
        <div class="card shadow">
            <img src="${p.img}" class="card-img-top">
            <div class="card-body text-center">
                <h5>${p.name}</h5>
                <p>${p.price}</p>
                <button class="btn btn-warning" onclick="addToWishlist('${p.name}')">Add to Wishlist</button>
                <button class="btn btn-success mt-2" onclick="addOrder('${p.name}')">Order Now</button>
            </div>
        </div>
    </div>`;
});
document.getElementById("productCards").innerHTML = productHTML;

/* -------------------------
       WISHLIST
-------------------------- */
let wishlist = [];
function addToWishlist(item) {
    wishlist.push(item);
    document.getElementById("wishlistBox").innerHTML =
        wishlist.map(i => "❤️ " + i).join("<br>");
}

/* -------------------------
        ORDERS
-------------------------- */
let orders = [];
function addOrder(item) {
    orders.push(item);
    document.getElementById("ordersBox").innerHTML =
        orders.map(i => "🛒 " + i).join("<br>");
}

/* -------------------------
       REVIEWS
-------------------------- */
function addReview() {
    let text = reviewText.value;
    if (text === "") return;
    reviewList.innerHTML += `<p>💬 ${text}</p>`;
    reviewText.value = "";
}

/* -------------------------
    CUSTOMER CARE TICKET
-------------------------- */
function submitTicket() {
    let issue = ticketText.value;
    if (issue === "") return;
    ticketBox.innerHTML += `<p>📌 ${issue}</p>`;
    ticketText.value = "";
}

/* -------------------------
         REPORT
-------------------------- */
function submitReport() {
    let rep = reportText.value;
    if (rep === "") return;
    reportBox.innerHTML += `<p>⚠️ ${rep}</p>`;
    reportText.value = "";
}

/* -------------------------
     REGISTER + LOGIN
-------------------------- */
async function registerUser() {

    nameErr.innerHTML = regName.value === "" ? "Enter name" : "";
    emailErr.innerHTML = !regEmail.value.includes("@") ? "Invalid email" : "";
    passErr.innerHTML = regPass.value.length < 4 ? "Too short" : "";

    if (regName.value === "" || !regEmail.value.includes("@") || regPass.value.length < 4)
        return;

    await new Promise(r => setTimeout(r, 700));
    alert("Registration successful!");
}

async function loginUser() {
    if (loginEmail.value === "" || loginPass.value === "") {
        alert("Enter Email & Password");
        return;
    }

    await new Promise(r => setTimeout(r, 600));
    alert("Login Success!");
}

/* -------------------------
     SCROLL TO PRODUCTS
-------------------------- */
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
