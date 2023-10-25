import { IPropPrfile } from "@/interfaces/Dashboard/Company";
import { BiUser } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function CompanyContact(props: IPropPrfile) {
  const { profile } = props;
  return (
    <section className="px-8 py-4">
      <h1 className="text-xl font-bold">Contact Person</h1>
      <div className="my-4 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <BiUser />
          <p>{profile?.contactPerson?.name || "Name not assigned"}</p>
        </div>
        <div className="flex gap-4 items-center">
          <MdOutlineMail />
          <p>{profile?.contactPerson?.email || "Email not assigned"}</p>
        </div>
        <div className="flex gap-4 items-center">
          <BsTelephone />
          <p>
            {profile?.contactPerson?.phoneNumber || "PhoneNumber not assigned"}
          </p>
        </div>
      </div>
    </section>
  );
}
