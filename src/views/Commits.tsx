import styled from 'styled-components';
import { Card } from '../components/Card';
import { Link } from '../components/Link';
import { useCommitsStore } from '../store/commits.store';

const StyledCommitsCard = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  & #card {
    max-height: 55vh;
    overflow-y: auto;
  }
`;

const StyledReturn = styled.div`
  margin-bottom: 16px;
`;

const StyledCommit = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid grey;
    margin-bottom: 16px;
  }
`;

const StyledCommitHeader = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const StyledCommitMessage = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
`;

export const Commits = () => {
  const { resetCommits, commits } = useCommitsStore();

  return (
    <StyledCommitsCard>
      <Card>
        <StyledReturn>
          <Link onClick={() => resetCommits()}>&lt; back to repositories</Link>
        </StyledReturn>
        {!!commits.length &&
          commits.map((data: any) => (
            <StyledCommit key={data.node_id}>
              <div>
                <StyledCommitHeader>
                  <div>{data.commit.author.name}</div>
                  <i>{data.commit.author.date}</i>
                </StyledCommitHeader>
                <StyledCommitMessage>{data.commit.message}</StyledCommitMessage>
              </div>
            </StyledCommit>
          ))}
      </Card>
    </StyledCommitsCard>
  );
};
