let circle = document.querySelector(".circle");
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "a" || e.key === "A") {
        let currLeft;
        if (!circle.style.left) {
            currLeft = 0;
        } else {
            currLeft = parseInt(circle.style.left);
        }
        let newLeft = currLeft - 20;
        circle.style.left = newLeft + "px";
    } else if (e.key === "d" || e.key === "D") {
        let currLeft;
        if (!circle.style.left) {
            currLeft = 0;
        } else {
            currLeft = parseInt(circle.style.left);
        }
        let newLeft = currLeft + 20;
        circle.style.left = newLeft + "px";
    } else if (e.key === "s" || e.key === "S") {
        let currTop;
        if (!circle.style.top) {
            currTop = 0;
        } else {
            currTop = parseInt(circle.style.top);
        }
        let newTop = currTop + 20;
        circle.style.top = newTop + "px";
    } else if (e.key === "w" || e.key === "W") {
        let currTop;
        if (!circle.style.top) {
            currTop = 0;
        } else {
            currTop = parseInt(circle.style.top);
        }
        let newTop = currTop - 20;
        circle.style.top = newTop + "px";
    }
});