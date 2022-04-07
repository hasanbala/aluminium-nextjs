import Head from "next/head";
import styles from "../../styles/Contact.module.scss";

const Contact = () => {
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
                <input
                  className={styles.fname}
                  type='text'
                  placeholder='İsim & Soyisim'
                  name='name'
                />
                <input
                  className={styles.femail}
                  type='text'
                  placeholder='Email Adresi'
                  name='email'
                />
                <input
                  className={styles.fsubject}
                  type='text'
                  placeholder='Mesaj Konusu'
                  name='subject'
                />
                <textarea
                  className={styles.fmessage}
                  id='message'
                  name='message'
                  placeholder='Mesaj..'
                  required
                />
                <button className='btn-hover color-3' type='submit'>
                  GÖNDER
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
