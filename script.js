// Selecting the outer buttons
const tab1 = document.getElementById("shipping");
const tab2 = document.getElementById("installation");
const tab3 = document.getElementById("warranty");

// Selecting the inner buttons inside the sidebar
const shippingInnerBtn = document.getElementById("shipping-inner-btn");
const installationInnerBtn = document.getElementById("installation-inner-btn");
const warrantyInnerBtn = document.getElementById("warranty-inner-btn");

// Selecting the content sections
const shippingBody = document.getElementById("shipping-body");
const installationBody = document.getElementById("installation-body");
const warrantyBody = document.getElementById("warranty-body");

const sideBar = document.getElementById("side-bar");
const close = document.getElementById("close");
const container = document.getElementById("container");

// Function to hide all content sections
function hideAllTabs() {
  shippingBody.style.display = "none";
  installationBody.style.display = "none";
  warrantyBody.style.display = "none";
}

// Function to reset all tabs' background colors
function resetActiveTabs() {
  tab1.classList.remove("active-tab");
  tab2.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
  shippingInnerBtn.classList.remove("active-tab");
  installationInnerBtn.classList.remove("active-tab");
  warrantyInnerBtn.classList.remove("active-tab");
}

// Function to show the selected tab and apply the active background color
function showTab(tab, btn) {
  hideAllTabs();
  resetActiveTabs();
  tab.style.display = "block";
  btn.classList.add("active-tab");
  sideBar.style.display = "flex";
  container.classList.add("overlay-active");
}

// Event listeners for outer buttons
tab1.addEventListener("click", function () {
  showTab(shippingBody, tab1);
});
// coment

tab2.addEventListener("click", function () {
  showTab(installationBody, tab2);
});

tab3.addEventListener("click", function () {
  showTab(warrantyBody, tab3);
});

// Event listeners for inner buttons
shippingInnerBtn.addEventListener("click", function () {
  showTab(shippingBody, shippingInnerBtn);
});

installationInnerBtn.addEventListener("click", function () {
  showTab(installationBody, installationInnerBtn);
});

warrantyInnerBtn.addEventListener("click", function () {
  showTab(warrantyBody, warrantyInnerBtn);
});

close.addEventListener("click", function () {
  sideBar.style.display = "none";
  container.classList.remove("overlay-active");
  resetActiveTabs();
});
