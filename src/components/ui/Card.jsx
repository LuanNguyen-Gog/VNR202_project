import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  variant = "default",
  hoverEffect = false,
  ...props
}) => {
  const baseStyles =
    "border border-brown/20 overflow-hidden p-6 relative rounded-2xl";

  const variants = {
    default: "bg-beige shadow-sm",
    flat: "bg-white",
    highlight: "bg-red-muted/10 shadow-sm",
    paper: "bg-white shadow-md",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-md transition-transform duration-200"
    : "";

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
