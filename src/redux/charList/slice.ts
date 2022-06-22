import { createSlice } from "@reduxjs/toolkit"

import { fetchCharList } from "./asyncActions"
import { CharListState } from "./types"

const initialState: CharListState = {
	charList: [],
	status: "",
	firstRender: true,
	offset: 210,
}

export const charListSlice = createSlice({
	name: "charList",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCharList.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchCharList.fulfilled, (state, actions) => {
			state.charList =
				state.charList.length > 0 ? [...state.charList, ...actions.payload] : actions.payload
			state.status = "Ok!!"
			state.firstRender = false
			state.offset = state.offset + 9
		})
		builder.addCase(fetchCharList.rejected, (state) => {
			state.status = "fail("
			state.charList = []
		})
	},
})

// export const {} = charListSlice.actions

export default charListSlice.reducer
