import { useContext, useEffect } from "react";
import { StateContext } from "../utils/StateProviders";
import axios from "axios";
import { reducerCases } from "../utils/reducer";

const Player = () => {
  const {state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const getCurrentPlaying = async () => {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data !== "") {
        const { item } = res.data;
        const currentPlaying = {
          id: item.id,
          name: item.name,
          image: item.album.images[2].url,
          artist: item.artists.map((artist: any) => artist),
        };
        dispatch({type: reducerCases.SET_PLAYING, currentPlaying})
      }
    };
    getCurrentPlaying();
  }, [dispatch]);
  return (
    <div className="h-[100px] bottom-0 ">
      <div className="flex gap-4  h-full items-center px-4 pb-2">
        <img src={state.currentPlaying?.image} className="h-14 w-14 rounded-md" alt="" />
        <div className="mb-2 flex-col">
          <h3 className=" text-white">{state.currentPlaying?.name}</h3>
          {state.currentPlaying?.artist.map((artist, index) => (
            <p key={index} className="text-xs">
              {artist.name}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default Player;
