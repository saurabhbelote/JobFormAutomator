// import Artboard from '@/components/center/Artboard'
import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';
import Celibi from "@/components/resume_templates/Celibi";

export default function CreateResume() {
  return (
    <div className="flex h-fit overflow-scroll scrollbar-hidden">
      {/* <div className="w-3/12 h-[100px]">
        <LeftSidebar />
      </div> */}
     
      <div className="w-[714px] h-[1000px] mx-auto overflow-scroll scrollbar-hidden p-4">
        <Celibi />
      </div>

      <div className="w-3/12 h-[1000px] overflow-scroll scrollbar-hidden">
        <Rightsidebar />
      </div>
    </div>
  );
}



