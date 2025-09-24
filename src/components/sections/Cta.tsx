import Button from "../Button";

export default function CtaSection() {
  return (
    <section id="cta section" className="section">
      <div className="min-h-[calc(100vh-500px)] flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold text-primary">
          🚀 Siap mulai project?
        </h1>
        <span className="text-gray font-normal text-lg tracking-wide">
          Bangun website & desain keren untuk bisnismu sekarang!
        </span>
        <Button text="Contact Us!" />
      </div>
    </section>
  );
}
