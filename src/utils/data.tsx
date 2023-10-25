import { IMenu } from "@/interfaces/AppBar";
import { FiHome, FiUserCheck } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";

export const CompanyItems: IMenu[] = [
  {
    label: "Home",
    route: "home",
    isSelected: true,
    icon: <FiHome />,
  },
  {
    label: "Profile",
    route: "profile",
    isSelected: false,
    icon: <HiOutlineUser />,
  },
  {
    label: "Teams",
    route: "teams",
    isSelected: false,
    icon: <PiUsersThreeBold />,
  },
  {
    label: "Applicants",
    route: "applicants",
    isSelected: false,
    icon: <RiPagesLine />,
  },
  {
    label: "Interviews",
    route: "interviews",
    isSelected: false,
    icon: <FiUserCheck />,
  },
];
