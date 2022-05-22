import { Validation as validationSchema } from "@/components/validation";
import { useFormik } from "formik";
import Head from "next/head";
import styles from "@/styles/contact.module.scss";
import { useRef, useState } from "react";
// import useFormHook from "../../hooks/useFormHook";

// const initialValues = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  // const [form, setForm] = useFormHook(initialValues);
  const [status, setStatus] = useState(false);

  const divmodal = useRef(0);
  const divcontainer = useRef(0);

  const alertifyOpen = () => (divmodal.current.style.display = "block");
  const alertifyClose = () => (divmodal.current.style.display = "none");

  const notification = (message, bgc, c) => {
    divcontainer.current.textContent = message;
    divcontainer.current.style.backgroundColor = bgc;
    divcontainer.current.style.color = c;
    setTimeout(function () {
      alertifyClose();
      divcontainer.current.textContent = "";
      divcontainer.current.style.backgroundColor = null;
      divcontainer.current.style.color = null;
    }, 2000);
  };

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
        setStatus(true);
        alertifyOpen();
        await fetch("/api", {
          method: "POST",
          body: JSON.stringify(values),
        });
        resetForm();
        notification(
          "Mesajınız başarılı bir şekilde gönderilmiştir.",
          "#d4edda",
          "#5cb85c"
        );
      } catch (error) {
        resetForm();
        notification(
          "Bir sorun oluştu, lütfen tekrar deneyiniz",
          "#f8d7da",
          "#762328"
        );
      } finally {
        setStatus(false);
      }
    },
    validationSchema,
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
              <div className={styles.modal} ref={divmodal}>
                <div className={styles.containerx} ref={divcontainer}></div>
              </div>
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
                    className={errors.name && touched.name ? styles.hover : ""}
                    type='text'
                    placeholder='İsim & Soyisim'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <input
                    className={
                      errors.email && touched.email ? styles.hover : ""
                    }
                    type='text'
                    placeholder='Email Adresi'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <input
                    className={
                      errors.subject && touched.subject ? styles.hover : ""
                    }
                    type='text'
                    placeholder='Mesaj Konusu'
                    name='subject'
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={status == true}
                  />
                  <textarea
                    className={
                      errors.message && touched.message ? styles.hover : ""
                    }
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
    </div>
  );
};

export default Contact;
