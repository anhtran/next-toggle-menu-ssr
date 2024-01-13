import styles from './page.module.css'
import React from "react";
import HomeContent from "@/components/home";
import Menu from "@/components/menu";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1>next-toggle-menu-ssr</h1>

      <HomeContent
        menu={<Menu/>}
      />
    </main>
  )
}
