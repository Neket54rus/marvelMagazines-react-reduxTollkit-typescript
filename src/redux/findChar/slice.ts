import { createSlice } from "@reduxjs/toolkit"

import { fatchFindChar } from "./asyncActions"
import { FindCharState } from "./types"

const initialState: FindCharState = {
	char: [],
	status: "",
}

export const findCharSlice = createSlice({
	name: "findChar",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fatchFindChar.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fatchFindChar.fulfilled, (state, actions) => {
			if (actions.payload.length === 0) {
				state.status = "fail("
			} else {
				state.char = actions.payload
				state.status = "Ok!!"
			}
		})
		builder.addCase(fatchFindChar.rejected, (state) => {
			state.status = "fail("
		})
	},
})

// export const {} = findCharSlice.actions

export default findCharSlice.reducer
