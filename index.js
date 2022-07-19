var screen = document.getElementById('screen');
buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',function(e){
        btntxt=e.target.innerText;
        console.log(btntxt)
        if(btntxt == '='){
            screen.value = eval(screen.value)
        }
        else if(btntxt == 'C'){
            screen.value=""
        }
        else{
            screen.value += btntxt;}



    })
    

}