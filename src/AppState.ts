export interface AppState {
	searchText: string;
	gifs: Gif[];
}

export interface Gif {
  id: string;
  title: string;
  embed_url: string;
}