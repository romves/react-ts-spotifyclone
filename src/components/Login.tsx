import { FaSpotify } from "react-icons/fa";

const Login = () => {
  const handleClick = () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
      "playlist-read-private"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-black rounded-xl w-[500px] h-[300px] flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-bold">Log in to Spotify</h1>
        <button
          onClick={handleClick}
          className="border border-neutral-500 hover:border-white rounded-full px-12 py-2 font-semibold flex items-center gap-3"
        >
          <FaSpotify className="text-green-500 text-2xl" />
          Connect Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
