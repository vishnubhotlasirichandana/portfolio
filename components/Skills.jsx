"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [

{
name:"React.js",
level:92,
details:[
"Reusable Components",
"Frontend Architecture",
"Animation Systems"
]
},

{
name:"JavaScript",
level:90,
details:[
"ES6+",
"DOM Logic",
"Interactive UI"
]
},

{
name:"Tailwind CSS",
level:94,
details:[
"Responsive Design",
"Glassmorphism",
"Modern Layout Systems"
]
},

{
name:"HTML",
level:95,
details:[
"Semantic Structure",
"Accessibility",
"SEO Basics"
]
},

{
name:"CSS",
level:92,
details:[
"Animations",
"Layouts",
"Responsive Styling"
]
},

{
name:"Java",
level:85,
details:[
"OOP",
"DSA",
"Backend Logic"
]
},

{
name:"Spring Boot",
level:76,
details:[
"REST APIs",
"CRUD",
"Backend Services"
]
},

{
name:"REST API (CRUD)",
level:82,
details:[
"API Development",
"Integration",
"Data Handling"
]
},

{
name:"n8n",
level:80,
details:[
"Workflow Automation",
"Triggers",
"Integrations"
]
},

{
name:"Postman",
level:85,
details:[
"API Testing",
"Collections",
"Debugging"
]
},

{
name:"Git",
level:88,
details:[
"Version Control",
"Branching",
"Collaboration"
]
},

{
name:"GitHub",
level:90,
details:[
"Repositories",
"Deployment",
"Team Workflow"
]
},

{
name:"Scikit-learn",
level:78,
details:[
"Classification",
"Prediction Models",
"ML Pipelines"
]
},

{
name:"Pandas",
level:82,
details:[
"Data Cleaning",
"Analysis",
"Manipulation"
]
},

{
name:"NumPy",
level:80,
details:[
"Arrays",
"Vectorization",
"Numerical Computing"
]
},

{
name:"API Integration",
level:88,
details:[
"Frontend ↔ Backend",
"Third-Party APIs",
"Authentication"
]
},

{
name:"Workflow Automation",
level:84,
details:[
"Automation Logic",
"Triggers",
"Efficiency"
]
},

{
name:"Responsive Design",
level:93,
details:[
"Mobile First",
"Adaptive Layouts",
"Cross Device UI"
]
},

{
name:"AWS",
level:72,
details:[
"Cloud Basics",
"Deployment",
"Infrastructure"
]
},

{
name:"C",
level:80,
details:[
"Programming Logic",
"Memory Concepts",
"Problem Solving"
]
},

{
name:"Python",
level:88,
details:[
"Automation",
"Machine Learning",
"Backend Logic"
]
}

];

export default function Skills(){

const [active,setActive]=useState(null);

return(

<section
id="skills"
className="
max-w-7xl
mx-auto
px-8
py-36">

<h2
className="text-center text-6xl font-black mb-6">

<span
className="
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent">

TECH STACK

</span>

</h2>

<p
className="
text-center
text-gray-400
mb-20">

Hover a skill to inspect proficiency.

</p>

<div
className="
grid
lg:grid-cols-4
md:grid-cols-3
sm:grid-cols-2
gap-8">

{skills.map((skill,index)=>(

<motion.div

key={index}

onMouseEnter={()=>setActive(index)}
onMouseLeave={()=>setActive(null)}

whileHover={{
scale:1.04,
rotateX:4,
rotateY:-4
}}

transition={{
type:"spring",
stiffness:240
}}

className="
relative
rounded-[28px]
overflow-hidden
bg-white/5
backdrop-blur-xl
border border-white/10
min-h-[130px]
cursor-pointer
group

hover:border-cyan-400/40
duration-500"

>

<div
className="
absolute inset-0
bg-gradient-to-br
from-cyan-500/10
to-purple-500/10
opacity-0
group-hover:opacity-100
transition-all
duration-500"
/>

<div className="p-8 relative z-10">

<h3
className="
text-2xl
font-bold
transition-all
group-hover:text-cyan-400">

{skill.name}

</h3>

{active===index && (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0
}}

className="mt-8">

<div
className="
flex justify-between
mb-3">

<span
className="text-gray-400">

Proficiency

</span>

<span
className="text-cyan-400 font-bold">

{skill.level}%

</span>

</div>

<div
className="
w-full
h-3
bg-black/40
rounded-full
overflow-hidden
mb-6">

<motion.div

initial={{width:0}}

animate={{
width:`${skill.level}%`
}}

transition={{
duration:.9
}}

className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-purple-500"
/>

</div>

<div
className="
space-y-3
text-sm
text-gray-300">

{skill.details.map((item,i)=>(

<motion.div

key={i}

initial={{
opacity:0,
x:-10
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:i*.08
}}

>

✦ {item}

</motion.div>

))}

</div>

</motion.div>

)}

</div>

</motion.div>

))}

</div>

</section>

)

}