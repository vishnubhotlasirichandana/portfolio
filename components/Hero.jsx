"use client";

import { motion } from "framer-motion";

export default function Hero(){

return(

<section
className="
relative
min-h-screen
flex
items-center
justify-center
px-8
overflow-hidden">

<div
className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-20
items-center">

{/* LEFT SIDE */}

<div>

<motion.div

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="
inline-flex
items-center
gap-3
mb-8
px-5
py-3
rounded-full
bg-white/5
backdrop-blur-xl
border
border-cyan-400/20">

<div
className="
w-3
h-3
rounded-full
bg-cyan-400
animate-pulse"/>

<span
className="
text-gray-300
text-sm">

AI • Full Stack • Frontend Designer

</span>

</motion.div>

<motion.h1

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1.1}}

className="
text-6xl
lg:text-8xl
font-black
leading-[0.95]">

<span
className="
bg-gradient-to-r
from-white
via-cyan-300
to-purple-400
bg-clip-text
text-transparent">

Siri

</span>

<br/>

<span
className="
text-white">

Chandana

</span>

</motion.h1>

<motion.p

initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.4}}

className="
mt-8
text-cyan-400
font-semibold
text-2xl">

AI & Full-Stack Developer

</motion.p>

<motion.p

initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.6}}

className="
mt-8
max-w-2xl
text-gray-400
text-lg
leading-9">

Building intelligent systems,
premium user experiences,
scalable applications,
and visually impactful digital products.

</motion.p>

<div
className="
mt-12
flex
flex-wrap
gap-6">

<a

href="https://github.com/vishnubhotlasirichandana"
target="_blank"

className="
group
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-cyan-500
to-blue-500
font-bold
hover:scale-110
duration-300
shadow-[0_0_35px_rgba(0,245,255,.25)]">

GitHub →

</a>

<a

href="https://www.linkedin.com/in/sirichandanavishnubhotla/"
target="_blank"

className="
px-8
py-4
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-purple-400/20
hover:border-cyan-400
hover:scale-110
duration-300">

LinkedIn →

</a>

<a

href="/resume.pdf"
download

className="
px-8
py-4
rounded-2xl
bg-purple-600
hover:bg-purple-500
hover:scale-110
duration-300">

Resume

</a>

</div>

</div>

{/* RIGHT SIDE */}

<div
className="
relative
flex
justify-center">

<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
relative">

<div
className="
absolute
- inset-10
bg-gradient-to-r
from-cyan-500
to-purple-600
blur-[120px]
opacity-30"/>

<motion.div

whileHover={{
rotateY:10,
rotateX:8,
scale:1.04
}}

className="
relative
w-[420px]
h-[520px]
rounded-[40px]
overflow-hidden
bg-white/5
backdrop-blur-2xl
border
border-white/10
shadow-[0_0_80px_rgba(0,245,255,.15)]">

<img

src="/siri-photo.png"

alt="Siri"

className="
w-full
h-full
object-cover"

/>

<div
className="
absolute
bottom-0
left-0
right-0
p-8
bg-gradient-to-t
from-black/90
to-transparent">

<h3
className="
text-2xl
font-bold">

Creative Frontend Builder

</h3>

<p
className="
mt-3
text-gray-300">

AI + UI Engineering +
Modern Web Experiences

</p>

</div>

</motion.div>

<div
className="
absolute
-top-8
-right-10
glass
rounded-3xl
px-6
py-5">

<p
className="
text-cyan-400
font-bold
text-xl">

Frontend

</p>

<p
className="
text-gray-400
text-sm">

React • Tailwind • JS

</p>

</div>

<div
className="
absolute
-bottom-8
-left-8
glass
rounded-3xl
px-6
py-5">

<p
className="
text-purple-400
font-bold
text-xl">

AI / ML

</p>

<p
className="
text-gray-400
text-sm">

Scikit • Pandas • NumPy

</p>

</div>

</motion.div>

</div>

</div>

</section>

)

}