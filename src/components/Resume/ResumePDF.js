import ranjeetPDF from '../../assets/data/Ranjeet-Resume.pdf';

const ResumePDF =()=>{
  return (
    <div>

<object data={ranjeetPDF} type="application/pdf" className="w-full pdf">
      
  </object>
  <button type="submit" className="bg-secondaryColor mt-5 ml-2 md:ml-0 rounded px-4 py-3 text-base text-primaryColor">Download Resume</button>
    </div>
  )
}

export default ResumePDF;