import { APICall } from "@/app/server/config";
import ErrorText from "@/common/ErrorText";
import TextArea from "@/common/TextArea";
import { IPropPrfile } from "@/interfaces/Dashboard/Company";
import { validateAboutDetails } from "@/schemas/schemas";
import { Modal } from "antd";
import { Formik } from "formik";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function CompanyAbout(props: IPropPrfile) {
  const { profile } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <section className="py-4 w-1/2">
      <div className="border-r-2 px-4">
        <h1 className="text-xl font-bold relative">
          About{" "}
          <FiEdit
            onClick={() => setModalOpen(true)}
            className="absolute text-sm top-0 right-0"
          />
        </h1>
        <p className="text-justify text-sm my-4">
          {profile?.description || "Please add company description"}
        </p>
      </div>
      <Formik
        initialValues={{
          description: profile?.description || "",
        }}
        validationSchema={validateAboutDetails}
        enableReinitialize
        onSubmit={async (values) => {
          const { reqStatus, data, message } = await APICall(
            "PUT",
            `/api/company`,
            {
              description: values.description,
            },
            {
              Authorization: `Bearer ${localStorage.getItem("ACCESSTOKEN")}`,
            },
          );
          if (!reqStatus) alert(message);

          setModalOpen(false);
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
          <Modal
            title="Company Description"
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            onOk={() => handleSubmit()}
          >
            <>
              <TextArea
                rows={8}
                value={values.description}
                handleChange={handleChange("description")}
                handleBlur={handleBlur("description")}
                placeHolder="Tell something about your organisation...."
                className="w-full"
              />
              {errors.description && touched.description && (
                <ErrorText error={errors.description} />
              )}
            </>
          </Modal>
        )}
      </Formik>
    </section>
  );
}
