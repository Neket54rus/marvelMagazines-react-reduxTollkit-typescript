export interface SingleComicsPageState {
	singleComicsPage: SingleComicsPageType[]
	status: string
}

export type SingleComicsPageType = {
	id: number
	title: string
	thumbnail: string
	pageCount: string
	price: number
	description: string
}

export type SingleComicsPageParams = {
	id: string
}
