export type FallbackStatus = "loading" | "error" | "empty";

export type Status = "success" | FallbackStatus;

export type Creators = { items: { name: string }[] };

export type Date = { type: string; date: string };

export type Thumbnail = { path: string; extension: string };

export type ComicProps = {
	id: string;
	title: string;
	thumbnail: Thumbnail;
	issueNumber?: number;
	dates?: Date[];
	creators?: Creators;
};

export type BuildProps = {
	buildComics: ComicProps[] | null;
	buildTotal: number | null;
	buildStatus: "error" | "success";
};

export type FetchData = { results: ComicProps[]; total: number };

export type FetchFull = {
	data?: FetchData;
	status?: string;
};

export type BuildObjProps = {
	data: FetchData;
	status: "success" | "error";
};

export type BuildDataProps = {
	buildData: {
		initial: BuildObjProps;
		creators: { [key: string]: BuildObjProps };
		characters: { [key: string]: BuildObjProps };
	};
};
