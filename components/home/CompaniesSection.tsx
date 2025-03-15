
import Image from "next/image";

const CompaniesSection = () => {
    const companies = [
      { name: "Microsoft", logo: "/images/microsoft.png" }, // Replace with actual logo paths
      { name: "Netflix", logo: "/images/netflix.png" },
      { name: "Flipkart", logo: "/images/flipkart.png" },
      { name: "Swiggy", logo: "/images/swiggy.png" },
    ];
  
    return (
      <div className="bg-[#11011E] text-white py-8 my-8">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm sm:text-lg text-gray-400">
            Get hired by top companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            {companies.map((company, index) => (
              <div key={index} className="w-24 sm:w-28 lg:w-32">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-auto object-contain"
                  width={10}
                  height={10}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CompaniesSection;
  