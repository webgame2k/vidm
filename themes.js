window.onload = function(){
 loadTheme()
};
function loadTheme() {      
 
}

function setTheme() {      
 var element = document.body;
 
 if (themeC.value==1) {
  element.classList = "normal";
 }
 else if (themeC.value==2) {
  element.classList = "dark-mode"; 
 }
 else {
  element.classList = "d3v-mode";
 }
}

