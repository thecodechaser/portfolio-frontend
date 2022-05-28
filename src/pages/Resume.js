import ResumePDF from '../components/Resume/ResumePDF';

const Resume = () => (
  <div className="mt-32">
    <div className="flex gap-3 ml-3 md:ml-0 mb-6">
      <h2 className="text-2xl md:text-4xl">Resume</h2>
      <div className="border-b-2 w-4/6 mb-3 border-secondaryColor hr-portfolio" />
    </div>

    {/* resume-pdf-section */}
    <ResumePDF />
  </div>

);

export default Resume;
