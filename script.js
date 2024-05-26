const stars = document.querySelectorAll(".star");

const reset = document.getElementById("reset");

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
  selected = false;
  stars.forEach((star) => star.classList.remove("selected", "disabled"));
});
