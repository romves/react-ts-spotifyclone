import Player from "../Player";
import Sidebar from "../Sidebar";
import ContentLayout from "./ContentLayout";

const SpotifyLayout = () => {
  return (
    <div className="bg-black h-screen max-h-screen max-w-screen flex flex-col">
      <div className="flex ">
        <Sidebar />
        <ContentLayout />
      </div>
      <Player />
    </div>
  );
};

export default SpotifyLayout;
