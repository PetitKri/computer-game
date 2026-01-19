//HW 1
// Swal.fire({
//     title: "Drag me!",
//     icon: "success",
//     draggable: true
//   });

//HW 2

// let color = ('red');
// function bodyColor(){
//     document.body.style.backgroundColor=color;
// }

// setTimeout(bodyColor, 3000);

//HW 3
// const text = "I love NYC"
// console.log(text.charAt(5));

//game up
let text = 'Human vs Computer';
let i=0;
let speed=120;

function type(){
    if(i<text.length){
        document.querySelector('#heading').textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();

const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.keyCode===13){
        play();
    }
})

button.addEventListener('click', play);

function play(){
    const userNumber=document.querySelector('#guess').value;
    
    if(userNumber<1 || userNumber>20){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Choose between 1-20!",
          });
    }

    else if (isNaN(userNumber)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Choose a number!",
          });
    }

    else{
        if(userNumber>answer){
            Swal.fire("Pick a smaller number!",
                "The computer has the lead.");
        }

        else if(userNumber<answer){
            Swal.fire("Pick a bigger number!",
                "The computer has the lead.");  
            }

        else{
            Swal.fire({
                title: "Victory is yours!",
                imageUrl: "https://images.unsplash.com/photo-1634454686481-dff1eaa44c21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lufGVufDB8MXwwfHx8Mg%3D%3D",
                imageWidth: 350,
                imageHeight: 500,
              });
        }    
    }
}
