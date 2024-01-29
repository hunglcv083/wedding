import { createContext } from "react";
import { listItemType } from "../common/types/Album";

export const MyContext = createContext<listItemType[]>([]);