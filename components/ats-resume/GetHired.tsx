import Image from "next/image";

export default function GetHired() {
  return (
    <div className="bg-gradient-to-b font-sans from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] text-white pt-16 px-6 md:px-16 lg:px-20">
      <div className="bg-[#FFFFFF05] rounded-xl px-10 py-16 border-[1.5px] border-[#ffffff17] max-w-7xl mx-auto flex flex-col lg:flex-row justify-between animate-fadeIn">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 animate-slideInLeft">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFFFFF05] border-[1px] border-[#ffffff17] px-3 py-1 rounded-full flex items-center">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img
                    key={index}
                    src="images/star.png"
                    alt="Star"
                    className="w-3 h-3 mr-1"
                  />
                ))}
              <span>4.5 star rated</span>
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight">Not getting hired? <br /> It&apos;s your resume</h1>
          <p className="text-gray-300 text-lg">
            Create a professional resume with ease. Our builder features 30+ templates, step-by-step guidance, and endless customizable content options.
          </p>
          <button className="bg-[#0FAE96] hover:bg-[#288d7d] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Build your Resume
          </button>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4 mb-2">
              {["Img1.png", "Img2.png", "Img3.png", "Img4.png"].map((img, index) => (
                <img
                  key={index}
                  src={`Images/${img}`}
                  alt={`Avatar ${index + 1}`}
                  className="w-10 h-10 rounded-full border border-gray-700 transition-all duration-300 hover:scale-110"
                />
              ))}
            </div>
            <span className="text-sm text-gray-300">and 150+ jobseekers using JobForm Automator</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-12 lg:mt-0 animate-slideInRight">
          <div>
            <img
              src="/images/resume.png"
              alt="Resume 1"
              className="w-96 transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
