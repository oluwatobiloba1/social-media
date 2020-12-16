function toggler(){
    var followersClass = document.querySelectorAll(".followers");
    var numClass = document.querySelectorAll(".num");
    var overviewClass = document.querySelectorAll(".overview");
    var posClass = document.querySelectorAll(".pos");
    var secondClass = document.querySelectorAll(".second");
    if (document.getElementById("toggle").checked){
        document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        document.body.style.color = "hsl(228, 12%, 44%)";
        followersClass.forEach(el => el.classList.add("card-check"));
        numClass.forEach(elem => elem.classList.add("light-mode"));
        overviewClass.forEach(elem => elem.classList.add("card-check")); 
        document.getElementById("title").classList.add("light-mode");
        document.getElementById("subTitle").style.color = "hsl(228, 12%, 44%)";
        document.getElementById("topbackg").style.backgroundColor = "hsl(225, 100%, 98%)";
        secondClass.forEach(el=>el.classList.add("light-mode"));
        
    }
    else{
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        document.body.style.color = "hsl(228, 34%, 66%)";
        followersClass.forEach(el => el.classList.remove("card-check"));
        overviewClass.forEach(elem => elem.classList.remove("card-check"));
        document.getElementById("title").classList.remove("light-mode");
        document.getElementById("subTitle").style.color = "hsl(228, 34%, 66%)";
        numClass.forEach(elem => elem.classList.remove("light-mode"));
        document.getElementById("topbackg").style.backgroundColor = "hsl(232, 19%, 15%)";
        posClass.forEach(el=>el.classList.remove("light-mode"));
        secondClass.forEach(el=>el.classList.remove("light-mode"));
    }
}