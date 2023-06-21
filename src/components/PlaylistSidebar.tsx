import axios from "axios";
import { LuSearch } from "react-icons/lu";
import { useEffect, useContext } from "react";
import { reducerCases } from "../utils/reducer";
import { StateContext } from "../utils/StateProviders";
import { PlaylistType } from "../lib/types";
import { Link } from "react-router-dom";

const PlaylistSidebar = () => {
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const getPlaylistData = async () => {
      const res = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
        },
      });
      const { items } = res.data;
      const playlists = items.map(({ name, id, images, owner }: PlaylistType) => {
        return { name, id, images, owner };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [state.token, dispatch]);

  return (
    <div className="">
      <div className="rounded-md py-2 items-center flex mb-4">
        <button className="rounded-full hover:bg-neutral-700 p-1">
          <LuSearch className="text-xl " />
        </button>
      </div>

      <div className="flex flex-col gap-1 ">
        {state.playlists.map((playlist) => (
          <Link to={`/playlist/${playlist.id}`} key={playlist.id} className="flex gap-2 hover:bg-neutral-800 p-[4px] rounded-md">
            <img
              src={playlist.images[0].url}
              alt="playlist"
              className="h-12 w-12 rounded-md"
            />
            <div className="flex flex-col justify-center gap-1">
              <h3 className="">
                {playlist.name.length > 5
                  ? playlist.name.substring(0, 20) + "..."
                  : playlist.name}
              </h3>
              <span className="text-neutral-400 text-sm">
                Playlist •{" "}
                {playlist.owner.display_name.length > 5
                  ? playlist.owner.display_name.substring(0, 15) + "..."
                  : playlist.owner.display_name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSidebar;
