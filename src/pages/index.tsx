import React, { useState } from 'react';
import styles from './index.less';

export default function IndexPage() {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    setFlag(!flag);
  };

  const newFlag = flag ? '1' : '2';

  if (flag) {
    console.log(1111);
  }

  return (
    <div>
      <h1 className={styles.title} onClick={handleClick}>
        Page index
      </h1>
      <div>{newFlag}</div>
    </div>
  );
}
