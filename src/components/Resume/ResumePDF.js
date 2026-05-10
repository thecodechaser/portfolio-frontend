import { DownloadIcon } from '@heroicons/react/solid';
import ranjeetPDF from '../../assets/data/Ranjeet-Resume.pdf';

const ResumePDF = () => (
  <div className="mt-8">
    <object
      aria-label="resume preview"
      data={ranjeetPDF}
      type="application/pdf"
      className="pdf w-full"
    />
    <div className="mt-5">
      <button
        type="button"
        onClick={() => window.open('https://drive.google.com/file/d/13Cya4tB72htNZgjOYzz31DTGm37V1TKE/view?usp=sharing', '_blank')}
        className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-accent text-bg text-sm font-semibold hover:bg-accent-hover transition-colors"
      >
        <DownloadIcon className="h-4 w-4" />
        Download resume
      </button>
    </div>
  </div>
);

export default ResumePDF;
