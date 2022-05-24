import ranjeetPDF from '../../assets/data/Ranjeet-Resume.pdf';

const ResumePDF =()=>{
  return (
    <div>

<object data={ranjeetPDF} type="application/pdf" className="w-full pdf">
      
  </object>
    </div>
  )
}

export default ResumePDF;