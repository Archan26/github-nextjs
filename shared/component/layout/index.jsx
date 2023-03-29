import Header from '../header'
import styles from '../../../styles/layout.module.scss'
function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout