// import Artboard from '@/components/center/Artboard'
import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';
import Celibi from "@/components/resume_templates/Celibi";
import Pikachu from "@/components/resume_templates/pikachu";
import Glalie from "@/components/resume_templates/glalie"

const BuilderArea = () => {
  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Sidebar */}
      <div className="border-4 border-black w-3/12">
        {/* <LeftSidebar /> */}
      </div>

      <div className="border-4 border-blue-50 w-6/12">
        {/* <Celibi/> */}
        <Pikachu/>
        {/* <Glalie/> */}
      </div>

      {/* Right Sidebar */}
      <div className="border-4 border-black w-3/12">
        {/* <Rightsidebar /> */}
      </div>
    </div>
  );
};

export default BuilderArea;
