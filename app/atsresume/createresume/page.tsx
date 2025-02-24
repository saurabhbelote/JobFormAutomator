import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';
import Celibi from "@/components/resume_templates/Celibi";

export default function CreateResume() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <LeftSidebar />
      </div>

      <div className="w-[714px] h-screen mx-auto p-4 overflow-y-auto scrollbar-hidden">
        <Celibi />
      </div>

      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <Rightsidebar />
      </div>
    </div>
  );
}
