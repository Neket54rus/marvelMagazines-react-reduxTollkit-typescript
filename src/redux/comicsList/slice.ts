import { createSlice } from "@reduxjs/toolkit"

import { fetchComicsList } from "./asyncActions"
import { ComicsListState } from "./types"

const initialState: ComicsListState = {
	comicsList: [],
	status: "",
	firstRender: true,
	offset: 210,
}

export const randomCharSlice = createSlice({
	name: "comicsList",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchComicsList.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchComicsList.fulfilled, (state, actions) => {
			state.comicsList = state.firstRender
				? actions.payload
				: [...state.comicsList, ...actions.payload]
			state.status = "Ok!!"
			state.firstRender = false
			state.offset = state.offset + 8
		})
		builder.addCase(fetchComicsList.rejected, (state) => {
			state.status = "fail("
		})
	},
})

// export const {} = randomCharSlice.actions

export default randomCharSlice.reducer
