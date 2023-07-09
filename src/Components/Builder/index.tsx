"use client";

import { AnimatePresence, motion } from "framer-motion";
import "./Builder.scss";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const Builder = () => {
	const [isActiveOption, setIsActiveOption] = useState<
		(typeof Options)[number] | null
	>(null);
	const Options = [
		{
			field: "intro",
			title: "Basic Details",
		},
		{
			field: "activities",
			title: "Activities",
		},
		{
			field: "education",
			title: "Education",
		},
		{
			field: "experience",
			title: "Experience",
		},
		{
			field: "skills",
			title: "Skills And Expertise",
		},
	];
	return (
		<motion.aside
			initial={{
				width: 0,
			}}
			animate={{
				width: "300px",
			}}
			className="Builder"
		>
			<div className="body">
				<div className="options">
					{Options.map((item) => {
						const isActive = isActiveOption?.field === item.field;
						return (
							<motion.div
								className={`option MF ${isActive ? "active" : ""}`}
								key={item.field}
								onClick={() => setIsActiveOption(item)}
							>
								<motion.div className="title">{item.title}</motion.div>
								<div className="icon">
									<BiRightArrow size={20} />
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.aside>
	);
};

export default Builder;
