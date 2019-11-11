import * as React from 'react';
import Hello from '../Hello';
import styles from './index.module.scss';

const Home = () => (
  <>
    <div className={styles.home}>
      <Hello name="TypeScript" />
    </div>
  </>
);

export default Home;
