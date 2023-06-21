import { LuClock2 } from "react-icons/lu";
import { useContext } from "react";
import { StateContext } from "../utils/StateProviders";
import { TrackType } from "../lib/types";
import { BiPlay } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const TrackList = () => {
  const { state } = useContext(StateContext);

  return (
    <div className="bg-neutral-900 bg-opacity-30 h-fit text-neutral-400 text-sm">
      <div className="flex items-center px-6 py-6 gap-7">
        <button className="flex bg-green-500 text-black rounded-full p-2 items-center ">
          <BiPlay className="text-5xl" />
        </button>
        <button className="flex text-green-500 items-center ">
          <AiFillHeart className="text-4xl" />
        </button>
        <button className="flex items-center ">
          <BsThreeDots className="text-3xl" />
        </button>
      </div>
      <div className="header-grid-template border-b border-b-neutral-300 border-opacity-20 mb-4 pb-2">
        <div># </div>
        <div>Title </div>
        <div>Album </div>
        <div>Date Added</div>
        <div></div>
        <div>
          <LuClock2 className="text-xl"/>
        </div>
      </div>
      <div className="">
        {state.selectedPlaylist?.tracks.map(
          (track: TrackType, index: number) => (
            <div key={index} className="body-grid-template py-2">
              <div>
                <BiPlay className="text-2xl" />
              </div>
              <div className="flex gap-4">
                <img src={track.image} className="h-10 w-10" alt="" />
                <div>
                  <h3 className=" text-white">{track.name}</h3>
                  {track.artists.map((artist, index) => (
                    <p key={index} className="text-sm">{artist.name}</p>
                  ))}
                </div>
              </div>
              <div className="text-sm">{track.album}</div>
              <div>{track.dateAdded}</div>
              <div>
                <AiOutlineHeart className="text-xl" />
              </div>
              <div>{track.duration}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TrackList;
