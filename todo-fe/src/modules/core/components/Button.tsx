import { twMerge } from "tailwind-merge";

interface IButtonProps {
  onClick?: () => void;
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<IButtonProps> = ({
  onClick,
  type = "button",
  children,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "bg-[#1E75FF] w-full rounded py-1 text-[#FAFAFB]",
        className,
      )}
    >
      {children}
    </button>
  );
};
