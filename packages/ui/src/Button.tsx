import { cn } from "../lib/tailwindcss";
import { Spinner } from "ui";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

export function Button(props: ButtonProps) {
  const {
    children,
    disabled,
    loading,
    size = "md",
    variant = "primary",
    ...rest
  } = props;

  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "transform rounded-md text-sm font-medium capitalize tracking-wide transition-all duration-200",
        "focus:outline-none focus:ring  focus:ring-opacity-50",
        "disabled:cursor-not-allowed disabled:bg-opacity-70",
        variants[variant],
        sizes[size],
      )}
      {...rest}
    >
      {loading && (
        <span className="pr-2">
          <Spinner
            variant={
              ["primary", "destructive"].includes(variant) ? "contrast" : undefined
            }
            size={size}
          />
        </span>
      )}
      {children}
    </button>
  );
}

// @TODO: Melhorar animação da borda
// focus-visible:border-blue-400 focus-visible:ring focus-visible:ring-blue-300 focus-visible:ring-opacity-40
// active:bg-gray-800

const variants = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-400 focus:border-blue-400 focus:ring-blue-300",
  secondary:
    "bg-gray-200 text-gray-700 hover:bg-gray-100 focus:border-gray-400 focus:bg-gray-200  focus:ring-gray-200",
  ghost: "hover:bg-gray-100",
  destructive:
    "bg-red-500 text-white hover:bg-red-400 focus:border-red-400 focus:bg-red-400  focus:ring-red-300",
} as const;

const sizes = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
  lg: "px-6 py-3",
} as const;
