export default function Skills(){

let skills=[
"HTML",
"CSS",
"JavaScript",
"React",
"GitHub",
"UI Design"
]


return(

<section className="skills" id="skills">

<h1>My Skills</h1>


<div className="skill-container">

{
skills.map((skill)=>(
<div className="skill-card">

{skill}

</div>
))
}


</div>


</section>

)

}