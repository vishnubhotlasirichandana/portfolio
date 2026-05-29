"use client";

import { motion } from "framer-motion";

const projects = [

{
title:"Automated Resume Screening System",
tag:"AI • n8n Workflow • Automation",

description:
"Built an AI-powered automated resume screening workflow using n8n automation pipelines. Designed intelligent screening logic, workflow orchestration and efficient processing for recruiter-friendly evaluation systems.",

tech:[
"n8n",
"AI Workflow",
"Automation",
"API Integration"
],

live:
"https://ai-resume-screener-frontend-mu.vercel.app/",

github:null,

gradient:
"from-cyan-500 to-blue-600"
},

{
title:"OrderNow Platform",

tag:"Full Stack • Backend",

description:
"Developed scalable backend services for a food delivery & grocery ordering platform with API workflows, data management and production-ready backend architecture.",

tech:[
"Java",
"Spring Boot",
"REST API",
"Backend"
],

github:
"https://github.com/srinvasreddyy/OD_Backend",

live:null,

gradient:
"from-purple-500 to-pink-600"
},

{
title:"Loan Default Prediction System",

tag:"Banking Domain • ML • Full Stack",

description:
"Designed and developed a full-stack machine learning system for real-time loan default prediction. Translated user and business requirements into structured workflows integrating frontend, backend and ML components. Optimized communication between services to ensure low-latency predictions and smooth user experience.",

tech:[
"Machine Learning",
"Python",
"Full Stack",
"Banking ML",
"Prediction System"
],

live:null,

github:null,

gradient:
"from-emerald-500 to-teal-600"
}

];

export default function Projects(){

return(

<section

id="projects"

className="
max-w-7xl
mx-auto
px-8
py-36">

<h2
className="
text-center
text-6xl
font-black
mb-6">

<span
className="
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent">

PROJECTS

</span>

</h2>

<p
className="
text-center
text-gray-400
mb-20">

Selected engineering, AI and automation work.

</p>

<div
className="
grid
lg:grid-cols-3
gap-10">

{projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{
y:-12,
scale:1.02
}}

transition={{
type:"spring",
stiffness:200
}}

className="
group
relative
overflow-hidden

rounded-[36px]

bg-white/5
backdrop-blur-2xl

border
border-white/10

p-9

hover:border-cyan-400/40

duration-500"

>

<div
className={`
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-all
duration-700

bg-gradient-to-br
${project.gradient}/10
`}
></div>

<div className="relative z-10">

<div
className="
inline-block

mb-6

px-4
py-2

rounded-full

bg-white/10

text-xs
tracking-wide
text-cyan-300">

{project.tag}

</div>

<h3
className="
text-3xl
font-black
leading-tight
mb-6">

{project.title}

</h3>

<p
className="
text-gray-400
leading-8
mb-8">

{project.description}

</p>

<div
className="
flex
flex-wrap
gap-3
mb-10">

{project.tech.map((item,i)=>(

<div

key={i}

className="
px-4
py-2

rounded-full

bg-black/30
border
border-white/10

text-sm">

{item}

</div>

))}

</div>

<div
className="
flex
gap-4
flex-wrap">

{project.live && (

<a

href={project.live}

target="_blank"

className="
px-6
py-3

rounded-2xl

font-semibold

bg-gradient-to-r
from-cyan-500
to-blue-500

hover:scale-105
duration-300">

Live Demo →

</a>

)}

{project.github && (

<a

href={project.github}

target="_blank"

className="
px-6
py-3

rounded-2xl

bg-white/10

border
border-white/10

hover:border-purple-400

hover:scale-105
duration-300">

GitHub →

</a>

)}

</div>

</div>

</motion.div>

))}

</div>

</section>

)

}