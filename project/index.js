const func = () => {
    if(document.querySelector("ul").style.visibility === "hidden"){
        document.querySelector("ul").style.visibility = "visible";
    }
    else{
        document.querySelector("ul").style.visibility = "hidden";
    }
};