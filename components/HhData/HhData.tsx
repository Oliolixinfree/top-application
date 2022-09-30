import { HhDataProps } from './HhData.props';
import styles from './hhData.module.css';
import { Card } from '../Card/Card';

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
    </div>
  );
};
