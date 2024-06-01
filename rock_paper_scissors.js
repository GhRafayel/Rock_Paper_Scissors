
const  btnScissorsr =  document.querySelector('.button-scissors');
const  stone  =  document.querySelector('.button-stone');
const  paper =  document.querySelector('.button-paper');
const  won    =  document.querySelector('.button-won');
const You = document.getElementById('people');
const compRobot = document.getElementById('compRobot');
const Your_points =  document.getElementById('Your_points');
const Comouter_points = document.getElementById('Comouter_points');
const resoult = document.getElementById('resoult');

let rock_paper_scissors_imgArray = ['./img/scissors.png', './img/stone.png', './img/paper.png' ];
let rock_paper_scissors_index = 0   
let rock_paper_scissors_Your_Nambers= 0;
let rock_paper_scissors_computer_Nambers = 0;

function rock_paper_scissors_HTML (num1,num2){
    Comouter_points.rock_paper_scissors_HTML = rock_paper_scissors_computer_Nambers > 1 ? `  ${rock_paper_scissors_computer_Nambers} Points` : ` ${rock_paper_scissors_computer_Nambers} Point` ;
    Your_points.rock_paper_scissors_HTML = rock_paper_scissors_Your_Nambers > 1 ? ` Points ${rock_paper_scissors_Your_Nambers}` : `Point ${rock_paper_scissors_Your_Nambers}` ;
    
    You.src = rock_paper_scissors_imgArray[num1];
    compRobot.src = rock_paper_scissors_imgArray[num2];

    
}
btnScissorsr.addEventListener('click', () => {
    clearInterval(interval);
    //audio('/public/audio/click1.wav')
    let computer =  Math.floor(Math.random() * 3);
    resoult.rock_paper_scissors_HTML = '' ;
    
     if(computer === 1){
        rock_paper_scissors_computer_Nambers += 1
    }
     if(computer === 2){
       rock_paper_scissors_Your_Nambers += 1;
    }
    rock_paper_scissors_HTML(0,computer);
});
stone.addEventListener('click',  () => {
    clearInterval(interval);
    //audio('/public/audio/click1.wav')
    let computer =  Math.floor(Math.random() * 3);
    resoult.rock_paper_scissors_HTML = '' ;
    
    if(computer === 0){
       rock_paper_scissors_Your_Nambers+= 1;
    }     
    if(computer === 2){
        rock_paper_scissors_computer_Nambers  += 1;
    }
    rock_paper_scissors_HTML(1,computer);

   
});
paper.addEventListener('click', () => {
    clearInterval(interval);
    //audio('/public/audio/click1.wav')
    let computer =  Math.floor(Math.random() * 3);
    resoult.rock_paper_scissors_HTML = '' ;
    
    if(computer === 0){
        rock_paper_scissors_computer_Nambers  += 1;
    }
    if(computer === 1){
      rock_paper_scissors_Your_Nambers+= 1;
    }
    rock_paper_scissors_HTML(2,computer);

    
});

won.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval( foo, 400);
    if(rock_paper_scissors_Your_Nambers > rock_paper_scissors_computer_Nambers){
        resoult.rock_paper_scissors_HTML = 'You win!' ;
    } else if(rock_paper_scissors_Your_Nambers === rock_paper_scissors_computer_Nambers){
        resoult.rock_paper_scissors_HTML = 'No win!!' ;
    }
    else {
        resoult.rock_paper_scissors_HTML = 'You lost!' ;
    }
    rock_paper_scissors_Your_Nambers= 0;
    rock_paper_scissors_computer_Nambers = 0;
    Your_points.rock_paper_scissors_HTML = 0;
    Comouter_points.rock_paper_scissors_HTML = 0;
    

});
function foo (){
    
    You.src = rock_paper_scissors_imgArray[rock_paper_scissors_index];
   
    rock_paper_scissors_index++;
    if(rock_paper_scissors_index >= 3) rock_paper_scissors_index = 0;
    compRobot.src = rock_paper_scissors_imgArray[rock_paper_scissors_index]
    
}
interval = setInterval( foo, 600);


