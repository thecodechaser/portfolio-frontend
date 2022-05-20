const Project = ()=> {

  let even = false;
  return (
       <div className="md:flex project-card mt-24 md:gap-5">
       <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
       alt="project preview" className={`w-11/12 ml-6 ${even ? "md:order-1" : "md:order-0"} md:w-2/4 md:ml-0`}></img>
       <div>
         <h3 className={`text-skyColor ${even ? "md:text-left" : "md:text-right"} mb-4 text-2xl ml-6 md:ml-0`}>Project name</h3>
           <p className="bg-secondaryColor text-primaryColor p-5 rounded mx-6 md:mx-0"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting,</p>
           <div className={`flex ${even ? "md:justify-start" : "md:justify-end"} gap-2 text-skyColor mt-4 ml-6 md:ml-0`}>
             <p>HTML</p>
             <p>CSS</p>
             <p>JavaScript</p>
             <p>Ruby</p>
           </div>
           </div>
       </div>
  )
}

export default Project;