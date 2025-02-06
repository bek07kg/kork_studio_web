let lastScrollTop = 0;
const header = document.querySelector("header");
const floatingLogo = document.getElementById("floating-logo");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Логотип появляется, когда прокрутили страницу до верха header
  if (currentScroll > header.offsetHeight) {
    floatingLogo.style.display = "block"; // Показываем логотип
  } else {
    floatingLogo.style.display = "none"; // Скрываем логотип, если прокрутили вверх
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Предотвращаем отрицательные значения
});

document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".gallery");
  if (!gallerySection) return; // Проверяем, существует ли галерея

  // Получаем уже добавленные изображения
  const existingImages = new Set(
    Array.from(gallerySection.querySelectorAll("img")).map((img) => img.src)
  );

  // Связь изображений с их группами
  const imageGroups = {
    [con1_1]: "c1",
    [ext11_1]: "e11",
    [int3_1]: "i3",
    [ext2_1]: "e2",
    [ext12_1]: "e12",
    [ext17_1]: "e17",
    [ext16_1]: "e16",
    [int9_1]: "i9",
    [int4_1]: "i4",
    [ext8_1]: "e8",
  };

  Object.keys(imageGroups).forEach((imageUrl) => {
    if (existingImages.has(imageUrl)) return; // Если изображение уже есть, пропускаем

    const link = document.createElement("a");
    link.href = `gallery.html?group=${imageGroups[imageUrl]}`;
    link.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Проект";
    img.loading = "lazy";

    link.appendChild(img);
    gallerySection.appendChild(link);

    // Добавляем в Set, чтобы предотвратить дубли
    existingImages.add(imageUrl);
  });
});

// Получаем элементы
const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
const body = document.body; // Это нужно для предотвращения прокрутки страницы при открытом меню

// Добавляем обработчик событий для гамбургера
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Предотвращаем закрытие меню при клике по гамбургеру
  drawer.classList.toggle("active"); // Переключаем активное состояние меню
  body.classList.toggle("no-scroll"); // Отключаем прокрутку при открытом меню
});

// Добавляем обработчик событий для закрытия меню при клике на пустое место
document.addEventListener("click", (e) => {
  if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
    drawer.classList.remove("active"); // Закрываем меню
    body.classList.remove("no-scroll"); // Включаем прокрутку страницы обратно
  }
});

// Отключаем прокрутку страницы при открытом меню
body.classList.add("no-scroll");
