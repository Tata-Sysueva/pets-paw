import React from 'react';
import VotingAction from '../VotingAction/VotingAction';
import {Favorites} from '../../types/types';

import styles from './VotingActionList.module.scss';

function VotingActionList({ votes }: {votes: Favorites[]}) {
  return (
    <ul className={styles.list}>
      {votes.map((vote) => <VotingAction key={vote.id} info={vote}/>)}
    </ul>
  );
}

export default VotingActionList;
