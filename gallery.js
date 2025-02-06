document.addEventListener("DOMContentLoaded", function () {
  const gallerySection = document.getElementById("project-gallery");
  if (!gallerySection) return; // Проверяем, есть ли секция галереи

  // Получаем параметр из URL
  const params = new URLSearchParams(window.location.search);
  const group = params.get("group");

  // Объекты с группами изображений (пример)
  const imageGroups = {
    c1: c1,
    e11: e11,
    i3: i3,
    e2: e2,
    e12: e12,
    e17: e17,
    e16: e16,
    i9: i9,
    i4: i4,
    e8: e8,
  };

  // Очищаем галерею перед добавлением новых изображений
  gallerySection.innerHTML = "";

  // Если группа найдена, загружаем изображения
  if (imageGroups[group]) {
    const uniqueImages = new Set(); // Используем Set для предотвращения дубликатов

    imageGroups[group].forEach((imageUrl) => {
      if (!uniqueImages.has(imageUrl)) {
        // Если изображение ещё не добавлено
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Проект";
        img.loading = "lazy";
        gallerySection.appendChild(img);

        // Обработка клика по изображению
        img.onclick = function () {
          // Здесь можно добавить код для открытия изображения в модальном окне
          openModal(imageUrl);
        };

        uniqueImages.add(imageUrl); // Добавляем в Set
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

  // Отображаем модальное окно с изображением
  modal.style.display = "block";
  modalImg.src = imageUrl;

  // Закрытие модального окна
  const closeBtn = document.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
}
