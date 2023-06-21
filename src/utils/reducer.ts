export enum reducerCases {
  SET_TOKEN = "SET_TOKEN",
  SET_USER = "SET_USER",
  SET_PLAYLISTS = "SET_PLAYLISTS",
  SET_PLAYING = "SET_PLAYING",
  SET_PLAYER_STATE = "SET_PLAYER_STATE",
  SET_PLAYLIST = "SET_PLAYLIST",
  SET_PLAYLIST_ID = "SET_PLAYLIST_ID",
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    default:
      break;
  }
};

export default reducer;
