export type FallbackStatus = "loading" | "error" | "empty"

export type Status = "success" | FallbackStatus;

export type Creators = { items: { name: string }[] }

export type Date = { type: string, date: string }

export type Thumbnail = { path: string, extension: string }

export type ComicProps = {
	id: string,
	title: string,
	thumbnail: Thumbnail,
	issueNumber?: number,
	dates?: Date[],
	creators?: Creators
}
