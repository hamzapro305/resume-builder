import { FC, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import "./index.scss";

export const GlobalButton: FC<
	ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">
> = ({ onClick, ...rest }) => (
	<motion.button
		whileHover={{
			scale: 1.2,
		}}
		whileTap={{
			scale: 0.93,
		}}
		onClick={onClick ?? (() => {})}
		style={{
			cursor: "pointer",
		}}
		className="GlobalButton MF"
		{...rest}
	>
		{rest.children}
	</motion.button>
);
