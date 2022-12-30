import { BsPinterest } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotifications, IoIosArrowUp } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
export const Navbar = () => {
  const active = "text-white bg-black w-auto px-4 py-2 rounded-full";
  return (
    <nav
      className="lg:w-full 
    lg:bg-white lg:fixed 
    lg:z-10 lg:p-4 lg:shadow-sm
    lg:flex lg:justify-around 
    lg:items-center hidden">
      <span className="text-red-600 text-3xl">
        <BsPinterest />
      </span>
      <ul className="flex font-bold justify-center items-center">
        <li className={`m-2 ${active}`}>
          <button>Home</button>
        </li>
        <li className="m-2 ">
          <button>Today</button>
        </li>
        <li className="m-2  flex">
          <button>Create</button>
          <span className="rotate-180">
            <IoIosArrowUp />
          </span>
        </li>
      </ul>
      <div className="w-8/12 flex bg-gray-200 p-2 rounded-full ">
        <span className="text-3xl text-gray-600 ">
          <BiSearchAlt />
        </span>
        <input
          type="text"
          className="bg-transparent mx-2"
          placeholder="Search"
        />
      </div>
      <span className="text-3xl text-gray-600">
        <IoIosNotifications />
      </span>
      <span className="text-3xl text-gray-600">
        <AiOutlineMessage />
      </span>
      <div className="flex items-center">
        <img
          src="https://picsum.photos/24"
          alt="profile"
          className="rounded-full object-cover w-6 h-6 "
        />
        <span className="rotate-180  ml-3">
          <IoIosArrowUp />
        </span>
      </div>
    </nav>
  );
};
