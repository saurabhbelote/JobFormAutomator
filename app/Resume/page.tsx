// import Artboard from '@/components/center/Artboard'
import LeftSidebar from "@/components/left/LeftSidebar";
import Rightsidebar from '@/components/right/Rightsidebar';

const BuilderArea = () => {
  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Sidebar */}
      <div className="border-4 border-black w-3/12">
        <LeftSidebar />
      </div>

      {/* Right Sidebar */}
      <div className="border-4 border-black w-3/12">
        <Rightsidebar />
      </div>
    </div>
  );
};

export default BuilderArea;
