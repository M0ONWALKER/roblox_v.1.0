downloadquantity = document.querySelector(".number_download");
downloadquantity.textContent = Math.floor(200000 + Math.random() * 400000);

//Получаем секции которыми нужно управлять
offsections = document.querySelectorAll(".initial_another_section");
//Получаем кнопки с помощью которых будем это делать
opensections = document.querySelector(".initial_one_section_btn");
closesections = document.querySelector(".initial_another_section_btn")
//Преждевременно закрываем секции
offsections.forEach(item => {
  item.style.display = "none";
});

opensections.addEventListener("click", function(){
  offsections.forEach(item => {
    item.style.display = "";
  });
  opensections.style.display = "none";
})

closesections.addEventListener("click", function(){
  offsections.forEach(item => {
    item.style.display = "none";
  });
  opensections.style.display = "";
})
