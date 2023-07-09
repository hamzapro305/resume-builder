import { ResumeT } from "@/Types/Resume";

export const ResumeInit: ResumeT = {
	intro: {
		name: "Hamza Siddiqui",
		email: "hamzapro285@gmail.com",
		location: "Karachi Pakistan",
		phone: "09999999999",
		relevantExperience: "4 years",
		totalExperience: "3 years",
		imageURL: "",
		title: "Full Stack Developer",
		websiteURL: "www.hamza.com",
	},
	activities: [
		{ tab: "involvement", value: "involvement" },
		{ tab: "achievement", value: "achievement" },
	],
	education: [
		{
			area: "Pakistan, Karachi",
			degree: "BSCS",
			grade: "8.3 CGPA",
			id: "0",
			source: "source",
			startDate: new Date().getTime(),
			endDate: new Date().getTime(),
		},
		{
			area: "Pakistan, Karachi",
			degree: "BSCS",
			grade: "8.3 CGPA",
			id: "0",
			source: "source",
			startDate: new Date().getTime(),
			endDate: new Date().getTime(),
		},
	],
	experience: [],
	skills: {
		databases: [],
		frameworks: [],
		languages: [],
		libraries: [],
		practices: [],
		technologies: [],
		tools: [],
	},
};
