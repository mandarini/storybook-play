import styles from './katerina.module.css';

/* eslint-disable-next-line */
export interface KaterinaProps {}

export function Katerina(props: KaterinaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Katerina!</h1>
    </div>
  );
}

export default Katerina;
