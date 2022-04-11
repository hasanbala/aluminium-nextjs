import Head from "next/head";
import styles from "../../styles/Contact.module.scss";
import useFormHook from "../../hooks/useFormHook";

const initialValues = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useFormHook(initialValues);

  const handleSubmitForms = async (e) => {
    e.preventDefault();
    console.log(form);
    await setForm(initialValues);
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
              <div id='id01' className={styles.modal}>
                <div className={styles["containerx animate"]} />
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
