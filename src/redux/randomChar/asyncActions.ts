import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RandomCharType } from "./types"

type DataType = {
	id: number
	name: string
	description: string
	urls: [{ url: string }, { url: string }]
	thumbnail: { path: string; extension: string }
}

export const fetchRandomChar = createAsyncThunk<RandomCharType[]>("randomChar", async () => {
	const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

	const { data } = await axios.get<{ data: { results: DataType[] } }>(
		`https://gateway.marvel.com:443/v1/public/characters/${randomId}?apikey=0108668606aa7ba89d3cafd00e024e0b`
	)

	return data.data.results.map((item) => {
		if (item.description.length < 1) {
			item.description = "No description"
		}
		if (item.description.length > 200) {
			item.description = `${item.description.substring(0, 200)}...`
		}

		return {
			id: item.id,
			name: item.name,
			description: item.description,
			thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
			wiki: item.urls[1].url,
			homePage: item.urls[0].url,
		}
	})
})
