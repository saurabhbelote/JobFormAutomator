// import Artboard from '@/components/center/Artboard'
import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';
import Celibi from "@/components/resume_templates/Celibi";

export default function  CreateResume ()  {
  return (
    <div className="flex h-fit overflow-hidden">
      {/* Left Sidebar */}
      <div className="border-4 border-white w-3/12">
        <LeftSidebar />
      </div>

      <div className="border-4 border-blue-50 ">
        <Celibi/>
      </div>

      {/* Right Sidebar */}
      <div className="border-4 border-white w-3/12">
        <Rightsidebar />
      </div>
    </div>
  );
};


