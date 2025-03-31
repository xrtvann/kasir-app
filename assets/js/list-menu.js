const menus = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 24000,
    category: "makanan",
    image: "assets/images/burger.jpg",
  },
  {
    id: 2,
    name: "Chiken Teriyaki",
    price: 25000,
    category: "makanan",
    image: "assets/images/chiken-teriyaki.png",
  },
  {
    id: 3,
    name: "Nasi Goreng",
    price: 20000,
    category: "makanan",
    image: "assets/images/fried-rice.png",
  },
  {
    id: 4,
    name: "Popcorn",
    price: 8000,
    category: "snack",
    image: "assets/images/popcorn.jpg",
  },
  {
    id: 5,
    name: "Granola Bars",
    price: 5000,
    category: "snack",
    image: "assets/images/granola-bars.jpg",
  },
  {
    id: 6,
    name: "French Fries",
    price: 10000,
    category: "snack",
    image: "assets/images/french-fries.png",
  },
  {
    id: 7,
    name: "Iced Caramel",
    price: 12000,
    category: "minuman",
    image: "assets/images/iced-caramel.png",
  },
  {
    id: 8,
    name: "Matcha Milk",
    price: 15000,
    category: "minuman",
    image: "assets/images/matcha_milk_tea.png",
  },
  {
    id: 9,
    name: "Iced Lemon Tea",
    price: 7000,
    category: "minuman",
    image: "assets/images/iced-lemon-tea.jpg",
  },
];

const menuContainer = document.getElementById("menu-container");

function showMenus() {
  menuContainer.innerHTML = "";

  menus.forEach((menu) => {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("col-6", "col-lg-4", "menu-item");
    menuDiv.setAttribute("data-category", menu.category);

    menuDiv.innerHTML = `
        <div class="card cursor-pointer">
                <div class="card-body p-4">
                    <img src="${menu.image}" alt="${
      menu.name
    }" class="w-75 d-block mx-auto"/>
                    <h4 class="card-title mt-4 mb-2">${menu.name}</h4>
                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-1">
                        <p class="mb-0 text-secondary fs-7">${menu.category}</p>
                        <p class="mb-0 text-primary fw-semibold">Rp. ${menu.price.toLocaleString()}</p>
                    </div>
                </div>
            </div>
    `;

    menuDiv.addEventListener("click", () => addToCart(menu));

    menuContainer.appendChild(menuDiv);
  });
}

showMenus();
