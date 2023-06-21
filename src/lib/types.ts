export interface PlaylistType {
  name: string;
  id: string;
  images: ImageType[];
  owner: OwnerType;
}

export interface ExternalUrlsType {
  spotify: string;
}

export interface OwnerType {
  display_name: string;
  external_urls: ExternalUrlsType;
}

export interface ImageType {
  height: number | null;
  url: string;
  width: number | null;
}

export interface TrackType {
  id: string;
  name: string;
  dateAdded: string;
  artists: ArtistType[];
  image: string;
  duration: number;
  album: string;
  context_uri: string;
  track_number: number;
}

export interface ArtistType {
  name: string;
}

export interface SelectedPlaylistType {
  name: string;
  desc: string;
  owner: string;
  image: string;
  followers: number;
  totalTracks: number;
  tracks: TrackType[];
}
