import React from 'react';

const Contacto = () => {
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Nombre" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <textarea placeholder="Mensaje" className={styles.textarea}></textarea>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
