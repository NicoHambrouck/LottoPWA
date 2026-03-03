

function MinMaxCheck(number){
    let input = document.getElementById(number);
    if(input.value < 0){
        input.value = 0;
    }
    else if(input.value > 50){
        input.value = 50;
    }
}

function LottoGo(){
    let ul = document.getElementById("list");
    var items = ul.querySelectorAll("li");
    items.forEach(element => {
        element.innerHTML = Math.floor(Math.random() * 51)
    });

    let result = document.getElementById("result");
    let count = 0;
    for (let index = 0; index < items.length; index++) {
        let userNumber = document.getElementById("nb"+index); 
        if(items[index] == userNumber){
            count++;
        }
    }
    result.innerHTML = "Vous avez obtenu " + count + " chiffres sur " + items.length;
}