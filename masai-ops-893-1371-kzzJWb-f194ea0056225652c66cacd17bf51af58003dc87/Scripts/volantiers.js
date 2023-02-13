// Write code related to Volatiers Page

let parent = document.querySelectorAll("tbody");

let data=JSON.parse(localStorage.getItem("Helpers"))||[];

appendata(data)
function appendata(data)
{
    parent.innerHTML="";

    data.forEach(function(ele,ind)
    {
        let tr=document.createElement("tr");

        let td1=document.createElement("td");
        td1.innerText=ele.name;

        let td2=document.createElement("td");
        td2.innerText=ele.phone;

        let td3=document.createElement("td");
        td3.innerText=ele.email;

        let td4=document.createElement("td");
        td4.innerText=ele.category;

        let td5=document.createElement("td");
        td5.innerText=ele.type;

        let td6=document.createElement("td");
        td6.innerText="Delete";

        td6.addEventListener("click",function(){
            let ele=data.splice(ind,1);
            let categorylist=JSON.parse(localStorage.getItem("Helpers"))||[];
            categorylist.push(ele[0])
            localStorage.setItem("Helpers",JSON.stringify(categorylist));
            localStorage.setItem("Heplers",JSON.stringify(data));
            appendata(data);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        parent.append(tr);
    })
}
let select=document.querySelector("select");
