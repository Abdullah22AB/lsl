let title=document.getElementById('title');
let rows=document.getElementById('rows');
let col=document.getElementById('col');
let numberb=document.getElementById('copy');
let submit=document.getElementById('submit');
let tas=document.getElementById("tas");
let mood="create";
let tmp;
//create  product
let datapro;
if(localStorage.product!=null){
    datapro=JSON.parse(localStorage.product)
}
else{
    datapro=[];
}

submit.onclick=function(){
    let newpro={
        title:title.value.toLowerCase(),
        rows:rows.value,
        col:col.value,
        numberb:numberb.value,
        tas:tas.value
        
    };
    if(title.value!=''){
        if(mood==="create"){

            datapro.push(newpro);
            localStorage.setItem("product",JSON.stringify(datapro))
            
        }
        else{
            datapro[ tmp ] =newpro;
            mood="create"
            submit.innerHTML='Create'
        }
        
        showdata();
    }
    else{
        clear();
    }
    }
    
//clear inouts
function clear(){
    title.value="";
    rows.value='';
    col.value='';
    numberb.value='';
    tas.value=''
}
//show data
function showdata(){
    let table=''
    for(let i =1;i<datapro.length;i++ ) {
        table+=`
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].rows}</td>
        <td>${datapro[i].col}</td>
        <td>${datapro[i].numberb}</td>
        <td>${datapro[i].tas}</td>
        <td><button onclick="updatatedate(${i})" id="update">تعديل</button></td>
        <td><button onclick="delatedata(${i})" id="delate">حذف</button></td>
    </tr>
        `
        
        
    }
    document.getElementById("tbody").innerHTML=table
    

    }

showdata();
//delate one product
function delatedata(i){
datapro.splice(i,1);
localStorage.product=JSON.stringify(datapro)
showdata();
}

//update
function updatatedate(i){
title.value=datapro[i].title;
rows.value=datapro[i].rows;
col.value=datapro[i].col;
numberb.value=datapro[i].numberb;
tas.value=datapro[i].tas;
submit.innerHTML="Update"
mood="update";
tmp=i;
scroll({
    top:0,
    behavior:"smooth"
})
};

//search







let searchmood="title";
function searchdata(value){
    let table='';
    for(let i =0;datapro.length ;i++){
        if(datapro[i].title.includes(value)){
            table+=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].rows}</td>
            <td>${datapro[i].col}</td>
            <td>${datapro[i].numberb}</td>
            <td>${datapro[i].tas}</td>
            <td><button onclick="updatatedate(${i})" id="update">update</button></td>
            <td><button onclick="delatedata(${i})" id="delate">delate</button></td>
        </tr>
            `
        }
        document.getElementById("tbody").innerHTML=table
    
    }
}










