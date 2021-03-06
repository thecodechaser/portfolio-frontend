import ranjeetPDF from '../../assets/data/Ranjeet-Resume.pdf';

const ResumePDF = () => (
  <div>
    <object aria-label="resume-pdF" data={ranjeetPDF} type="application/pdf" className="w-full pdf" />
    <button
      onClick={() => window.open('https://drive.google.com/file/d/1MGke1mqZtmERb5fsbHOqrwLKBN3hgBWL/view?usp=sharing', '_blank')}
      type="submit"
      className="bg-lightBlueColor
    mt-5 ml-2 rounded px-4 py-3 text-lg text-skyColor font-medium hover:bg-secondaryColor hover:text-primaryColor"
    >
      Download Resume
    </button>
  </div>
);

export default ResumePDF;
