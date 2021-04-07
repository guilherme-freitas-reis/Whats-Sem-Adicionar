import Head from "next/head";
import { Link, Primary } from "../components/Button/button";
import Input from "../components/Input/input";
import styles from "../styles/Home.module.css";

export default function Home() {

  function onSubmit(event) {
    event.preventDefault()

    const url = `https://api.whatsapp.com/send?phone=+55${event.target[0].value}${event.target[1].value}`

    window.open(url, '_blank').focus();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Whats Sem Adicionar</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>
            Inicie conversar no whatsapp sem adicionar
          </h1>
          <p className={styles.text}>
            Insira o número que deseja conversar abaixo,{" "}
            <b>sem precisar adicionar aos seus contatos</b>
          </p>
        </section>
        <form onSubmit={onSubmit} method="POST" className={styles.section}>
          <div className={styles.inputContainer}>
            <Input maxLength={2} style={{width: 75}} type="tel" placeholder="DDD" />
            <Input maxLength={9} style={{flex: 1}} type="tel" placeholder="Número de telefone" />
          </div>
          <Primary>Iniciar Conversa</Primary>
        </form>
      </main>
    </div>
  );
}
