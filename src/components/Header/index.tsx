import styles from './styles.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Spacetraveling logo." />
      </div>
    </header>
  );
}
