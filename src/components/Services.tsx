import Service from './Service';
import React from "react";

export default function Services() {
  return (
    <section id='services' className="py-[80px] px-8 bg-services bg-cover text-center text-light">
      <h2 className="font-black text-accent mb-8 after:w-[2em] after:h-px after:opacity-25 after:bg-light after:block after:mt-2 after:mx-auto">What I do</h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 max-w-[1000px] mx-auto">
        <Service title='Development' body='I think I can code almost anything if I put my mind to it. I have knowledge in multiple programming languages like Java, Groovy, Go, Javascript and a bit of knowledge in some others.'/>
        <Service title='DevOps' body="I am comfortable working in a DevOps environment. I have experience working with CICD tools like Jenkins, Kubernetes, Artifactory, OpenShift, Helm, Terraform, etc."/>
      </div>
      <a href='#work' className="inline-block uppercase mt-16 text-sm font-black text-dark bg-accent px-8 py-2 tracking-widest transition duration-200 hover:scale-110">my work</a>
    </section>
  )
}