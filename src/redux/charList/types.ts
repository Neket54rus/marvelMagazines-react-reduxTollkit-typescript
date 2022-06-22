export interface CharListState {
	charList: CharListType[]
	status: string
	firstRender: boolean
	offset: number
}

export type CharListType = {
	id: number
	name: string
	thumbnail: string
}

export type CharListParams = {
	offset: number
}
