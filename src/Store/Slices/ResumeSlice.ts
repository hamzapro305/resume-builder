import { ResumeInit } from "@/Data/InitVariables";
import { ResumeT } from "@/Types/Resume";
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
	initialState: {
		Resume: ResumeInit,
	},
	name: "Resume",
	reducers: {
		resetResume: (state) => {
			state.Resume = ResumeInit;
		},
		updateIntro: (
			state,
			{ payload }: { payload: { key: keyof ResumeT["intro"]; value: string } }
		) => {
			state.Resume.intro[payload.key] = payload.value;
		},
		updateSkills: (
			state,
			{
				payload,
			}: {
				payload: {
					skillType: keyof ResumeT["skills"];
					skill: ResumeT["skills"]["databases"]["items"][number];
				};
			}
		) => {
			const { skillType, skill } = payload;
			state.Resume.skills[skillType].items.forEach((item, index) => {
				if (item.id === skill.id) {
					state.Resume.skills[skillType].items[index] = skill
					return
				}
			});
		},
		updateEducation: (
			state,
			{
				payload,
			}: {
				payload: {
					id: string;
					key: keyof ResumeT["education"][number];
					value: string | number;
				};
			}
		) => {
			const { index, key, value } = payload;
		},
	},
});

export const ResumeActions = Slice.actions;
export const ResumeReducer = Slice.reducer;
