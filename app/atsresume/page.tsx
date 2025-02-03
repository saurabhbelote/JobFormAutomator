import GetHired from "@/components/ats-resume/GetHired";
import Template from "@/components/ats-resume/Template";
// import TemplateCard from "@/components/ats-resume/TemplateCard";
import ThreeStepsResume from "@/components/ats-resume/ThreeStepsResume";

export default function AtsResume() {
  return (
    <>
      <Template />
      <ThreeStepsResume />
      <GetHired />
    </>
  );
}