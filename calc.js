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
function area1() {
    let check=document.getElementsByName('fl');
    let checkarea=document.getElementsByName('fln');
    for(let i=0; i<check.length; i++){
        console.log(i);
        console.log(check[i].checked);
        if(check[i].checked){
            // console.log(checkarea[i]);
            console.log(document.getElementsByName('fln')[i]); 
            // checkarea[i].style.display='block';  
            document.getElementsByName('fln')[i].style.display='table-cell';
            
        }
        else{
            checkarea[i].style.display='none'
        }
    } 
} 
