let typsel = document.getElementById('type');
function typeselect() { 
    if(typsel.selectedIndex==2){
        document.getElementById('select').innerHTML='<strong>Архитектурный проект здания</strong>';
        document.getElementById('table').style.display='block';
    }
        else{
        document.getElementById('select').innerHTML='<strong>Проект интерьера</strong>';
        document.getElementById('table').style.display='none';
        }
    }
    const check=document.getElementsByName('fl');
    const checkarea=document.getElementsByName('fln');
function area1() {
    for(let i=0; i<check.length; i++){
        /* console.log(i);
        console.log(check[i].checked); */
        if(check[i].checked){
            // console.log(checkarea[i]);
            // console.log(document.getElementsByName('fln')[i]); 
            checkarea[i].style.display='block';  
            // document.getElementsByName('fln')[i].style.display='table-cell';
        }
        else{
            checkarea[i].style.display='none'
            }
        } 
    } 
function resetform(){
    // location.reload();
    document.getElementById("calculator").reset();
    /* console.log("test")
    console.log(document.getElementById('type').selectedIndex); */
    typeselect();
    document.getElementById('select').innerHTML='';
    area1()
}
