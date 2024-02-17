var a = console.log
var chk = document.querySelector('.check')
var all = document.querySelectorAll('.td')
var btns = document.querySelectorAll('.btn')
var btnss = document.querySelector('.btns')
var table_div = document.querySelector('.table-div')
var arr = [all[1], all[2], all[3], all[5], all[7], all[8], all[9], all[12], all[16], all[18], all[20], all[22], all[26], all[28], all[33], all[34], all[35], all[37], all[38], all[39], all[43], all[46], all[47], all[49], all[51], all[52], all[54], all[55], all[56], all[57], all[60], all[61], all[72], all[74], all[75], all[78], all[79], all[80]]
for (let i=0; i < arr.length; i++){
    arr[i].style.pointerEvents = 'none'
    arr[i].style.color = 'green'
}
function win(){
    var c = 0
    for(let i=0; i<81; i++){
        if(all[i].style.color=="black" && all[i].innerText !==""){
            c += 1
        }
    }
    if(c>42){
        table_div.innerHTML= '<div style="color: blue; font-size: 20px;">You won</div>'
        btnss.style.display = 'none'
        chk.style.display = 'none'
    
    }
}
function check(){
    all[0].innerText=='1'? all[0].style.color = 'black':all[0].style.color= 'red'
    all[4].innerText=='5'? all[4].style.color = 'black':all[4].style.color= 'red'
    all[6].innerText=='4'? all[6].style.color = 'black':all[6].style.color= 'red'
    all[10].innerText=='2'? all[10].style.color = 'black':all[10].style.color= 'red'
    all[11].innerText=='5'? all[11].style.color = 'black':all[11].style.color= 'red'
    all[13].innerText=='3'? all[13].style.color = 'black':all[13].style.color= 'red'
    all[14].innerText=='4'? all[14].style.color = 'black':all[14].style.color= 'red'
    all[15].innerText=='7'? all[15].style.color = 'black':all[15].style.color= 'red'
    all[17].innerText=='8'? all[17].style.color = 'black':all[17].style.color= 'red'
    all[19].innerText=='4'? all[19].style.color = 'black':all[19].style.color= 'red'
    all[21].innerText=='1'? all[21].style.color = 'black':all[21].style.color= 'red'
    all[23].innerText=='6'? all[23].style.color = 'black':all[23].style.color= 'red'
    all[24].innerText=='9'? all[24].style.color = 'black':all[24].style.color= 'red'
    all[25].innerText=='5'? all[25].style.color = 'black':all[25].style.color= 'red'
    all[27].innerText=='4'? all[27].style.color = 'black':all[27].style.color= 'red'
    all[29].innerText=='2'? all[29].style.color = 'black':all[29].style.color= 'red'
    all[30].innerText=='6'? all[30].style.color = 'black':all[30].style.color= 'red'
    all[31].innerText=='8'? all[31].style.color = 'black':all[31].style.color= 'red'
    all[32].innerText=='5'? all[32].style.color = 'black':all[32].style.color= 'red'
    all[36].innerText=='5'? all[36].style.color = 'black':all[36].style.color= 'red'
    all[40].innerText=='1'? all[40].style.color = 'black':all[40].style.color= 'red'
    all[41].innerText=='3'? all[41].style.color = 'black':all[41].style.color= 'red'
    all[42].innerText=='2'? all[42].style.color = 'black':all[42].style.color= 'red'
    all[44].innerText=='4'? all[44].style.color = 'black':all[44].style.color= 'red'
    all[45].innerText=='7'? all[45].style.color = 'black':all[45].style.color= 'red'
    all[48].innerText=='4'? all[48].style.color = 'black':all[48].style.color= 'red'
    all[50].innerText=='9'? all[50].style.color = 'black':all[50].style.color= 'red'
    all[53].innerText=='6'? all[53].style.color = 'black':all[53].style.color= 'red'
    all[58].innerText=='4'? all[58].style.color = 'black':all[58].style.color= 'red'
    all[59].innerText=='7'? all[59].style.color = 'black':all[59].style.color= 'red'
    all[62].innerText=='9'? all[62].style.color = 'black':all[62].style.color= 'red'
    all[63].innerText=='3'? all[63].style.color = 'black':all[63].style.color= 'red'
    all[64].innerText=='1'? all[64].style.color = 'black':all[64].style.color= 'red'
    all[65].innerText=='7'? all[65].style.color = 'black':all[65].style.color= 'red'
    all[66].innerText=='2'? all[66].style.color = 'black':all[66].style.color= 'red'
    all[67].innerText=='9'? all[67].style.color = 'black':all[67].style.color= 'red'
    all[68].innerText=='8'? all[68].style.color = 'black':all[68].style.color= 'red'
    all[69].innerText=='6'? all[69].style.color = 'black':all[69].style.color= 'red'
    all[70].innerText=='4'? all[70].style.color = 'black':all[70].style.color= 'red'
    all[71].innerText=='5'? all[71].style.color = 'black':all[71].style.color= 'red'
    all[73].innerText=='5'? all[73].style.color = 'black':all[73].style.color= 'red'
    all[76].innerText=='6'? all[76].style.color = 'black':all[76].style.color= 'red'
    all[77].innerText=='1'? all[77].style.color = 'black':all[77].style.color= 'red'
    
}
Array.from(all).forEach((e)=>{
    e.onclick = ()=>{
        Array.from(btns).forEach((f)=>{
            f.onclick = ()=>{
                e.innerText = f.innerText
                e.style.color = 'black'
            }
        })
    }
})
chk.onclick = ()=>{
    check()
    win()
}
