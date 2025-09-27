import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ITabs, tabs } from "../data/services";
import Button from "../components/Button";

export default function ServiceDetailPage() {
  const [active, setActive] = useState("Website");
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab: ITabs = tabs.find((tab) => tab.title === active);

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
    <section id="service detail" className="page-section py-48">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl text-primary font-bold">
          🛠️ Services We Provide
        </h1>
        <img src="/ornaments/skretch-title.svg" alt="skretch title" />
      </div>

      <div className="w-5xl relative flex items-center justify-center bg-secondary p-2 rounded-full">
        <motion.div
          className="absolute top-2 bottom-2 rounded-full bg-primary"
          initial={{ left: 0, width: 0 }}
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.title + "-header"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center text-lg max-w-6xl"
        >
          {activeTab && (
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-4xl font-bold text-primary">
                {activeTab.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-2 text-lg text-gray-500">
                <span className="text-gray">{activeTab.text1}</span>
                <span className="bg-primary text-white font-bold px-4 py-2 rounded-full">
                  {activeTab.highlight}
                </span>
                <span className="text-gray">{activeTab.text2}</span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          key={activeTab.title + "-accordion"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="join join-vertical bg-base-100 w-5xl shadow-lg"
        >
          {activeTab && (
            <div className="join join-vertical bg-base-100 w-5xl shadow-lg">
              {activeTab.services.map((service, index: number) => (
                <div
                  key={index}
                  className="collapse collapse-arrow join-item border-base-300 border"
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={index === 0}
                  />
                  <div className="collapse-title font-medium">
                    {service.title}
                  </div>

                  <div className="collapse-content text-sm text-gray">
                    <div
                      className={`flex justify-between items-center ${service.portfolio && "mb-4"}`}
                    >
                      <p>{service.description}</p>
                      {service.hasPriceList && (
                        <div>
                          <Button text="Price List" />
                        </div>
                      )}
                    </div>
                    {service.portfolio && service.portfolio.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.portfolio.map((portfolio, index: number) => (
                          <div
                            key={index}
                            className="card bg-base-100 shadow-sm"
                          >
                            <figure>
                              <img src={portfolio.coverUrl} alt="cover" />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">
                                {portfolio.title}
                                {portfolio.isNew && (
                                  <div className="badge badge-secondary">
                                    NEW
                                  </div>
                                )}
                              </h2>
                              <p>{portfolio.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
