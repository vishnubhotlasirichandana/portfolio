"use client";

import { motion } from "framer-motion";

export default function Experience(){

return(

<section className="max-w-6xl mx-auto px-8 py-28">

<h2 className="text-5xl font-bold text-center
mb-20 text-purple-400">

Experience

</h2>

<motion.div

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}

className="glass rounded-3xl p-10">

<h3 className="text-3xl font-bold text-cyan-400">

Full Stack Web Developer Intern

</h3>

<p className="text-purple-300 mt-3">

KriBudWebTech | Dec 2025 – Mar 2026

</p>

<ul className="mt-8 space-y-4 text-gray-300">

<li>• Built full-stack applications with scalable backend services.</li>

<li>• Developed and consumed REST APIs.</li>

<li>• Optimized frontend rendering and backend performance.</li>

<li>• Debugged and enhanced production-ready applications.</li>

</ul>

</motion.div>

</section>

)

}