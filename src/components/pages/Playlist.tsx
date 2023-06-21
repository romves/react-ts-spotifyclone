import axios from "axios";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../utils/StateProviders";
import { reducerCases } from "../../utils/reducer";
import spotifyLogo from "../../assets/spotifylogo.png";
import TrackList from "../TrackList";
import { ArtistType, SelectedPlaylistType, TrackType } from "../../lib/types";
import { convertMilliseconds, countDaysAdded } from "../../utils/dateUtils";

const Playlist = () => {
  const { state, dispatch } = useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    const getSelectedPlaylist = async () => {
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      const selectedPlaylist: SelectedPlaylistType = {
        name: data.name,
        desc: data.description,
        owner: data.owner.display_name,
        image: data.images[0].url,
        followers: data.followers.total,
        totalTracks: data.tracks.total,
        tracks: data.tracks.items.map((item: any) => ({
          id: item.track.id,
          name: item.track.name,
          artists: item.track.artists.map((artist: any) => artist),
          dateAdded: countDaysAdded(item.added_at),
          image: item.track.album.images[2].url,
          duration: convertMilliseconds(item.track.duration_ms),
          album: item.track.album.name,
          context_uri: item.track.album.uri,
          track_number: item.track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getSelectedPlaylist();
  }, [id, dispatch]);

  return (
    <div
      className={`h-[calc(100vh-100px)] overflow-auto scrollbar bg-gradient-to-b from-orange-400 from-0% via-orange-500 via-20% to-transparent to-60% bg-opacity-70`}
    >
      <div className="flex gap-6 h-[340px] p-6 items-end">
        <div className="flex gap-6">
          <div className="shadow-2xl">
            <img
              src={state.selectedPlaylist?.image}
              className="w-52 h-w-52"
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-between">
            <span className="font-semibold">Playlist</span>
            <h1 className="text-8xl font-bold">
              {state.selectedPlaylist?.name}
            </h1>
            <p className="text-sm pt-4">{state.selectedPlaylist?.desc}</p>
            <div className="text-sm flex items-center gap-1">
              <span className="font-bold flex items-center gap-1">
                <img src={spotifyLogo} className="h-7 w-7" /> {state.selectedPlaylist?.owner}
              </span>
              <span>
                • {state.selectedPlaylist?.followers.toLocaleString()} likes
              </span>
              <span>• {state.selectedPlaylist?.totalTracks} songs</span>
            </div>
          </div>
        </div>
      </div>
      <TrackList />
    </div>
  );
};

export default Playlist;
