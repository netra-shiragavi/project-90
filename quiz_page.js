function send(){
    p1 = document.getElementById("no.1").value;
    p2 = document.getElementById("no.2").value;

    localStorage.setItem("p1", p1);
    localStorage.setItem("p2", p2);

    window.location="quiz2.html";
}

