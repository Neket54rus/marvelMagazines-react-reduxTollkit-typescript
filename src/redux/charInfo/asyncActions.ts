import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CharInfoParams, CharInfoType } from "./types"

type DataType = {
	id: number
	name: string
	thumbnail: { path: string; extension: string }
	description: string
	urls: [{ url: string }, { url: string }]
	comics: { items: { resourceURI: string; name: string }[] }
}

export const fetchInfoList = createAsyncThunk<CharInfoType[], CharInfoParams>(
	"charInfo",
	async (params) => {
		const { id } = params

		const { data } = await axios.get<{ data: { results: DataType[] } }>(
			`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=0108668606aa7ba89d3cafd00e024e0b`
		)

		return data.data.results.map((item) => {
			return {
				id: item.id,
				name: item.name,
				thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
				description: item.description,
				wiki: item.urls[1].url,
				homePage: item.urls[0].url,
				comics: item.comics.items.slice(9, item.comics.items.length - 1),
			}
		})
	}
)
