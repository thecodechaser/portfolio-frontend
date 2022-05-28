import ranjeetPDF from '../../assets/data/Ranjeet-Resume.pdf';

const ResumePDF = () => {
  return (
  <div>
    <object aria-label="resume-pdF" data={ranjeetPDF} type="application/pdf" className="w-full pdf" />
    <button onClick={()=> window.open("https://drive.google.com/file/d/1KxZa1Y3Cphtj1dmp-oRY_DRsl6vD_qOm/view?usp=sharing", "_blank")} type="submit" className="bg-lightBlueColor 
    mt-5 ml-2 rounded px-4 py-3 text-lg text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor">
      Download Resume</button>
  </div>
)
  };

export default ResumePDF;
