import Button from "../Button";

interface Service {
  title: string;
  img: string;
  subTitle: string;
}
export default function ServiceSection() {
  const serviceData: Service[] = [
    {
      title: "Website",
      img: "/illustration/website_illustration.svg",
      subTitle:
        "🚀 Online-kan bisnismu dengan website profesional & responsif.",
    },
    {
      title: "UI/UX Design",
      img: "/illustration/ui_illustration.svg",
      subTitle: "✨ Desain yang modern, simple, dan bikin user betah.",
    },
    {
      title: "Graphic Design",
      img: "/illustration/graphic_illustration.svg",
      subTitle:
        "🎨 Visual keren untuk poster, banner, & konten sosial mediamu.",
    },
    {
      title: "Custom",
      img: "/illustration/custom_illustration.svg",
      subTitle: "⚡ Solusi kreatif fleksibel, sesuai kebutuhan brand kamu.",
    },
  ];

  return (
    <section id="service section" className="py-10 min-h-screen ">
      <div className="flex items-center justify-between">
        <h1 className="text-title">🛠️ Services We Provide</h1>
        <Button text="View Detail Services" icon={true} />
      </div>

      <div className="px-20 grid grid-cols-1 md:grid-cols-2 gap-15 justify-center mt-10">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className="card bg-[#F4F4F4] shadow-lg shadow-primary/50 text-center"
          >
            <div className="card-body">
              <h2 className="card-title mx-auto text-2xl">{item.title}</h2>
              <img
                className="w-50 h-50 mx-auto"
                src={item.img}
                alt="Illustration"
              />
              <p className="text-gray-600 tracking-wide text-lg min-h-[4rem] flex items-center justify-center">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
