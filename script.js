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

// ALL GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".all-gallery");
  if (!gallerySection) return; // Проверяем, существует ли галерея

  // Получаем уже добавленные изображения
  const existingImages = new Set(
    Array.from(gallerySection.querySelectorAll("img")).map((img) => img.src)
  );

  // Связь изображений с их группами
  const imageGroups = {
    [con1_1]: "c1",
    [con2_1]: "c2",
    [ext1_1]: "e1",
    [ext2_1]: "e2",
    [ext3_1]: "e3",
    [ext4_1]: "e4",
    [ext5_1]: "e5",
    [ext6_1]: "e6",
    [ext7_1]: "e7",
    [ext8_1]: "e8",
    [ext9_1]: "e9",
    [ext10_1]: "e10",
    [ext11_1]: "e11",
    [ext12_1]: "e12",
    [ext13_1]: "e13",
    [ext14_1]: "e14",
    [ext15_1]: "e15",
    [ext16_1]: "e16",
    [ext17_1]: "e17",
    [ext18_1]: "e18",
    [ext19_1]: "e19",
    [int1_1]: "i1",
    [int2_1]: "i2",
    [int3_1]: "i3",
    [int4_1]: "i4",
    [int5_1]: "i5",
    [int6_1]: "i6",
    [int7_1]: "i7",
    [int8_1]: "i8",
    [int9_1]: "i9",
  };

  Object.keys(imageGroups).forEach((imageUrl) => {
    if (existingImages.has(imageUrl)) return; // Если изображение уже есть, пропускаем

    const link = document.createElement("a");
    link.href = `all_gallery.html?group=${imageGroups[imageUrl]}`;
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

// CONCEPS GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".conceps-gallery");
  if (!gallerySection) return; // Проверяем, существует ли галерея

  // Получаем уже добавленные изображения
  const existingImages = new Set(
    Array.from(gallerySection.querySelectorAll("img")).map((img) => img.src)
  );

  // Связь изображений с их группами
  const imageGroups = {
    [con1_1]: "c1",
    [con2_1]: "c2",
  };

  Object.keys(imageGroups).forEach((imageUrl) => {
    if (existingImages.has(imageUrl)) return; // Если изображение уже есть, пропускаем

    const link = document.createElement("a");
    link.href = `conceps_gallery.html?group=${imageGroups[imageUrl]}`;
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

// EXT GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".ext-gallery");
  if (!gallerySection) return; // Проверяем, существует ли галерея

  // Получаем уже добавленные изображения
  const existingImages = new Set(
    Array.from(gallerySection.querySelectorAll("img")).map((img) => img.src)
  );

  // Связь изображений с их группами
  const imageGroups = {
    [ext1_1]: "e1",
    [ext2_1]: "e2",
    [ext3_1]: "e3",
    [ext4_1]: "e4",
    [ext5_1]: "e5",
    [ext6_1]: "e6",
    [ext7_1]: "e7",
    [ext8_1]: "e8",
    [ext9_1]: "e9",
    [ext10_1]: "e10",
    [ext11_1]: "e11",
    [ext12_1]: "e12",
    [ext13_1]: "e13",
    [ext14_1]: "e14",
    [ext15_1]: "e15",
    [ext16_1]: "e16",
    [ext17_1]: "e17",
    [ext18_1]: "e18",
    [ext19_1]: "e19",
  };

  Object.keys(imageGroups).forEach((imageUrl) => {
    if (existingImages.has(imageUrl)) return; // Если изображение уже есть, пропускаем

    const link = document.createElement("a");
    link.href = `ext_gallery.html?group=${imageGroups[imageUrl]}`;
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

// INT GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.querySelector(".int-gallery");
  if (!gallerySection) return; // Проверяем, существует ли галерея

  // Получаем уже добавленные изображения
  const existingImages = new Set(
    Array.from(gallerySection.querySelectorAll("img")).map((img) => img.src)
  );

  // Связь изображений с их группами
  const imageGroups = {
    [int1_1]: "i1",
    [int2_1]: "i2",
    [int3_1]: "i3",
    [int4_1]: "i4",
    [int5_1]: "i5",
    [int6_1]: "i6",
    [int7_1]: "i7",
    [int8_1]: "i8",
    [int9_1]: "i9",
  };

  Object.keys(imageGroups).forEach((imageUrl) => {
    if (existingImages.has(imageUrl)) return; // Если изображение уже есть, пропускаем

    const link = document.createElement("a");
    link.href = `int_gallery.html?group=${imageGroups[imageUrl]}`;
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
