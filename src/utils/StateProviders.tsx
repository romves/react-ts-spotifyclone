import { createContext, useReducer, useContext, ReactNode } from "react";
import reducer from "./reducer";
import { PlaylistType } from "../lib/types";

export const initialState = {
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
};

export interface InitialStateType {
  token: string | null;
  userInfo: any;
  playlists: PlaylistType[];
  currentPlaying: any | null;
  playerState: boolean;
  selectedPlaylist: any | null;
  selectedPlaylistId: string;
}

export const StateContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface StateProviderType {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
