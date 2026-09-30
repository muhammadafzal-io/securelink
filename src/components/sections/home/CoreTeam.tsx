import Image from "next/image";
import React from "react";

const CoreTeam = () => {
  const teamDetails = [
    {
      image: "/assets/core-team/shershah-hassan.png",
      name: "Shershah Hasan",
      role: "Head of Business",
      experience:
        "Founder & CEO of KalPay | Forbes 30 Under 30 Asia | LUMS Graduate",
    },
    {
      image: "/assets/core-team/hassan-mubarak.png",
      name: "Hasan Mubarak",
      role: "Head of Business Development",
      experience: "13+ years in fintech and EU startups | MBA, LUMS",
    },

    {
      image: "/assets/core-team/amna-malik.png",
      name: "Amna Malik ",
      role: "Project Manager",
      experience: "4+ years of leading agile tech teams",
    },
    {
      image: "/assets/core-team/hassan-farooq.png",
      name: "Hassan Farooq",
      role: "ML and Back-end Genius",
      experience:
        "5+ years of experience Expert in Al/ML | Technical Lead |  Data Engineering | Devops | Full stack",
    },
  ];

  return (
    <div className="py-6 md:py-12">
      <div className="custom-container">
        <h3 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center">
          Meet the Core Team
        </h3>

        <div className="grid grid-cols-2 min-[30rem]:grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {teamDetails.map((item, index) => (
            <div
              className="group space-y-2 transition-transform duration-500"
              key={index}
            >
              <div className="rounded-xl bg-primary overflow-hidden pt-3">
                <Image
                  src={item.image}
                  alt="Team Member"
                  width={300}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h5 className="text-[12px] sm:text-[20px] sm:leading-5 font-medium text-foreground">
                  {item.name}
                </h5>
                <span className="text-[10px] sm:text-[12px] font-normal">
                  {item.role}
                </span>
              </div>

              <p className="text-[12px] sm:text-[14px] font-normal text-muted-foreground">
                {item.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
