import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ComicsListParams, ComicsListType } from "./types"

type DataType = {
	id: number
	title: string
	thumbnail: { path: string; extension: string }
	prices: [{ price: number }]
}

export const fetchComicsList = createAsyncThunk<ComicsListType[], ComicsListParams>(
	"comicsList",
	async (params) => {
		const { offset } = params

		const { data } = await axios.get<{ data: { results: DataType[] } }>(
			`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset}&apikey=0108668606aa7ba89d3cafd00e024e0b`
		)

		return data.data.results.map((item) => {
			return {
				id: item.id,
				title: item.title,
				thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
				price: item.prices[0].price,
			}
		})
	}
)
