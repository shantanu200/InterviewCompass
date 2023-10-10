import Image from "next/image";
import AuthImage from "../../assets/Auth.svg";
import { HTMLProps } from "react";
interface PropImage {
  className?: HTMLProps<HTMLElement>["className"];
}
export default function ImageBox(props: PropImage) {
  const { className } = props;
  return (
    <section
      className={`w-2/5 bg-[#007BFF] flex justify-center items-center rounded-l-lg ${className}`}
    >
      <Image src={AuthImage} alt="Auth Image" className="w-10/12" />
    </section>
  );
}
