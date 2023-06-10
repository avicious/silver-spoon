import styles from "./Form.module.css";

const Form = () => {
  const formSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={styles.form}>
      <h2>Make a reservation</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          autoComplete="true"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          autoComplete="true"
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Message and Phone Number"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
export default Form;
