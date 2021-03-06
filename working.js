var students = [
    {id: 1,name: "John",score: 90 },
    {id: 2, name: "Larry", score: 60},
    {id: 3, name: "Joseph", score: 50},
    {id: 4, name: "Karla", score: 48},
];

// document.write(students.length);
document.write("<pre class='alert alert-secondary'>");
document.write(JSON.stringify(students, undefined, 2));
document.write("</pre>");

var ids = [];
students.forEach(student => {
    ids.push(student.id);
})

var names = [];
students.forEach(student => {
    names.push(student.name);
})

var scores = [];
students.forEach(score => {
    scores.push(score.score);
})

document.writeln(ids);
document.writeln(scores);
document.writeln(names);


function loadData(){

    var i = 0;
    let dataList =  document.getElementById("dataList");
    

    while(i < students.length){
       
        var listItem = document.createElement("li");
    
        console.log(students[i]);
        listItem.innerText = students[i].id + students[i].name + students[i].score;

        dataList.appendChild(listItem);
        
        i = i + 1; // alternative i++
        
    } 
}

function calculo(){
    let sum = scores.reduce((previus, current) => current += previus);
    let avg = sum / scores.length;
    return avg
}

function Average(){
    let averageprint = document.getElementById("averageprint");
    let avg = calculo();
    console.log(avg)

    averageprint.innerText = avg
    averageprint.innerHTML = avg
    averageprint.classList.add("badge");
    averageprint.classList.add("badge-info");
}

function table(){
    
    var i = 0;
    let dataList =  document.getElementById("dataList");
    

    while(i < students.length){
       
        var listItem = document.createElement("section");

        console.log(students[i]);
        listItem.classList.add("row");

        var id = document.createElement("section");
        id.innerText = students[i].id;
        listItem.appendChild(id);
        id.classList.add("col");
        
        var name = document.createElement("section");
        name.innerText = students[i].name;
        listItem.appendChild(name);
        name.classList.add("col");

        var score = document.createElement("section")
        score.innerText = students[i].score;
        listItem.appendChild(score);
        score.classList.add("col");

        dataList.appendChild(listItem);  
        i = i + 1; // alternative i++

        if(students[i].score < 60){
            score.classList.add("badge");
            //score.classList.add("badge-pill");
            score.classList.add("badge-danger");
        }
        
    }

   
}

