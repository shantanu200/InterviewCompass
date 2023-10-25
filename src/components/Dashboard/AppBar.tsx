import { IAppBar } from "@/interfaces/AppBar";
import { COLORS } from "@/utils/color";
import UserImage from "../../assets/UserImage.svg";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function AppBar(props: IAppBar) {
  const router = useRouter();
  const pathName = usePathname();
  const currRoute = pathName.split("/")[2];

  console.log(currRoute);
  const {
    title,
    menuOptions,
    handleChange,
    selectedIndex,
    isFullScreen,
    handleWidth,
  } = props;

  const handleRoute = (route: string) => {
    router.push(`/company/${route}`);
  };
  return (
    <nav
      className={`${isFullScreen ? "w-[5%]" : "w-1/5"} min-h-screen border p-6`}
    >
      <div>
        <h1 className="text-3xl font-bold cursor-pointer" onClick={handleWidth}>
          {isFullScreen ? <AiOutlineMenu onClick={handleWidth} /> : title}
        </h1>
        {isFullScreen ? (
          <Image
            alt="UserProfile Image"
            src={UserImage}
            width={32}
            height={32}
            className="mt-8 rounded-full hover:drop-shadow-image"
          />
        ) : (
          <div className="p-4 border my-4 rounded-lg text-xl flex gap-4 items-center">
            <Image
              alt="UserProfile Image"
              src={UserImage}
              width={32}
              height={32}
              className="rounded-full hover:drop-shadow-image"
            />
            <span className="text-lg">Shantanu Bhusari</span>
          </div>
        )}
      </div>
      <section className="my-4">
        <ul className="flex flex-col items-center">
          {menuOptions?.map((menu, idx) =>
            isFullScreen ? (
              <li
                key={idx}
                onClick={() => {
                  handleChange(idx);
                  handleRoute(menu.route);
                }}
                className={`my-4 text-3xl transition-all ease-in duration-300 ${
                  currRoute === menu.route
                    ? `text-[${COLORS.primary}]`
                    : "text-black"
                }`}
              >
                {menu.icon}
              </li>
            ) : (
              <li
                key={idx}
                onClick={() => {
                  handleChange(idx);
                  handleRoute(menu.route);
                }}
                className={` border border-zinc-300 p-4 w-full my-2 text-sm flex items-center gap-4 rounded-lg transition-all ease-in-out duration-300 cursor-pointer ${
                  currRoute === menu.route
                    ? `bg-[${COLORS.primary}] text-white`
                    : "bg-white"
                }`}
              >
                {menu.icon}
                {menu.label}
              </li>
            ),
          )}
        </ul>
      </section>
    </nav>
  );
}
