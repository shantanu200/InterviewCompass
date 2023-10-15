"use client";
import { APICall, POSTDATA } from "@/app/server/config";
import ErrorText from "@/common/ErrorText";
import PrimaryButton from "@/common/PrimaryButton";
import TextArea from "@/common/TextArea";
import TextInput from "@/common/TextInput";
import connectDatabase from "@/lib/mongo";
import { ValidationCompany } from "@/schemas/schemas";
import { TextField } from "@mui/material";
import { error } from "console";
import { Formik } from "formik";
import { HTMLProps, useState } from "react";
import { BsGoogle } from "react-icons/bs";

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
];

interface PropForm {
  className?: HTMLProps<HTMLElement>["className"];
  setIsLogin?: (values: any) => void;
}

const FormBox: React.FC<PropForm> = ({ className, setIsLogin }) => {
  return (
    <section className={`p-8 w-3/5 ${className}`}>
      <h1 className="text-3xl font-bold my-8">
        Grow your business with InterviewCompass.
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          website: "",
          address: "",
        }}
        validationSchema={ValidationCompany}
        onSubmit={async (values) => {
          const { reqStatus, message } = await APICall(
            "POST",
            `/api/auth/register`,
            values,
          );

          if (reqStatus) {
            alert("Company is created");
          } else {
            alert(message);
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <div className="grid gap-8 grid-cols-2">
            {RENDERINPUT.map((inp, idx) => (
              <div key={idx}>
                <TextInput
                  name={inp.name}
                  value={values[`${inp.name}`]}
                  placeHolder={inp.placeHolder}
                  handleChange={handleChange(`${inp.name}`)}
                  handleBlur={handleBlur(`${inp.name}`)}
                />
                {touched[inp?.name] && errors[inp?.name] && (
                  <ErrorText error={errors[inp?.name]} />
                )}
              </div>
            ))}
            <div className="col-span-2">
              <TextArea
                className="w-full resize-none"
                rows={6}
                cols={30}
                name="address"
                value={values["address"]}
                handleChange={handleChange("address")}
                handleBlur={handleBlur("address")}
                placeHolder="Company Address"
              />
              {touched["address"] && errors["address"] && (
                <ErrorText error={errors["address"]} />
              )}
            </div>
            <PrimaryButton
              type="submit"
              text="Hire the Best Talent"
              className="col-span-2 rounded-lg text-lg"
              handleFunction={handleSubmit}
            />
            <div className="col-span-2 text-center">OR</div>
            <PrimaryButton
              icon={<BsGoogle className="text-blue-600" />}
              text="Create Account with Google"
              className="col-span-2 flex items-center justify-center gap-4 bg-white text-blue-700 rounded-lg text-lg"
              handleFunction={() => {}}
            />
          </div>
        )}
      </Formik>
    </section>
  );
};

export default FormBox;
