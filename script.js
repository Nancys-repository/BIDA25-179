const courses = {
SCIS: [
    {name:"Web Development", details:"Learn HTML, CSS, JS. Duration: 1 year. Careers: Developer"},
    {name:"Data Analytics", details:"Learn data tools. Duration: 1 year. Careers: Analyst"}
],
SFPS: [
    {name:"Accounting", details:"Finance basics. Duration: 1 year. Careers: Accountant"},
    {name:"Finance", details:"Investment skills. Careers: Banker"}
],
SBL: [
    {name:"Marketing", details:"Branding & sales. Careers: Marketer"},
    {name:"Tourism", details:"Travel industry. Careers: Tour manager"}
],
SPGS: [
    {name:"MBA", details:"Advanced business leadership"},
    {name:"Research Methods", details:"Academic research skills"}
]
};

function goFinder(faculty){
localStorage.setItem("faculty", faculty);
window.location.href = "finder.html";
}

window.onload = function(){
let faculty = localStorage.getItem("faculty");

if(faculty){
displayCourses(faculty);
}
}

function displayCourses(faculty){
let container = document.getElementById("courses");

container.innerHTML = courses[faculty].map(c =>
`<p onclick="showDetails('${c.details}')">${c.name}</p>`
).join("");
}

function showDetails(details){
let container = document.getElementById("courses");
container.innerHTML += `<div class="box">${details}</div>`;
}

/* SEARCH */
function searchCourses(){
let input = document.getElementById("searchInput").value.toLowerCase();
let results = "";

for(let f in courses){
courses[f].forEach(c=>{
if(c.name.toLowerCase().includes(input)){
results += `<p onclick="showDetails('${c.details}')">${c.name}</p>`;
}
});
}

document.getElementById("results").innerHTML = results;
}

