  const menuBody = document.getElementById("menu__body");
  const menuIcon = document.getElementById("menu_icon");
 function addClass() {

   document.body.classList.toggle('_lock');
   menuBody.classList.toggle("_active");
   menuIcon.classList.toggle("_active");
        }

 function remClass() {

   document.body.classList.remove('_lock');
   menuBody.classList.remove("_active");
   menuIcon.classList.remove("_active");
        }