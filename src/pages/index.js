import { Button } from "@material-ui/core";
import Head from "next/head";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [value, setValue] = useState();

  const [isPermitedSubmit, setIsPermitedSubmit] = useState(false);

  useEffect(() => {
    setIsPermitedSubmit(value);
  }, [value]);

  function onSubmit(event) {
    event.preventDefault();

    const url = `https://api.whatsapp.com/send?phone=${value.replace("+", "")}`;

    window.open(url, "_blank").focus();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Whats Sem Adicionar</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <img
            src="/favicon.png"
            alt="Whats sem adicionar"
            width={64}
            height={64}
            style={{ margin: "0 auto 20px" }}
          />
          <h1 className={styles.title}>
            Inicie conversas no whatsapp sem adicionar
          </h1>
          <p className={styles.text}>
            Insira o número que deseja conversar abaixo,{" "}
            <b>sem precisar adicionar aos seus contatos</b>
          </p>
        </section>
        <form onSubmit={onSubmit} method="POST" className={styles.section}>
          <PhoneInput
            id="input-phone"
            defaultCountry="BR"
            limitMaxLength
            placeholder="Insira o número de telefone"
            value={value}
            onChange={setValue}
          />
          <Button
            type="submit"
            style={{ marginTop: 20 }}
            variant="contained"
            color="primary"
            disabled={!isPermitedSubmit}
          >
            Iniciar Conversa
          </Button>
        </form>
      </main>
    </div>
  );
}
