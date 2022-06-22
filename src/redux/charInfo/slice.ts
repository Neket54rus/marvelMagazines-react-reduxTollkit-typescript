import { createSlice } from "@reduxjs/toolkit"

import { fetchInfoList } from "./asyncActions"
import { CharInfoState } from "./types"

const initialState: CharInfoState = {
	char: [],
	status: "",
}

export const charInfoSlice = createSlice({
	name: "charInfo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchInfoList.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchInfoList.fulfilled, (state, actions) => {
			state.char = actions.payload
			state.status = "Ok!!"
		})
		builder.addCase(fetchInfoList.rejected, (state) => {
			state.status = "fail("
		})
	},
})

// export const {} = charListSlice.actions

export default charInfoSlice.reducer
