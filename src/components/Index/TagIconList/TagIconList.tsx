import React from 'react';
import { FaTag } from 'react-icons/fa';

import { useT } from '../../../utils/i18n';
import { Props as TagProps, TagIcon } from '../TagIcon/TagIcon';
import styles from './TagIconList.module.css';

export const PureTagIconList: React.VFC<PureProps> = ({ tags }) => {
  const t = useT('components/index/tagIconList');

  return (
    <nav area-label={t('タグナビゲーション')} className={styles.TagIconList}>
      <FaTag className={styles.WithIcon} />
      <ul className={styles.IconList}>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <TagIcon tag={tag} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const TagIconList: React.VFC<Props> = ({ tags }) => {
  return <PureTagIconList tags={tags} />;
};

export type PureProps = Props;

export type Props = {
  tags: {
    [P in 'tag']: TagProps[P];
  }['tag'][];
};
