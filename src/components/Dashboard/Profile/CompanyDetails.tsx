import { IPropPrfile } from "@/interfaces/Dashboard/Company";
import Image from "next/image";
import UserImage from "../../../assets/UserImage.svg";
import PrimaryButton from "@/common/PrimaryButton";
import { FiEdit } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { PiUsersBold } from "react-icons/pi";
import { BsCalendar } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { Modal } from "antd";
import { useState } from "react";
import { Formik, prepareDataForValidation } from "formik";
import TextInput from "@/common/TextInput";
import { ValidationCompany, validateCompanyDetails } from "@/schemas/schemas";
import ErrorText from "@/common/ErrorText";
import { APICall } from "@/app/server/config";
import { CldUploadButton } from "next-cloudinary";

const RENDERINPUT = [
  {
    name: "name",
    placeHolder: "Company Name",
  },
  {
    name: "email",
    placeHolder: "Company Email",
  },
  {
    name: "phoneNumber",
    placeHolder: "Company PhoneNumber",
  },
  {
    name: "website",
    placeHolder: "Company Website",
  },
  {
    name: "size",
    placeHolder: "Employees Count",
  },
  {
    name: "foundingYear",
    placeHolder: "Company Founding Year",
  },
];

export default function CompanyDetails(props: IPropPrfile) {
  const { profile } = props;
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex gap-8 items-center border-b-2 p-4">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={profile?.profileImage || UserImage}
            alt=""
            width={128}
            height={128}
            className="rounded-full"
          />
          <CldUploadButton
            className="border p-2 rounded-lg"
            uploadPreset="interviewcompass"
            onUpload={async (result: any) => {
              const { reqStatus, data, message } = await APICall(
                "PUT",
                `/api/company`,
                {
                  profileImage: result?.info?.url,
                },
                {
                  Authorization: `Bearer ${localStorage.getItem(
                    "ACCESSTOKEN",
                  )}`,
                },
              );

              if (!reqStatus) {
                alert(message);
              }
            }}
          />
        </div>
        <div>
          <div className="mb-8 relative">
            <h1 className="text-3xl font-bold">
              {profile?.name ? profile.name : "Unregistered Name"}
            </h1>
            <p>Company</p>
            <div className="absolute top-0 right-0">
              <FiEdit onClick={() => setModelOpen(true)} />
            </div>
          </div>
          <div className="flex flex-1 gap-8">
            <div className="flex items-center gap-2">
              <HiOutlineMail />
              <p>{profile?.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <GrContactInfo />
              <p>
                {profile?.phoneNumber ? profile?.phoneNumber : "PhoneNumber"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CgWebsite />
              <p>{profile?.website ? profile?.website : "Website"}</p>
            </div>
            <div className="flex items-center gap-2">
              <PiUsersBold />
              <p>
                {profile?.size ? `${profile?.size}+ Employees` : "Company Size"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsCalendar />
              <p>{profile?.foundingYear ? profile?.foundingYear : "Year"}</p>
            </div>
            <div className="flex items-center gap-2">
              <LiaIndustrySolid />
              <p>{profile?.industry ? profile?.industry : "Industry"}</p>
            </div>
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          name: profile?.name || "",
          email: profile?.email || "",
          phoneNumber: profile?.phoneNumber || "",
          website: profile?.website || "",
          size: profile?.size || "",
        }}
        enableReinitialize
        validationSchema={validateCompanyDetails}
        onSubmit={async (values) => {
          const { reqStatus, data, message } = await APICall(
            "PUT",
            `/api/company`,
            values,
            {
              Authorization: `Bearer ${localStorage.getItem("ACCESSTOKEN")}`,
            },
          );

          if (reqStatus) {
            alert("Data is updated");
          } else {
            alert(message);
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Modal
            title="Company Details"
            open={modelOpen}
            onOk={() => handleSubmit()}
            onCancel={() => setModelOpen(false)}
          >
            <div className="grid grid-cols-1 gap-4">
              {RENDERINPUT.map((input, idx) => (
                <div>
                  <TextInput
                    placeHolder={input.placeHolder}
                    handleChange={handleChange(`${input.name}`)}
                    handleBlur={handleBlur(`${input.name}`)}
                    value={values[`${input.name}`]}
                  />
                  {errors[input.name] && touched[input.name] && (
                    <ErrorText error={errors[input.name]} />
                  )}
                </div>
              ))}
            </div>
          </Modal>
        )}
      </Formik>
    </>
  );
}
