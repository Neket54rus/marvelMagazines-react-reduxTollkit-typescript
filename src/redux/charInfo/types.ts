export interface CharInfoState {
	char: CharInfoType[]
	status: string
}

export type CharInfoType = {
	id: number
	name: string
	thumbnail: string
	description: string
	wiki: string
	homePage: string
	comics: { resourceURI: string; name: string }[]
}

export type CharInfoParams = {
	id: number
}
