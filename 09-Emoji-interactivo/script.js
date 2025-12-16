const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove" , (e) => {
    //console.log(e.clientX);
    //console.log(e.clientY);

    let mousex = e.clientX;
    let mousey = e.clientY;

    cursor.style.left = ${mousex}px´;
    cursor.style.right = ${mousey}px´;
})

document.addEventListener("keydown" , (e) => {
    switch(e.key){
        case "1": 
        cursor.textContent = "🎶";
        document.body.style.backgroundColor = "#d50707ff";
        break;
        case "2": 
        cursor.textContent = "✨";
        document.body.style.backgroundColor = "#890ddbff";
        break;
        case "3": 
        cursor.textContent = "🐱‍💻";
        document.body.style.backgroundColor = "#11eea1ff";
        break;
        case "4": 
        cursor.textContent = "🐱‍🏍";
        document.body.style.backgroundColor = "#f7eb05ff";
        break;
    default:
        cursor.textContent = "🎂";
        document.body.style.backgroundColor = "#ee1111ff";
    }
})