"use client";

import { motion } from "framer-motion";

export default function About(){

return(

<section
id="about"
className="max-w-6xl mx-auto px-8 py-32">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}

className="glass rounded-3xl p-10">

<h2 className="text-5xl font-bold mb-8 text-cyan-400">

About Me

</h2>

<p className="text-gray-300 text-lg leading-9">

Computer Science undergraduate specializing in
AI & ML with strong experience in Full-Stack
Development, Workflow Automation, REST APIs,
and Machine Learning solutions.

I enjoy building scalable applications,
intelligent systems, and translating ideas
into impactful technical products.

</p>

</motion.div>

</section>

)

}