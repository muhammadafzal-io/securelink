import { VerticalInfiniteMovingCards } from "@/components/ui/vertical-infinite-moving-cards";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="py-8 md:py-16">
      <div className="custom-container">
        <h3 className="text-[32px] sm:text-[48px] font-semibold text-foreground text-center pt-6 sm:pt-0">
          Trusted by <span className="text-brand"> 500+ </span> Clients
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          <VerticalInfiniteMovingCards
            items={testimonials}
            direction="up"
            speed="slow"
            className="h-[400px] "
          />

          <VerticalInfiniteMovingCards
            items={testimonials}
            direction="down"
            speed="slow"
            className="h-[400px]"
          />

          <VerticalInfiniteMovingCards
            items={testimonials}
            direction="up"
            speed="slow"
            className="h-[400px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

const testimonials = [
  {
    name: "Hashim, Co-founder Muawin",
    description:
      "KalTech developed a robust, AI-enhanced loan management platform for us. Their ability to integrate intelligent automation helped us streamline decision-making and launch faster.",
    src: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?semt=ais_hybrid&w=740",
    flag: "PK",
  },
  {
    name: "Mr. Alsulaiman, Founder Balloons",
    description:
      "They automated QA for both front and backend using AI-powered testing. The result? Zero critical bugs on launch.",
    src: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175961.jpg?semt=ais_hybrid&w=740",
    flag: "SA",
  },
  {
    name: "Hassaan, VLUE",
    description:
      "KalTech delivered our MVP fast — with personalized features powered by AI. Their grasp of KSA’s market dynamics was spot on.",
    src: "https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid&w=740",
    flag: "SA",
  },
  {
    name: "Yousaf Ali",
    description:
      "From automation to data-driven UX, KalTech delivered AI-powered solutions that were cost-effective and scalable.",
    src: "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?semt=ais_hybrid&w=740",
    flag: "US",
  },
  {
    name: "Waqas Ahmed, Cloud Employees",
    description:
      "They didn’t just build a beautiful site — they infused it with intelligence. Every element was optimized using real-time data.",
    src: "https://img.freepik.com/premium-vector/cool-cartoon-boy-avatar_987671-675.jpg?semt=ais_hybrid&w=740",
    flag: "GB",
  },
  // {
  //   name: "Lead Developer, GameOn",
  //   description:
  //     "Partnering with KalTech was a strategic move. Their technical prowess and creative solutions helped us launch our game on time and exceed expectations.",
  //   src: "https://img.freepik.com/premium-vector/portrait-middle-age-male-man-with-ball-hidden_684058-2608.jpg?ga=GA1.1.1879615852.1746027199&semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "Chief Marketing Officer, EcoBrand",
  //   description:
  //     "Collaborating with KalTech was a game changer. Their innovative approach not only enhanced our product but ...",
  //   src: "https://img.freepik.com/premium-vector/anime-schoolgirl-portrait-illustration-vector-icon-cartoon_674187-289.jpg?ga=GA1.1.1879615852.1746027199&semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "VP of Product",
  //   description:
  //     "Kaltech's team not only understood our vision but also pushed us to refine it. Their insights were invaluable in our product development journey.",
  //   src: "https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "Product Manager, HealthSync",
  //   description:
  //     "KalTech brought our ideas to life with precision. Their team's dedication to user-centered design resulted in an application that truly resonaates with our audience.",
  //   src: "https://img.freepik.com/premium-vector/portrait-middle-aged-bearded-man_684058-2561.jpg?ga=GA1.1.1879615852.1746027199&semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "Founder, SmartHome Solutions",
  //   description:
  //     "The collaboration with KalTech was seamless. Their technical skills combined with industry knowledge brought our product to market faster than we anticipated.",
  //   src: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175961.jpg?semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "CTO, FinTech Innovations",
  //   description:
  //     "KalTech's expertise transformed our vision into a robust financial solution. The guidance throughout the project was invaluable.",
  //   src: "https://img.freepik.com/premium-vector/simple-cute-black-boy-ith-beard-icon-vector_960391-425.jpg?semt=ais_hybrid&w=740",
  // },
  // {
  //   name: "Director of Operations, TravelConnect",
  //   description:
  //     "Working with KalTech was  an incredible experience. They transformed our ideas into functional solutions, enhancing ...",
  //   src: "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?semt=ais_hybrid&w=740",
  // },
];
