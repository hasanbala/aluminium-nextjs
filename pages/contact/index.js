import Head from "next/head";
import styles from "../../styles/Contact.module.scss";
import { useRef } from "react";
import { useFormik } from "formik";
import { Validation as validationSchema } from "../../components/Validation";
// import useFormHook from "../../hooks/useFormHook";

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const initialValues = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  // const [form, setForm] = useFormHook(initialValues);

  const id01 = useRef(0);
  const containerDiv = useRef(0);

  const alertSuccess = (message) => {
    id01.current.style.display = "block";
    containerDiv.current.textContent = message;
    containerDiv.current.style.backgroundColor = "#d4edda";
    containerDiv.current.style.color = "#5cb85c";
    setTimeout(function () {
      id01.current.style.display = "none";
    }, 1500);
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
    onSubmit: async (values, bag) => {
      try {
        // await sleep(1500);
        await fetch("/api", {
          method: "POST",
          body: JSON.stringify(values),
        });
        alertSuccess("Mesajınız başarılı bir şekilde gönderilmiştir.");
        resetForm();
      } catch (error) {
        console.log(error);
        // bag.setErrors({ general: error.response.data.message });
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
