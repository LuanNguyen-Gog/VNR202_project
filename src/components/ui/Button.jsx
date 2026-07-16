import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider border border-brown transition-all duration-75 select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-beige text-brown shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-md active:translate-x-0 active:translate-y-0 active:shadow-sm",
    outline:
      "bg-transparent text-brown border-brown hover:bg-brown hover:text-beige",
    ghost: "bg-transparent border-transparent text-brown hover:bg-brown/5",
    danger:
      "bg-red-muted text-white shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-md active:translate-x-0 active:translate-y-0 active:shadow-sm",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const sizeClass = sizes[props.size] || sizes.md;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
