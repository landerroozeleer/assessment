/* eslint-disable react/no-unstable-nested-components */
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';
import { Textfield } from '../components/Textfield';
import { useCommitsStore } from '../store/commits.store';
import { useRepoStore } from '../store/repositories.store';

const StyledSearchUser = styled.div`
  margin: 0 auto 16px;
`;
const StyledSearchButton = styled.div`
  margin-bottom: 16px;
`;
const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto 32px;
  text-align: center;
`;
const StyledErrorMessage = styled.div`
  color: #993300;
`;

const StyledMessage = styled.div`
  color: white;
`;

export const SearchUser = () => {
  const [init, setInit] = useState(true);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setCommits } = useCommitsStore();
  const { setRepositories, repositories } = useRepoStore();

  const searching = () => {
    setError(false);
    setLoading(true);
    setCommits([]);
    setRepositories([]);
  };

  const submitValue = (e: any) => {
    e.preventDefault();
    searching();
    setInit(false);
    axios
      .get(`https://api.github.com/users/${name}/repos`)
      .then((res) => {
        setRepositories(res.data as any);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const Message = () => {
    let message = <div />;
    if (init) {
      message = (
        <StyledMessage>Enter a username to start searching!</StyledMessage>
      );
    } else if (error && !loading) {
      message = (
        <StyledErrorMessage>
          Sorry, there seems to be an error trying to find this user.
        </StyledErrorMessage>
      );
    } else if (!repositories.length && !error && !loading) {
      message = (
        <StyledErrorMessage>
          This user does not have any repositories.
        </StyledErrorMessage>
      );
    }
    return message;
  };

  return (
    <StyledContainer>
      <form onSubmit={submitValue}>
        <StyledSearchUser>
          <label htmlFor="user">
            {' '}
            <Textfield
              id="user"
              onChange={(e) => setName(e.target.value.toString())}
              placeholder="Enter username..."
            />
          </label>
        </StyledSearchUser>
        <StyledSearchButton>
          <Button type="submit">Search repository</Button>
        </StyledSearchButton>
      </form>
      <div>
        {loading && <Spinner />}
        <Message />
      </div>
    </StyledContainer>
  );
};

SearchUser.defaultProps = {
  label: '',
  placeholder: '',
};
