import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  linkedin: string;
  twitter: string;
}

const TeamCard = ({ name, role, linkedin, twitter }: TeamCardProps) => (
  <div className="rounded-lg text-center pb-8 border-[1px] border-[#FFFFFF17] bg-[#FFFFFF06] animate-fade-in-up p-4">
    <Image
      width={100} height={100}
      src="/images/user.png"
      alt={name}
      className="mx-auto   object-cover"
    />
    <h3 className="mt-4 text-lg sm:text-xl font-semibold">{name}</h3>
    <p className="text-sm sm:text-base text-gray-300">{role}</p>
    <div className="flex justify-center gap-4 mt-4">
      <a href={linkedin} target="_blank" rel="noreferrer">
        <Image src="/images/linkedin-icon.png" alt="LinkedIn"  width={8} height={8} className=" sm:w-10 sm:h-10" />
      </a>
      <a href={twitter} target="_blank" rel="noreferrer">
        <Image src="/images/twitter-icon.png" alt="Twitter"  width={8} height={8} className="sm:w-10 sm:h-10" />
      </a>
    </div>
  </div>
);

export default function OurTeam() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-10 px-6 lg:px-28 text-white bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E]">
      <section className="text-center max-w-5xl mb-16 animate-fade-in-up">
        <h1 className="text-2xl lg:text-4xl font-bold">Jobform Automator’s Mission</h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#B6B6B6]">
          Job Form Automator revolutionizes job applications with AI-powered automation. We empower job seekers to apply to thousands
          of positions on platforms like LinkedIn, Indeed, and Monster efficiently. Our tool auto-fills forms, reduces errors, and saves
          time, providing a seamless experience. Committed to innovation, we help users achieve their career goals faster and more
          effectively.
        </p>
      </section>
      <section className="w-full max-w-6xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8 animate-fade-in-up">Meet our team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          <TeamCard
            name="Saurabh Belote"
            role="CEO & Founder"
            linkedin="https://linkedin.com"
            twitter="https://twitter.com"
          />
          <TeamCard
            name="Suman Bera"
            role="Lead Product Engineer"
            linkedin="https://linkedin.com"
            twitter="https://twitter.com"
          />
          <TeamCard
            name="Sachin Dhawan"
            role="Marketing Head"
            linkedin="https://linkedin.com"
            twitter="https://twitter.com"
          />
        </div>
      </section>
    </main>
  );
}
