import { CgStack } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { LuSearch } from "react-icons/lu";
import PlaylistSidebar from "./PlaylistSidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[380px] flex flex-col gap-2 p-2">
      <div className="bg-neutral-900 flex-col rounded-lg">
        <Link to='/' className=" links py-3 px-6 flex items-center gap-4">
          <GoHome className="text-2xl" />
          Home
        </Link>
        <Link to='/search'className="links py-3 px-6 flex items-center gap-4">
          <LuSearch className="text-2xl" />
          Search
        </Link>
      </div>
      <div className="bg-neutral-900 flex flex-col rounded-lg flex-grow h-[calc(100vh-192px)]">
        <a className="links py-3 px-6 flex items-center gap-4">
          <CgStack className="text-2xl" />
          Your Library
        </a>
        <div className="px-4 overflow-auto scrollbar">
          <PlaylistSidebar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
