

function show() {  // Function to show the genres alternatively
    let div1 = document.querySelector('#div1');
    let div2 = document.querySelector('#div2');
    let div3 = document.querySelector('#div3');
    let div4 = document.querySelector('#div4');

    if (div1.style.display == "block") {
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div2.style.display = "block";
    } 
    else if (div2.style.display == "block"){
        div2.style.display = "none";
        div1.style.display = "none";
        div4.style.display = "none";
        div3.style.display = "block";
    }
    else if (div3.style.display == "block"){
        div1.style.display = "none";
        div3.style.display = "none";
        div2.style.display = "none";
        div4.style.display = "block";
    }
    else if (div4.style.display == "block"){
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div1.style.display = "block";
    }

  }