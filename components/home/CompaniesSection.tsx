import Image from "next/image";

const CompaniesSection = () => {
    const companies = [
      { 
        name: "Microsoft", 
        logo: "/images/microsoft.png",
        width: 120,
        height: 40
      },
      { 
        name: "Netflix", 
        logo: "/images/netflix.png",
        width: 120,
        height: 40
      },
      { 
        name: "Flipkart", 
        logo: "/images/flipkart.png",
        width: 120,
        height: 40
      },
      { 
        name: "Swiggy", 
        logo: "/images/swiggy.png",
        width: 120,
        height: 40
      },
    ];
  
    return (
      <div className="bg-[#11011E] text-white py-8 my-8">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm sm:text-lg text-gray-400">
            Get hired by top companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            {companies.map((company, index) => (
              <div key={index} className="relative w-24 sm:w-28 lg:w-32 h-12">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                  priority={index < 2}
                  quality={90}  // Set quality per image
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default CompaniesSection;
