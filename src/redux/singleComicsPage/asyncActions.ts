import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { SingleComicsPageParams, SingleComicsPageType } from "./types"

type DataType = {
	id: number
	title: string
	thumbnail: { path: string; extension: string }
	prices: [{ price: number }]
	pageCount: string
	description: string
}

export const fetchSingleComicsPage = createAsyncThunk<
	SingleComicsPageType[],
	SingleComicsPageParams
>("singleComicsPage", async (params) => {
	const { id } = params

	const { data } = await axios.get<{ data: { results: DataType[] } }>(
		`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=0108668606aa7ba89d3cafd00e024e0b`
	)

	return data.data.results.map((item) => {
		if (!item.description) {
			item.description = "No description"
		}

		return {
			id: item.id,
			title: item.title,
			thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
			price: item.prices[0].price,
			pageCount: item.pageCount,
			description: item.description,
		}
	})
})
