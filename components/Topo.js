import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <Link href='/'>CDPI - Catálogo Dinâmico de Produtos Importados</Link>
        </nav>
      </header>
    </div>
  )
}