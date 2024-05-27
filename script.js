const stars = document.querySelectorAll(".star");

const reset = document.getElementById("reset");

const rating_section = document.querySelector('.rating-section');

const send = document.getElementById('send');

var selected = false;

stars.forEach((star, index) => {
  star.addEventListener("mouseenter", () => {
    if (!selected) {
      updateStar(index, "hover");
      star.classList.add("current");
    }
  });

  star.addEventListener("mouseleave", () => {
    resetStar();
  });

  star.addEventListener("click", () => {
    if (selected) return;
    selected = true;
    resetStar();
    updateStar(stars.length - 1, "disabled");
    updateStar(index, "selected");
  });
});

const updateStar = (n, type) => {
  for (let i = 0; i <= n; i++) {
    stars[i].classList.add(type);
  }
};

const resetStar = () => {
  stars.forEach((star) => star.classList.remove("hover", "current"));
};

reset.addEventListener("click", () => {
  rating_section.classList.add('hide');
  selected = false;
  setTimeout(() => {
    stars.forEach((star) => star.classList.remove("selected", "disabled"));
  }, 100);
  setTimeout(() => {
    rating_section.classList.remove('hide');
  }, 200);
});

send.addEventListener('click', () => {
  rating_section.classList.add('sended');
  setTimeout(() => {
    rating_section.remove();
  }, 1000)
});
