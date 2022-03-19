/* eslint-disable no-nested-ternary */
import { useCommitsStore } from '../store/commits.store';
import { useRepoStore } from '../store/repositories.store';
import { Commits } from './Commits';
import { Repositories } from './Repositories';
import { SearchUser } from './SearchUser';

const Application = () => {
  const { commits } = useCommitsStore();
  const { repositories } = useRepoStore();

  return (
    <div>
      <SearchUser />
      {!repositories.length ? null : !commits.length ? (
        <Repositories />
      ) : (
        <Commits />
      )}
    </div>
  );
};

export default Application;
