import { createSlice } from "@reduxjs/toolkit"

import { fetchRandomChar } from "./asyncActions"
import { RandomCharState } from "./types"

const initialState: RandomCharState = {
	char: [],
	status: "",
}

export const randomCharSlice = createSlice({
	name: "randomChar",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRandomChar.pending, (state) => {
			state.status = "loading..."
		})
		builder.addCase(fetchRandomChar.fulfilled, (state, actions) => {
			state.char = actions.payload
			state.status = "Ok!!"
		})
		builder.addCase(fetchRandomChar.rejected, (state) => {
			state.status = "fail("
		})
	},
})

// export const {} = randomCharSlice.actions

export default randomCharSlice.reducer
