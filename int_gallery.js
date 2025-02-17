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
    i1: i1,
    i2: i2,
    i3: i3,
    i4: i4,
    i5: i5,
    i6: i6,
    i7: i7,
    i8: i8,
    i9: i9,
    i10: i10,
    i11: i11,
    i12: i12,
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
