import React from 'react';
import VotingAction from '../VotingAction/VotingAction';
import {Vote} from '../../types/types';
import {sortedVotes} from '../../utils/utils';

import styles from './VotingActionList.module.scss';

function VotingActionList({ votes }: {votes: Vote[]}) {
  return (
    <ul className={styles.list}>
      {sortedVotes(votes).map((vote) => <VotingAction key={vote.id} info={vote}/>)}
    </ul>
  );
}

export default VotingActionList;
