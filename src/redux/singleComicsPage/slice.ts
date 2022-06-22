import { createSlice } from "@reduxjs/toolkit"

import { fetchSingleComicsPage } from "./asyncActions"
import { SingleComicsPageState } from "./types"

const initialState: SingleComicsPageState = {
	singleComicsPage: [],
	status: "",
}

export const randomCharSlice = createSlice({
	name: "singleComicsPage",
	initialState,
	reducers: {
		reloadItem: (state) => {
			state.singleComicsPage = []
			state.status = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSingleComicsPage.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchSingleComicsPage.fulfilled, (state, actions) => {
			state.singleComicsPage = actions.payload
			state.status = "Ok!!"
		})
		builder.addCase(fetchSingleComicsPage.rejected, (state) => {
			state.status = "fail("
		})
	},
})

export const { reloadItem } = randomCharSlice.actions

export default randomCharSlice.reducer
