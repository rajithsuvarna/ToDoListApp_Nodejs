//getting all the classnames from the created tasks
let categories = document.getElementsByClassName("cat-div");

//to change the category backgroundcolor and color according to the category
for (let i = 0; i < categories.length; i++) {
  //categories[i].textContent will give the text content of category
  if (categories[i].textContent == "Personal") {
    categories[i].style.backgroundColor = "#10b95d";
    categories[i].style.color = "white";
  } else if (categories[i].textContent == "Work") {
    categories[i].style.backgroundColor = "purple";
    categories[i].style.color = "white";
  } else if (categories[i].textContent == "School") {
    categories[i].style.backgroundColor = "#C9710f";
    categories[i].style.color = "white";
  } else if (categories[i].textContent == "Cleaning") {
    categories[i].style.backgroundColor = "#Ce1632";
    categories[i].style.color = "white";
  } else if (categories[i].textContent == "Other") {
    categories[i].style.backgroundColor = "#107bb9";
    categories[i].style.color = "white";
  }
}
