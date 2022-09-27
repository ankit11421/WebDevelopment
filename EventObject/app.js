// const input = document.querySelector("input");

// input.addEventListener('keydown', function (e){
//     console.log(e.key);
//     console.log(e.code);
// });

window.addEventListener("keydown", function(e){
// console.log(e.key);
// console.log(e.code)

switch(e.code){
    case "ArrowUp":
        console.log("UP!")
        break;
    case "ArrowDown":
        console.log("DOWN!")
        break;

    default:
        console.log("Ignore");
}
})