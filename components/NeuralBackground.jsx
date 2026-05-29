"use client";

import { motion } from "framer-motion";

export default function NeuralBackground(){

return(

<div
className="
fixed
inset-0
pointer-events-none
-z-10
overflow-hidden">

{/* DARK BASE */}

<div
className="
absolute
inset-0

bg-gradient-to-b
from-[#020617]
via-[#050816]
to-[#081224]"
/>

{/* CYBER GRID */}

<div
className="
absolute
inset-0

opacity-[0.12]

bg-[linear-gradient(rgba(0,245,255,.14)_1px,transparent_1px),
linear-gradient(90deg,rgba(0,245,255,.14)_1px,transparent_1px)]

bg-[size:60px_60px]"
/>

{/* LARGE CYAN GLOW */}

<motion.div

animate={{
x:[0,120,0],
y:[0,-80,0]
}}

transition={{
duration:16,
repeat:Infinity
}}

className="
absolute

top-[-180px]
left-[-180px]

w-[800px]
h-[800px]

rounded-full

bg-cyan-500/18

blur-[180px]"
/>

{/* LARGE PURPLE GLOW */}

<motion.div

animate={{
x:[0,-140,0],
y:[0,120,0]
}}

transition={{
duration:18,
repeat:Infinity
}}

className="
absolute

bottom-[-220px]
right-[-180px]

w-[850px]
h-[850px]

rounded-full

bg-purple-600/18

blur-[180px]"
/>

{/* CENTER LIGHT COLUMN */}

<div
className="
absolute

left-1/2
top-0

-translate-x-1/2

w-[500px]
h-full

bg-cyan-500/6

blur-[120px]"
/>

{/* NEURAL LINES */}

<svg
className="
absolute
inset-0
w-full
h-full
opacity-25">

<line
x1="10%"
y1="15%"
x2="35%"
y2="40%"
stroke="#00F5FF"
strokeWidth="2"
/>

<line
x1="35%"
y1="40%"
x2="60%"
y2="20%"
stroke="#8B5CF6"
strokeWidth="2"
/>

<line
x1="60%"
y1="20%"
x2="85%"
y2="45%"
stroke="#00F5FF"
strokeWidth="2"
/>

<circle cx="10%" cy="15%" r="7" fill="#00F5FF"/>
<circle cx="35%" cy="40%" r="7" fill="#8B5CF6"/>
<circle cx="60%" cy="20%" r="7" fill="#00F5FF"/>
<circle cx="85%" cy="45%" r="7" fill="#8B5CF6"/>

</svg>

</div>

)

}