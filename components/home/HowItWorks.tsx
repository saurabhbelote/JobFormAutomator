/** @format */
"use client";

interface StepProps {
  id: number;
  title: string;
  description: string;
  buttonText?: string;
  imageOnLeft: boolean;
}

const Step = ({ id, title, description, buttonText, imageOnLeft }: StepProps) => (
  <div
    className={`flex flex-col md:flex-row ${
      imageOnLeft ? "md:flex-row-reverse" : ""
    } rounded-2xl  backdrop-blur-3xl bg-[#FFFFFF05] border-[#ffffff17] border-[1.5px] m-10 md:m-20 p-8 items-center`}>
    <div className="w-full md:w-1/2 h-60 md:h-[60vh]   bg-[#11011E] rounded-3xl"></div>
    <div className="flex flex-col space-y-4 mt-6 md:mt-0 md:ml-8 md:w-1/2">
      <div className="w-28 rounded-full flex justify-center items-center px-4 py-2 space-x-3 border-[1px] border-[#ffffff17] bg-[#FFFFFF05]">
        <div className="w-4 h-4 bg-[#0FAE96] rounded-full"></div>
        <div className="text-[#0FAE96]">Step {id}</div>
      </div>
      <div className="text-white text-xl md:text-2xl">{title}</div>
      <div className="text-[#B6B6B6]">{description}</div>
      {buttonText && (
        <button className="rounded-xl text-white py-2 w-36 text-center bg-[#0FAE96]">
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Add Extension To Chrome",
      description: "Install the extension by clicking 'Add to Chrome' button.",
      buttonText: "Add to Chrome",
    },
    {
      id: 2,
      title: "Generate and enter API key",
      description:
        "Follow the instructions given in the video and generate your unique API key, then input it to activate the extension and access all features.",
    },
    {
      id: 3,
      title: "Fill resume and details",
      description:
        "Fill out necessary information, like your resume and key skills.",
    },
    {
      id: 4,
      title: "Auto apply on LinkedIn",
      description:
        "Automatically apply to jobs on your behalf, saving time and effort.",
    },
  ];

  return (
    <div className="space-y-10">
      <div className="space-y-6 flex flex-col justify-center items-center text-center">
        <div className="px-4 py-2 space-x-3 border-[1.5px] border-[#ffffff17] justify-center rounded-full flex items-center bg-[#FFFFFF05]">
          <div className="w-4 h-4 bg-[#0FAE96] rounded-full"></div>
          <div className="text-[#0FAE96]">How it works ?</div>
        </div>
        <h1 className="text-white text-3xl">
          How to use Jobform Automator?
        </h1>
        <p className="text-[#B6B6B6] max-w-3xl">
          See how our extension automates form-filling, matches you with jobs,
          and saves you time on every application.
        </p>
      </div>

      <div>
  {steps.map((step, index) => (
    <Step
      key={step.id}
      {...step}
      imageOnLeft={index % 2 === 0} // Left for even indices (Step 1, Step 3)
    />
  ))}
</div>

    </div>
  );
};

export default HowItWorks;
