import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import GlassIcon from './glass.svg';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSeacrch] = useState<string>('');

  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        fontsize="fs14"
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSeacrch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <GlassIcon />
      </Button>
    </div>
  );
};
