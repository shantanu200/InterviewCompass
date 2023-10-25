"use client";
import { APICall } from "@/app/server/config";
import ErrorText from "@/common/ErrorText";
import PrimaryButton from "@/common/PrimaryButton";
import TextInput from "@/common/TextInput";
import { ValidationCompanyLogin } from "@/schemas/schemas";
import { COLORS } from "@/utils/color";
import { Alert, Spin } from "antd";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { HTMLProps, useState } from "react";
import { BsGoogle } from "react-icons/bs";

interface PropForm {
  className?: HTMLProps<HTMLElement>["className"];
  setIsLogin?: (values: any) => void;
}
const LoginBox: React.FC<PropForm> = ({ className, setIsLogin }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <section className={`p-8 w-3/5 grid grid-cols-1 gap-8  ${className}`}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationCompanyLogin}
        onSubmit={async (values) => {
          setLoading(true);
          const { reqStatus, data, message } = await APICall(
            "POST",
            "/api/auth/login?type=company",
            {
              email: values?.email,
              password: values?.password,
            },
          );

          if (reqStatus) {
            setLoading(false);
            localStorage.setItem("ACCESSTOKEN", String(data?.token));
            alert(`Login Successful`);
            router.push(`/company/home`);
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
          errors,
          touched,
        }) => (
          <div className="grid grid-cols-1 gap-8">
            <div>
              <TextInput
                name="email"
                value={values.email}
                handleBlur={handleBlur("email")}
                placeHolder="Company Email"
                handleChange={handleChange("email")}
              />
              {errors.email && touched.email && (
                <ErrorText error={errors.email} />
              )}
            </div>
            <div>
              <TextInput
                name="password"
                type="password"
                value={values.password}
                handleBlur={handleBlur("password")}
                placeHolder="Company password"
                handleChange={handleChange("password")}
              />
              {errors.password && touched.password && (
                <ErrorText error={errors.password} />
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <PrimaryButton
                className={`text-white p-4 bg-[${COLORS.secondary}]`}
                text="Sign In"
                handleFunction={handleSubmit}
              />
              <PrimaryButton
                icon={<BsGoogle />}
                className={`text-blue-600 p-4 bg-white flex justify-center gap-4 items-center`}
                text="Login with Google"
                handleFunction={() => {}}
              />
            </div>
          </div>
        )}
      </Formik>
      <div
        onClick={() => setIsLogin(false)}
        className="border-t-2 p-4 text-center"
      >
        <a>New Company Register</a>
      </div>
    </section>
  );
};

export default LoginBox;
