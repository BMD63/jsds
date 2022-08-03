function typeselect() {
    let typsel = document.getElementById('type').selectedIndex;
    if(typsel==1){
        let mssg=document.getElementById('select').innerHTML='<strong>Проект интерьера</strong>';
        document.getElementById('table').style.display='none';
    }
        else{
            let mssg=document.getElementById('select').innerHTML='<strong>Архитектурный проект здания</strong>';
            document.getElementById('table').style.display='block';
        }
    }
function area() {
    let check=document.getElementsByName('fl');
    let checkarea=document.getElementsByName('fln');
    for(let i=1; i<check.length; i++){
        if(check[i].checked){
            checkarea[i].style.display='table-cell'
        }
        else{
            checkarea[i].style.display='none'
        }
    }
}
