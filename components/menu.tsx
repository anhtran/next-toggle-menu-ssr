'use server'

import React from 'react'
import styles from "@/app/page.module.css";

interface User {
  id: number
  name: string
  email: string
}

const Menu = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: User[] = await res.json()

  return (
    <ul className={styles.menu}>
      {data.map((item) => (
        <li key={item.id}>
          <a href="#">{item.name} ({item.email})</a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
