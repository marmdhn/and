import { FaCircleArrowRight } from "react-icons/fa6";

export default function Button({
  text,
  icon = false,
}: {
  text: string;
  icon?: boolean;
}) {
  return (
    <div className="bg-secondary p-1 rounded-full flex items-center gap-1 button-hover">
      <button className="btn btn-primary font-medium rounded-full border-0 will-change-transform">
        {text}
      </button>
      {icon && <FaCircleArrowRight size="28" className="text-white " />}
    </div>
  );
}
