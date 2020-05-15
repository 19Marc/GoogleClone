import styles from './searchbar.module.css'

export default function Searchbar({ children }) {
  return <div className={styles.searchbarContainer}>{ children }</div>
}