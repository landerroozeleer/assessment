import axios from 'axios';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { Link } from '../components/Link';
import { Pill } from '../components/Pill';
import { useCommitsStore } from '../store/commits.store';
import { useRepoStore } from '../store/repositories.store';

const StyledRepoCard = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  & #card {
    max-height: 55vh;
    overflow-y: auto;
  }
`;

const StyledRepo = styled.div`
  &:first-child {
    align-items: flex-start;
    min-height: 60px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid grey;
  }
  &:last-child {
    align-items: flex-end;
    min-height: 60px;
  }
  padding: 8px 0;
  min-height: 100px;
  display: flex;
  align-items: center;
`;

const StyledRepoName = styled.div`
  display: flex;
  margin-bottom: 4px;
  & a {
    padding-right: 8px;
  }
`;

const StyledRepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRepoDescription = styled.div`
  margin-bottom: 4px;
`;

export const Repositories = () => {
  const { setCommits } = useCommitsStore();
  const { repositories } = useRepoStore();

  const handleClick = (repo: string) => {
    axios.get(`https://api.github.com/repos/${repo}/commits`).then((res) => {
      setCommits(res.data as any);
    });
  };

  return (
    <StyledRepoCard>
      <Card>
        {!!repositories.length &&
          repositories.map((repo: any) => (
            <StyledRepo key={repo.id}>
              <div>
                <StyledRepoHeader>
                  <StyledRepoName>
                    <Link onClick={() => handleClick(repo.full_name)}>
                      {repo.name}
                    </Link>
                    {repo.private ? <Pill>private</Pill> : <Pill>public</Pill>}
                  </StyledRepoName>
                </StyledRepoHeader>
                <StyledRepoDescription>
                  {repo.description && repo.description}
                </StyledRepoDescription>
                <i>{repo.language}</i>
              </div>
            </StyledRepo>
          ))}
      </Card>
    </StyledRepoCard>
  );
};
