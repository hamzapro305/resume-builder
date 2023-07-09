type SkillSection = {
	items: {
		id: string;
		name: string;
		percentage: number;
	}[];
	isHidden: boolean;
};
type EducationT = {
	id: string;
	source: string;
	degree: string;
	area: string;
	grade: string;
	startDate: number;
	endDate: number;
};

type ExperienceT = {
	id: string;
	companyName: string;
	position: string;
	startDate: number;
	endDate?: number;
	years: number;
	description: string;
};

type Activity<T extends "involvement" | "achievement"> = {
	tab: T;
	value: string;
};

export type ResumeT = {
	intro: {
		name: string;
		imageURL: string;
		title: string;
		email: string;
		websiteURL: string;
		phone: string;
		location: string;
		relevantExperience: string;
		totalExperience: string;
	};
	skills: {
		languages: SkillSection;
		frameworks: SkillSection;
		technologies: SkillSection;
		libraries: SkillSection;
		databases: SkillSection;
		practices: SkillSection;
		tools: SkillSection;
	};
	education: EducationT[];
	experience: ExperienceT[];
	activities: [Activity<"involvement">, Activity<"achievement">];
};
