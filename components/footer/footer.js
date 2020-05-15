import styles from './footer.module.css'

export default function Footer({ children }) {
  return <div className={styles.footerContainer}>{ children }</div>
}