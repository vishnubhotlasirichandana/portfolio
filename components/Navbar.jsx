"use client";

import { motion } from "framer-motion";

const navItems = [

{ name:"About", link:"#about" },
{ name:"Skills", link:"#skills" },
{ name:"Projects", link:"#projects" },
{ name:"Contact", link:"#contact" }

];

export default function Navbar(){

return(

<motion.header

initial={{
y:-80,
opacity:0
}}

animate={{
y:0,
opacity:1
}}

transition={{
duration:1
}}

className="
fixed
top-0
left-0
w-full
z-[999]
px-6
py-5"

>

<div
className="
max-w-7xl
mx-auto
flex
justify-between
items-center">

{/* LOGO */}

<motion.div

whileHover={{
scale:1.08
}}

className="
relative
group
cursor-pointer">

<div
className="
absolute
inset-0
bg-cyan-500
blur-2xl
opacity-20
group-hover:opacity-50
duration-500"/>

<h1
className="
relative
text-2xl
font-black
tracking-tight">

<span
className="
bg-gradient-to-r
from-cyan-400
via-blue-400
to-purple-500
bg-clip-text
text-transparent">

Siri.dev

</span>

</h1>

</motion.div>

{/* NAVIGATION */}

<nav
className="
hidden
md:flex
items-center
gap-3

bg-white/5
backdrop-blur-2xl

border
border-white/10

rounded-full

px-4
py-3

shadow-[0_0_40px_rgba(0,245,255,.08)]

">

{navItems.map((item,index)=>(

<motion.a

key={index}

href={item.link}

whileHover={{
y:-3,
scale:1.05
}}

whileTap={{
scale:.96
}}

className="
relative
px-5
py-3
rounded-full

text-gray-300
font-medium

hover:text-white

duration-300
group">

<span
className="
absolute
inset-0
rounded-full

bg-gradient-to-r
from-cyan-500/20
to-purple-500/20

opacity-0
group-hover:opacity-100

duration-300"/>

<span
className="relative">

{item.name}

</span>

</motion.a>

))}

</nav>

{/* RIGHT CTA */}

<div
className="
hidden
md:flex">

<motion.a

href="/resume.pdf"
download

whileHover={{
scale:1.08
}}

whileTap={{
scale:.95
}}

className="
relative
overflow-hidden

px-7
py-4

rounded-full

font-semibold

bg-gradient-to-r
from-cyan-500
to-blue-500

shadow-[0_0_30px_rgba(0,245,255,.25)]

hover:shadow-[0_0_45px_rgba(0,245,255,.45)]

duration-500">

Resume

</motion.a>

</div>

{/* MOBILE BUTTON */}

<button
className="
md:hidden

w-12
h-12

rounded-full

bg-white/10
backdrop-blur-xl

border
border-white/10">

☰

</button>

</div>

</motion.header>

)

}