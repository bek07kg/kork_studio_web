let currentImageIndex = 0;
let currentImageGroup = []; // Массив с изображениями для текущей группы

document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.getElementById("project-gallery");
  if (!gallerySection) return;

  // Получаем параметр из URL
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");

  // Объекты с группами изображений (пример)
  const imageGroups = {
    e1: e1,
    e2: e2,
    e3: e3,
    e4: e4,
    e5: e5,
    e6: e6,
    e7: e7,
    e8: e8,
    e9: e9,
    e10: e10,
    e11: e11,
    e12: e12,
    e13: e13,
    e14: e14,
    e15: e15,
    e16: e16,
    e17: e17,
    e18: e18,
    e19: e19,
  };

  // Очищаем галерею перед добавлением новых изображений
  gallerySection.innerHTML = "";

  // Если группа найдена, загружаем изображения
  if (imageGroups[group]) {
    currentImageGroup = imageGroups[group];
    const uniqueImages = new Set();

    currentImageGroup.forEach((imageUrl) => {
      if (!uniqueImages.has(imageUrl)) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Проект";
        img.loading = "lazy";
        gallerySection.appendChild(img);

        img.onclick = function () {
          openModal(imageUrl); // Открытие модального окна при клике
        };

        uniqueImages.add(imageUrl);
      }
    });
  } else {
    gallerySection.innerHTML = "<p>Проект не найден.</p>";
  }
});

// Функция для открытия изображения в модальном окне
function openModal(imageUrl) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imageUrl;

  currentImageIndex = currentImageGroup.indexOf(imageUrl);

  // Обработка закрытия модального окна
  const closeBtn = document.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Обработчики стрелок для переключения изображений
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  leftButton.onclick = function () {
    // Переходим к предыдущему изображению
    currentImageIndex =
      (currentImageIndex - 1 + currentImageGroup.length) %
      currentImageGroup.length;
    modalImg.src = currentImageGroup[currentImageIndex];
  };

  rightButton.onclick = function () {
    // Переходим к следующему изображению
    currentImageIndex = (currentImageIndex + 1) % currentImageGroup.length;
    modalImg.src = currentImageGroup[currentImageIndex];
  };
}
