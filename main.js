const headings = document.querySelectorAll(".sectionLink");
headings.forEach((heading) => {
  heading.addEventListener("click", () => scrollTo(heading.id));
});

const scrollTo = (element) => {
  const finder = "#" + element + "Section";
  console.log(finder);
  const e = document.querySelector(finder);

  e.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
