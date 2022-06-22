import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { FindCharParams, FindCharType } from "./types"

type DataType = {
	id: number
	name: string
	thumbnail: { path: string; extension: string }
	description: string
}

export const fatchFindChar = createAsyncThunk<FindCharType[], FindCharParams>(
	"findChar",
	async (params) => {
		const { string } = params

		const { data } = await axios.get<{ data: { results: DataType[] } }>(
			`https://gateway.marvel.com:443/v1/public/characters?name=${string}&apikey=0108668606aa7ba89d3cafd00e024e0b`
		)

		return data.data.results.map((item) => {
			return {
				id: item.id,
				name: item.name,
				thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
				description: item.description,
			}
		})
	}
)
