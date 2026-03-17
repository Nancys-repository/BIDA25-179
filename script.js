function goFinder(faculty){
localStorage.setItem("faculty", faculty);
window.location.href = "finder.html";
}

const courses = {
SCIS: ["Web Development", "Data Analytics"],
SFPS: ["Accounting", "Finance"],
SBL: ["Marketing", "Tourism"],
SPGS: ["MBA", "Research Methods"]
};

window.onload = function(){
let faculty = localStorage.getItem("faculty");

if(faculty){
document.getElementById("courses").innerHTML =
courses[faculty].map(c => `<p onclick="showDetails('${c}')">${c}</p>`).join("");
}
}

function showDetails(course){
alert(course + " details: duration, requirements, opportunities...");
}

function searchCourses(){
let input = document.getElementById("searchInput").value.toLowerCase();
let result = "";

for(let f in courses){
courses[f].forEach(c=>{
if(c.toLowerCase().includes(input)){
result += `<p onclick="showDetails('${c}')">${c}</p>`;
}
});
}

document.getElementById("results").innerHTML = result;
}
