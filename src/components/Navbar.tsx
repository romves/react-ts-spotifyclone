import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useContext } from "react";
import { StateContext } from "../utils/StateProviders";
import axios from "axios";
import { reducerCases } from "../utils/reducer";

const Navbar = () => {
  const { state, dispatch } = useContext(StateContext);
  useEffect(() => {
    const getCurrentUserProfile = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        username: data.display_name,
        images: data.images
      }
      console.log(data.images[0].url)
      dispatch({ type: reducerCases.SET_USER, userInfo})
    };
    getCurrentUserProfile();
  }, [state.token, dispatch]);

  return (
    <div className="h-[65px] flex items-center rounded-t-lg bg-transparent bg-opacity-30 justify-between px-4 fixed" style={{ width: "calc(100vw - 304px)" }} >
      <div className="flex gap-2">
        <a className="rounded-full w-8 h-8 bg-neutral-900 bg-opacity-90 flex items-center justify-center">
          <BsChevronLeft className="text-xl" />
        </a>
        <a className="rounded-full w-8 h-8 bg-neutral-900 bg-opacity-90 flex items-center justify-center">
          <BsChevronRight className="text-xl" />
        </a>
      </div>
      <div className="flex gap-2">
        <button className="text-sm bg-white px-3 py-1 rounded-full text-black font-bold scale-hover">
          Explore Premium
        </button>
        <button onClick={() => [
          localStorage.removeItem('token')
        ]} className="text-sm flex items-center bg-neutral-900 bg-opacity-90 px-3 py-1 rounded-full font-bold gap-1 scale-hover">
          <MdOutlineDownloadForOffline className="text-xl" />
          Install App
        </button>
        <div className="border-4 border-neutral-900 border-opacity-90 scale-hover overflow-hidden rounded-full w-8 h-8 bg-neutral-900 bg-opacity-90">
          <img src={state.userInfo?.images[0].url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
