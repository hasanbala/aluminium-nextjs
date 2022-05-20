import { Validation as validationSchema } from "@/components/validation";
import { useFormik } from "formik";
import { useRef } from "react";
import Head from "next/head";
import styles from "@/styles/contact.module.scss";
// import useFormHook from "../../hooks/useFormHook";

// const initialValues = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  // const [form, setForm] = useFormHook(initialValues);
  const id01 = useRef(0);
  const containerDiv = useRef(0);

  const alertSuccess = (message, bgc, c) => {
    id01.current.style.display = "block";
    containerDiv.current.textContent = message;
    containerDiv.current.style.backgroundColor = bgc;
    containerDiv.current.style.color = c;
    setTimeout(function () {
      id01.current.style.display = "none";
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
        await fetch("/api", {
          method: "POST",
          body: JSON.stringify(values),
        });
        resetForm();
        alertSuccess(
          "Mesajınız başarılı bir şekilde gönderilmiştir.",
          "#d4edda",
          "#5cb85c"
        );
      } catch (error) {
        alertSuccess(
          "Bir sorun oluştu, lütfen tekrar deneyiniz",
          "#f8d7da",
          "#762328"
        );
        console.log(error);
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
              <div id='id01' className={styles.modal} ref={id01}>
                <div className={styles["containerx"]} ref={containerDiv}></div>
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
                  />
                  {/* {errors.name && touched.name && (
                    <div className='err'> {errors.name} </div>
                  )} */}
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
                  />
                  {/* {errors.name && touched.name && (
                    <div className='err'> {errors.name} </div>
                  )} */}
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
                  />
                  {/* {errors.name && touched.name && (
                    <div className='err'> {errors.name} </div>
                  )} */}
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
                  />
                  {/* {errors.name && touched.name && (
                    <div className='err'> {errors.name} </div>
                  )} */}
                  <button className='btn-hover color-3' type='submit'>
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
