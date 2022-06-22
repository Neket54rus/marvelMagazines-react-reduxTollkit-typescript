export interface RandomCharState {
	char: RandomCharType[]
	status: string
}

export type RandomCharType = {
	id: number
	name: string
	description: string
	thumbnail: string
	wiki: string
	homePage: string
}
