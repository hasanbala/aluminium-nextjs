import Head from "next/head";
import styles from "../../styles/Contact.module.scss";
import useFormHook from "../../hooks/useFormHook";
import { useRef } from "react";

const initialValues = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useFormHook(initialValues);

  const validateForm = () => {
    if (
      form.name === "" ||
      form.email === "" ||
      form.subject === "" ||
      form.message === ""
    ) {
      console.log("yanlış");
      setForm(initialValues);
      return false;
    }
    return true;
  };

  const handleSubmitForms = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alertWarning("Lütfen tüm alanları doldurun");
      return;
    }
    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    alertSuccess("Mesajınız başarılı bir şekilde gönderilmiştir");
    await setForm(initialValues);
  };

  const formAlertId = useRef();
  const formAlertCont = useRef();

  const alertWarning = (message) => {
    formAlertId.current = () => {
      document.documentElement.style.display = "block";
    };
    formAlertCont.current = () => {
      document.documentElement.textContent = message;
      document.documentElement.style.background = "#f8d7da";
      document.documentElement.style.color = "#d9534f";
    };
    setTimeout(function () {
      formAlertId.current = () => {
        document.documentElement.style.display = "none";
      };
    }, 3000);
  };

  const alertSuccess = (message) => {
    formAlertId.current = () => {
      document.documentElement.style.display = "block";
    };
    formAlertCont.current = () => {
      document.documentElement.textContent = message;
      document.documentElement.style.background = "#d4edda";
      document.documentElement.style.color = "#5cb85c";
    };
    setTimeout(function () {
      formAlertId.current = () => {
        document.documentElement.style.display = "none";
      };
    }, 3000);
  };

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <main>
        <section>
          <div className={styles.contact} id='contact'>
            <div className={styles["contact-body"]}>
              <h2>İLETİŞİM</h2>
              <hr className='main-hr' />
              <div id='id01' className={styles.modal} ref={formAlertId}>
                <div
                  className={styles["containerx animate"]}
                  ref={formAlertCont}
                />
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
                <form onSubmit={handleSubmitForms}>
                  <input
                    className={styles.fname}
                    type='text'
                    placeholder='İsim & Soyisim'
                    name='name'
                    value={form.name}
                    onChange={setForm}
                  />
                  <input
                    className={styles.femail}
                    type='text'
                    placeholder='Email Adresi'
                    name='email'
                    value={form.email}
                    onChange={setForm}
                  />
                  <input
                    className={styles.fsubject}
                    type='text'
                    placeholder='Mesaj Konusu'
                    name='subject'
                    value={form.subject}
                    onChange={setForm}
                  />
                  <textarea
                    className={styles.fmessage}
                    id='message'
                    name='message'
                    placeholder='Mesaj..'
                    value={form.message}
                    onChange={setForm}
                  />
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
