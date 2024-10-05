import Card from "@/components/card/Card";
import React from "react";

export default function About() {
  return (
    <>
      
      <div className="flex flex-col md:flex-row min-h-screen justify-center items-center bg-gradient-to-r from-teal-500 to-yellow-400 py-24 px-10 gap-5">
        
        <div className="basis-1/3">
          <h1 className="text-5xl text-red-800 font-bold text-center mb-10">About</h1>
          <p className="text-xl text-justify ">
        My specialty lies in transforming concepts into scalable, user-friendly, and interactive web applications. I combine technical expertise with artistic vision to create smooth, captivating user experiences, utilizing both front-end and back-end technologies. I focus on building dynamic, user-friendly applications with code that is scalable, efficient, and maintainable. As a full-stack developer, I have a keen eye for detail and a strong passion for crafting seamless user experiences. I am confident in my ability to deliver exceptional results. My goal is to not only meet but exceed expectations by delivering innovative solutions that drive user engagement and business success.
        </p>
        </div>
        
        <div className="basis-2/3 w-full h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-3 cursor-pointer">
          <div className="bg-slate-900 col-span-2 bg-cover bg-top font-medium hover:bg-bottom transition-all duration-1000 delay-100 hover:bg-slate-950 h-full" style={{backgroundImage:'url(/assets/colorToggle.jpg)'}}></div>

          <div className="bg-slate-900 hover-grow row-span-2 hover:bg-bottom transition-all duration-1000 delay-100 hover:bg-slate-950 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/countdown.jpg)'}}></div>

          <div className="bg-slate-900 hover:bg-bottom transition-all delay-100 hover:bg-slate-950 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/imageCal.jpg)'}}></div>
          <div className="bg-slate-900 hover-grow hover:bg-bottom transition-all delay-100 hover:bg-slate-950 row-span-2 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/imageRB.png)'}}></div>

          <div className="bg-slate-900 hover:bg-bottom transition-all delay-100 hover:bg-slate-950 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/NGG.png)'}}></div>
          <div className="bg-slate-900 hover-grow hover:bg-bottom transition-all delay-100 hover:bg-slate-950 row-span-2 transform duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/tt.jpg)'}}></div>

          <div className="bg-slate-900 col-span-2 hover:bg-bottom transition-all delay-100 hover:bg-slate-950 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/td.jpg)'}}></div>

          <div className="bg-slate-900 hover:bg-bottom transition-all delay-100 hover:bg-slate-950 col-span-2 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/static.jpg)'}}></div>

          <div className="bg-slate-900 hover:bg-bottom transition-all delay-100 hover:bg-slate-950 col-span-2 duration-1000 bg-cover bg-top font-medium h-full" style={{backgroundImage:'url(/assets/srf.jpg)'}}></div>
        </div>
      </div>

      <div className="min-h-screen w-full bg-gradient-to-r from-teal-500 to-yellow-400 flex justify-center items-center flex-col py-10">
        <h1 className="text-4xl sm:text-5xl text-red-800 text-center font-semibold mb-10 sm:mb-16">
          Skills
        </h1>

        <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap px-4">
          <Card imageSrc="/assets/html.png" heading="HTML" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/cssf.png" heading="CSS" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/ts.png" heading="TypeScript" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/njs.png" heading="NextJs" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/tw.jpg" heading="Tailwindcss" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/cover.png" heading="Shadcn" description="frontend and backend expert developer" />
          <Card imageSrc="/assets/bs.png" heading="Bootstrap" description="frontend and backend expert developer" />
        </div>
      </div>
    </>
  );
}
