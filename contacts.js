const to_write_button = document.querySelector('.connection .button');
const pop_up = document.querySelector('.pop-up');
const pop_up_close = pop_up.querySelector('.close');
const pop_up_form = pop_up.querySelector('.pop-up-form');

let pop_up_name = pop_up.querySelector('.name');
let pop_up_email = pop_up.querySelector('.email');
let pop_up_message = pop_up.querySelector('.message');


to_write_button.addEventListener('click', () => {
        pop_up.classList.remove('display-none');
        pop_up.focus();
    });

pop_up_close.addEventListener('click', function(){
    pop_up.classList.add('display-none');
});

pop_up.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
    pop_up.classList.add('display-none');}
});

pop_up_form.addEventListener("submit", (evt) => {
    if(!pop_up_name.value || !pop_up_email.value || !pop_up_message.value){
        console.log('dsfsdf');
        evt.preventDefault()}else{
            localStorage.setItem("email", pop_up_email.value);
            localStorage.setItem("name", pop_up_name.value);
        };
    });

