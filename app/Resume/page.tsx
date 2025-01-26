import Artboard from '@/components/center/Artboard'
import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';
import './scroll.css';
const BuilderArea = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="border-4 border-black w-3/12 overflow-y-auto h-full scrollbar-hidden">
          <LeftSidebar />
        </div>
        <div className="w-1/2 h-full border-4 border-yellow-500">
          <Artboard />
        </div>
        <div className='border-4 border-black w-3/12 overflow-y-auto h-full scrollbar-hidden'>
        <Rightsidebar/>
        </div>
      </div>
      
    </>
  );
};

export default BuilderArea;
