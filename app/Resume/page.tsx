// import Artboard from '@/components/center/Artboard'
import Castform from "@/templates/Castform";
import LeftSidebar from "@/components/left/LeftSidebar";
import RightSidebar from "@/components/right/RightSidebar";
import './left.css';
const BuilderArea = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="border-4 border-black w-3/12 overflow-y-auto h-full scrollbar-hidden">
          <LeftSidebar />
        </div>
        <div className="w-1/2 h-full border-4 border-yellow-500">
          <Castform />
        </div>
        <div className="border-4 border-black w-3/12 h-full">
          <RightSidebar />
        </div>
      </div>
      
    </>
  );
};

export default BuilderArea;
