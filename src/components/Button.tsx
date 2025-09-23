import rightArrow from "/icons/right_arrow.svg";

export default function Button({
  text,
  icon = false,
}: {
  text: string;
  icon?: boolean;
}) {
  return (
    <div className="bg-secondary p-1 rounded-full flex items-center gap-2 transition duration-300 hover:scale-105 hover:shadow-lg will-change-transform">
      <button className="btn btn-primary font-medium rounded-full border-0 will-change-transform">
        {text}
      </button>
      {icon && <img src={rightArrow} className="w-8" alt="logo" />}
    </div>
  );
}
