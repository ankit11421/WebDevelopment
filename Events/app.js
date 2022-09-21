const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255 );

    return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("click", function(){
        button.style.backgroundColor = makeRandColor();
        button.style.color = makeRandColor();
    });
}

const h1s = document.querySelectorAll("h1");

for(let h1 of h1s){
    h1.addEventListener("click", function(){
        h1.style.backgroundColor = makeRandColor();
        h1.style.color = makeRandColor();
    })
}