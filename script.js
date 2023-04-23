const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
if(inputBox.value === '')
{
    alert("You must write something!");
}
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //for appling a cross icon in the given list
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";//its the cross icon that we want to add in our code
        //for display purpose we use append mode here
        li.appendChild(span);//Child should be always be the C capital for display purpose
}
//all feature have to apply on after that to make it clear blank double quote are here.
inputBox.value="";
saveData();
//its help to add new element to the previous one.
}
//here we add the addeventlistener so functioning the click button
    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
            //help to check and save data
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
            //help to save data afte uncheck
        }
    },false);
    //for storing the containent while refreshing to see its as its before
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    //whenever we are coding the data agin it should save all the data that we writen before
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }showTask();//we have to call the function to follow the task