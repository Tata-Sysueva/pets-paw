import React, {useEffect, useState} from 'react';
import UserAction from '../UserAction/UserAction';
import {getVotes} from '../../api/requests';
import {Votes} from '../../types/types';
import {sortedVotes} from '../../utils/utils';

import styles from './UserActionList.module.scss';

function UserActionList({ changeVote }: {changeVote: boolean}) {
  const [votes, setVotes] = useState<Votes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVotes();
      setVotes(data);
    };
    fetchData();
  }, [changeVote]);

  return (
    <ul className={styles.list}>
      {sortedVotes(votes).map((vote) => <UserAction key={vote.id} info={vote} />)}
    </ul>
  );
}

export default UserActionList;
