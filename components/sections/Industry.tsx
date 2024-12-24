import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Boxes,
  ChartNoAxesCombined,
  Bot,
  Fingerprint,
} from "lucide-react";

const Industry = () => {
  // Define refs and visibility states for each small div
  const { ref: smallDivRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: smallDivRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: smallDivRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: smallDivRef4, inView: inView4 } = useInView({ triggerOnce: true });
  const { ref: smallDivRef5, inView: inView5 } = useInView({ triggerOnce: true });
  const { ref: smallDivRef6, inView: inView6 } = useInView({ triggerOnce: true });

  return (
    <>
    <h1 className="bg-gradient-to-r text-6xl text-center mt-5 bg-fuchsia-400 font-bold from-pink-400 to-purple-600 text-transparent bg-clip-text">Ai Industry</h1>
    <div className="container mx-auto p-6 bg-white">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Big div on the left */}
        <div className="flex-1 bg-gray-100 p-4 lg:p-8 rounded-lg shadow-lg">
          <img
            src="industry.svg"
            alt="Industry Illustration"
            className="w-full max-w-xs mx-auto lg:max-w-full"
          />
        </div>

        {/* Small divs on the right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 flex-1">
          {/* Small divs with responsive styles */}
          {[
            {
              ref: smallDivRef1,
              inView: inView1,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a9287a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-20 h-20 mb-4"
                >
                  <path d="M4 19.5V4c0-1.1.9-2 2-2h8.5"></path>
                  <path d="M20 8V6a2 2 0 0 0-2-2h-2"></path>
                  <path d="M18 20H6a2 2 0 0 1-2-2"></path>
                  <path d="M6 17a9 9 0 0 0 9-9"></path>
                  <path d="m20 21-5.6-5.6"></path>
                </svg>
              ),
              text: "AI in Healthcare: Revolutionizing patient diagnosis and treatment through intelligent systems.",
            },
            {
              ref: smallDivRef2,
              inView: inView2,
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a9287a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-20 h-20 mb-4"
                >
                  <circle cx="12" cy="11.9" r="2" />
                  <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
                  <path d="m8.9 10.1 1.4.8" />
                  <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
                  <path d="m15.1 10.1-1.4.8" />
                  <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
                  <path d="M12 13.9v1.6" />
                  <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
                  <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
                  <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
                </svg>
              ),
              text: "AI in Security: Advancing data security through biometrics and predictive algorithms.",
            },
            {
              ref: smallDivRef3,
              inView: inView3,
              icon: <Boxes color="#a9287a" className="w-20 h-20 mb-4" />,
              text: "AI in Logistics: Optimizing supply chains and warehouse management systems.",
            },
            {
              ref: smallDivRef4,
              inView: inView4,
              icon: <Bot color="#a9287a" className="w-20 h-20 mb-4" />,
              text: "AI Chatbots: Transforming customer engagement with human-like responses.",
            },
            {
              ref: smallDivRef5,
              inView: inView5,
              icon: <ChartNoAxesCombined color="#a9287a" className="w-20 h-20 mb-4" />,
              text: "AI in Analytics: Extracting actionable insights from vast datasets.",
            },
            {
              ref: smallDivRef6,
              inView: inView6,
              icon: <Fingerprint color="#a9287a" className="w-20 h-20 mb-4" />,
              text: "AI in Authentication: Strengthening identity verification through fingerprint recognition.",
            },
          ].map(({ ref, inView, icon, text }, idx) => (
            <div
              key={idx}
              ref={ref}
              className={`flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-500 ${
                inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              {icon}
              <p className="text-center text-sm font-semibold text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Industry;
