import Link from 'next/link'
import styles from '../../../styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Github</Link>
        </li>
        <li>
          <Link href="/files">Props</Link>
        </li>
        <li>
          <Link href="/emoji">Emoji</Link>
        </li>
      </ul>
    </header>
  )
}
