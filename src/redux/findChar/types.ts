export interface FindCharState {
	char: FindCharType[]
	status: string
}

export type FindCharType = {
	id: number
	name: string
	thumbnail: string
	description: string
}

export type FindCharParams = {
	string: string
}
