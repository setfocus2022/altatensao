import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import * as gtag from "../../lib/gtag";
import styles from "./styles.module.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Orçamento pelo Whatsapp",
      value: "Marcar consulta",
    });
  }

  function agendarConsultaMenu() {
    setShowMenu(false);
    gtag.event({
      action: "agendar_consulta_cabeçalho",
      category: "marcar_consulta_whatsapp_cabeçalho",
      label: "Fale com nossos vendedores",
      value: "Fale Conosco",
    });
  }

  return (
    <>
      <header className={styles.header}>
        <div className="mainContainer">
          <Link href="/">
            <a>
              <Image
                src="/icons/logo_transparente.png"
                alt="Eletro Santa Clara"
                width="180"
                height="64"
              />
            </a>
          </Link>

          <button
            className={
              showMenu
                ? `${styles.btnMenuMobile} ${styles.menuOpen}`
                : styles.btnMenuMobile
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
            <span className={styles.iconHamburguer}></span>
          </button>

          <nav className={styles.menu}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/">
              <a>Produtos</a>
            </Link>
            <Link href="/">
              <a>A Empresa</a>
            </Link>
            <Link href="/">
              <a>Localização</a>
            </Link>

          </nav>

          <div className={styles.btnAgendar}>
            <Button
              dark
              onClick={agendarConsulta}
              link="https://wa.me/5514981189197"
            >
               <img src="/icons/whatsIcon.svg" alt="whatsapp" />
              Fale com nossos vendedores
            </Button>
          </div>
        </div>

        <nav
          className={
            showMenu
              ? `${styles.menuMobile} ${styles.active}`
              : styles.menuMobile
          }
        >
          <ul>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Serviços</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>A Empresa</a>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/">
                <a>Localização</a>
              </Link>
            </li>

            <li onClick={agendarConsultaMenu}>
              <Link href="https://wa.me/5514981189197">
                <a target="_blank">Fale com nossos vendedores</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
