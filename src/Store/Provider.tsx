"use client";

import { LayoutT } from "@/Types/Basic";
import { Provider as OriginalProvider } from "react-redux";
import { store } from ".";

export const Provider: LayoutT = ({ children }) => <OriginalProvider store={store} children={children} />
