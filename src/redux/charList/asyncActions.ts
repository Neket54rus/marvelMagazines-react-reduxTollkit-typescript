import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CharListParams, CharListType } from "./types"

type DataType = {
	id: number
	name: string
	thumbnail: { path: string; extension: string }
}

export const fetchCharList = createAsyncThunk<CharListType[], CharListParams>(
	"charList",
	async (params) => {
		const { offset } = params

		const { data } = await axios.get<{ data: { results: DataType[] } }>(
			`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=0108668606aa7ba89d3cafd00e024e0b`
		)

		return data.data.results.map((item) => {
			return {
				id: item.id,
				name: item.name,
				thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
			}
		})
	}
)
