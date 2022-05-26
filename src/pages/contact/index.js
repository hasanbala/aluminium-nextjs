import { Validation as validationSchema } from "@components/validation";
import { useFormik } from "formik";
import Head from "next/head";
import styles from "@styles/contact.module.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import clsx from "clsx";

const stylex = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const Contact = () => {
  const [status, setStatus] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        toast.info("Bilgileriniz gönderiliyor", stylex);
        setStatus(true);
        await fetch("/api", {
          method: "POST",
          body: JSON.stringify(values),
        });
        resetForm();
        toast.success("Mesajınız başarılı bir şekilde gönderilmiştir.", stylex);
      } catch (error) {
        resetForm();
        toast.error("Bir sorun oluştu, lütfen tekrar deneyiniz", stylex);
      } finally {
        setStatus(false);
      }
    },
    validationSchema,
  });

  const errorNames = clsx({
    [styles.hover]: errors.name && touched.name === true,
  });
  const errorEmails = clsx({
    [styles.hover]: errors.email && touched.email === true,
  });
  const errorSubjects = clsx({
    [styles.hover]: errors.subject && touched.subject === true,
  });
  const errorMessages = clsx({
    [styles.hover]: errors.message && touched.message === true,
  });

  return (
    <div>
      <Head>
        <title>ABK Alüminyum | İletişim</title>
      </Head>

      <main>
        <section>
          <div className={styles.contact} id='contact'>
            <div className={styles["contact-body"]}>
              <h2>İLETİŞİM</h2>
              <hr className='main-hr' />
            </div>
            <div className={styles["contact-sub"]}>
              <div className={styles["contact-symbol"]}>
                <p>
                  <i className='fa fa-map-marker' /> Chicago, US
                </p>
                <p>
                  <i className='fa fa-phone' /> Phone: 444 0 444
                </p>
                <p>
                  <i className='fa fa-envelope' /> Email: abkaluminyum@gmail.com
                </p>
              </div>
              <div className={styles["contact-forms"]}>
                <form onSubmit={handleSubmit}>
                  <input
                    className={errorNames}
                    type='text'
                    placeholder='İsim & Soyisim'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <input
                    className={errorEmails}
                    type='text'
                    placeholder='Email Adresi'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <input
                    className={errorSubjects}
                    type='text'
                    placeholder='Mesaj Konusu'
                    name='subject'
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <textarea
                    className={errorMessages}
                    id='message'
                    name='message'
                    placeholder='Mesaj..'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <button
                    className={styles["btn-hover"]}
                    type='submit'
                    disabled={status == true}>
                    GÖNDER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ToastContainer theme='colored' />
    </div>
  );
};

export default Contact;
