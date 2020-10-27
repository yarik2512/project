const sidebar = document.querySelector(".sidebar");
const sidebarHide = document.querySelector(".sidebar-hide");

sidebarHide.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
});