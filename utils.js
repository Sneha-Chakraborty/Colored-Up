const myButton = document.querySelector(".my-button");
console.log(myButton);

const bodyElement = document.querySelector("body");
console.log(bodyElement);


function randomColorGenerator(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

myButton.addEventListener("click", (e)=>{
    const randomColor = randomColorGenerator();
    console.log(randomColor);
    bodyElement.style.backgroundColor = randomColor;
});



