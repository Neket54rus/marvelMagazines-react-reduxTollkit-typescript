export interface ComicsListState {
	comicsList: ComicsListType[]
	status: string
	firstRender: boolean
	offset: number
}

export type ComicsListType = {
	id: number
	title: string
	thumbnail: string
	price: number
}

export type ComicsListParams = {
	offset: number
}
