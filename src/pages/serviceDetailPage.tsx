import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface tabs {
  title: string;
  text1: string;
  highlight: string;
  text2: string;
}

const tabs: tabs[] = [
  {
    title: "Website",
    text1: "Kami membantu membangun website yang",
    highlight: "profesional, responsif, cepat diakses, dan SEO-friendly",
    text2: "sehingga bisnis atau personal brand-mu terlihat lebih kredibel.",
  },
  {
    title: "UI/UX Design",
    text1: "Kami membantu membangun website yang",
    highlight: "profesional, responsif, cepat diakses, dan SEO-friendly",
    text2: "sehingga bisnis atau personal brand-mu terlihat lebih kredibel.",
  },
  {
    title: "Graphic Design",
    text1: "Kami membantu membangun website yang",
    highlight: "profesional, responsif, cepat diakses, dan SEO-friendly",
    text2: "sehingga bisnis atau personal brand-mu terlihat lebih kredibel.",
  },
  {
    title: "Custom",
    text1: "Kami membantu membangun website yang",
    highlight: "profesional, responsif, cepat diakses, dan SEO-friendly",
    text2: "sehingga bisnis atau personal brand-mu terlihat lebih kredibel.",
  },
];

export default function ServiceDetailPage() {
  const [active, setActive] = useState("Website");
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.title === active);
    const el = tabRefs.current[activeIndex];
    if (el) {
      setPillStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-20 px-40 mt-48">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl text-primary font-bold">
          🛠️ Services We Provide
        </h1>
        <img src="/ornaments/skretch-title.svg" alt="skretch title" />
      </div>

      <div className="w-5xl relative flex items-center justify-center bg-secondary p-2 rounded-full">
        <motion.div
          className="absolute top-2 bottom-2 rounded-full bg-primary"
          animate={pillStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => setActive(tab.title)}
            className={`relative z-10 w-3xs py-2 rounded-full transition-colors 
              ${active === tab.title ? "text-white" : "text-gray-200"}
            `}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="text-center text-lg">
        {tabs.map(
          (tab) =>
            active === tab.title && (
              <div
                key={tab.title}
                className="flex flex-col items-center justify-center gap-5"
              >
                <h1 className="text-4xl font-bold text-primary">{tab.title}</h1>
                <div className="flex flex-col items-center justify-center gap-2 text-lg text-gray-500">
                  <span className="text-gray">{tab.text1}</span>
                  <span className="bg-primary text-white font-bold px-4 py-2 rounded-full">
                    {tab.highlight}
                  </span>
                  <span className="text-gray">{tab.text2}</span>
                </div>
              </div>
            ),
        )}
      </div>

      <div className="join join-vertical bg-base-100 w-5xl shadow-lg">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
    </section>
  );
}
