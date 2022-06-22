import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import randomCharReducer from "./randomChar/slice"
import charListReducer from "./charList/slice"
import charInfoReducer from "./charInfo/slice"
import comicsListReducer from "./comicsList/slice"
import singleComicsPageReducer from "./singleComicsPage/slice"
import findCharReducer from "./findChar/slice"

export const store = configureStore({
	reducer: {
		randomChar: randomCharReducer,
		charList: charListReducer,
		charInfo: charInfoReducer,
		comicsList: comicsListReducer,
		singleComicsPage: singleComicsPageReducer,
		findChar: findCharReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
