import { LucideIcon } from "lucide-react";

interface ButtonProps {
  onAction?: () => void;
  icon: LucideIcon;
  text: string;
  margintop?: string;
  width?: string;
}

export default function Button({
  onAction,
  icon: Icon,
  text,
  margintop,
  width,
}: ButtonProps) {
  return (
    <button
      className={`text-white flex justify-center items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 w-${width} py-2 px-5 rounded-[20px] ${margintop}`}
      onClick={onAction}
    >
      {text}{" "}
      <span>
        <Icon color="white" size={15} />
      </span>
    </button>
  );
}
