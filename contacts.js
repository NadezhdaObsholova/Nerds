const contacts_button = document.querySelector('.connection .button');
const pop_up = document.querySelector('.pop-up');
const pop_up_close = pop_up.querySelector('.close');
const pop_up_form = pop_up.querySelector('.pop-up-form');

const pop_up_name = pop_up.querySelector('.name');
const pop_up_email = pop_up.querySelector('.email');
const pop_up_message = pop_up.querySelector('.message');



const slade_1 = document.querySelector('.slide-1');
const slade_2 = document.querySelector('.slide-2');
const slade_3 = document.querySelector('.slide-3');

const button_slide_1 = document.querySelector('.button-slide-1');
const button_slide_2 = document.querySelector('.button-slide-2');
const button_slide_3 = document.querySelector('.button-slide-3');
console.log(button_slide_3);


button_slide_1.addEventListener('click', function(){
  
  if(button_slide_1.classList.contains('current')){   
    return
  }else{
  slade_1.classList.remove('hidden');
  slade_2.classList.add('hidden');
  slade_3.classList.add('hidden');
  button_slide_1.classList.add('current');
  button_slide_2.classList.remove('current');
  button_slide_3.classList.remove('current');
  }
})

button_slide_2.addEventListener('click', function(){
  
  if(button_slide_2.classList.contains('current')){  
    return
  }else{  
  slade_2.classList.remove('hidden');
  slade_1.classList.add('hidden');
  slade_3.classList.add('hidden');
  button_slide_2.classList.add('current');
  button_slide_1.classList.remove('current');
  button_slide_3.classList.remove('current');
  }
})

button_slide_3.addEventListener('click', function(){
  if(button_slide_3.classList.contains('current')){  
    return
  }else{     
  slade_3.classList.remove('hidden');
  slade_1.classList.add('hidden');
  slade_2.classList.add('hidden');
  button_slide_3.classList.add('current');
  button_slide_1.classList.remove('current');
  button_slide_2.classList.remove('current');
  }
})








let isStorageSupport = true;
let storage = "";    
   try {
      storage = localStorage.getItem("name");
     
    } catch (err) {
      isStorageSupport = false;
    };


pop_up_close.addEventListener('click', function(){
    pop_up.classList.remove('display-show', 'modal-error');
    
});

window.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
    pop_up.classList.remove('display-show', 'modal-error');
    
}
});



contacts_button.addEventListener('click', () => {
        pop_up.classList.add('display-show');
        pop_up_name.focus();
        if (storage) {
            pop_up_name.value = storage;
            pop_up_email.value = localStorage.getItem("email");
          }
        });

pop_up_form.addEventListener("submit", (evt) => {

    if(!pop_up_name.value || !pop_up_email.value || !pop_up_message.value){
        evt.preventDefault();
        pop_up.classList.remove('modal-error');
        pop_up.offsetWidth = pop_up.offsetWidth;
        pop_up.classList.add('modal-error');
    };

    if (isStorageSupport) {
       localStorage.setItem("name", pop_up_name.value);
       localStorage.setItem("email", pop_up_email.value);
    };                    
    
});




