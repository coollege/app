import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  colors?: string;
}

export const GlowBox = ({ children, colors, className, ...props }: Props) => {
  return (
    <div
      className={cn("group flex items-start justify-center p-4", className)}
      {...props}
    >
      <div className="relative w-full">
        <div
          className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r ${colors} opacity-75 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200`}
        />
        <button className="relative flex w-full items-center overflow-x-auto overflow-y-hidden rounded-lg bg-background p-4 leading-none">
          {children}
        </button>
      </div>
    </div>
  );
};
