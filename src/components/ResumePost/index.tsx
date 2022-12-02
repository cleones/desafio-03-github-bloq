import {
  FaCalendar,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { IssuesGithub } from '../../store/githubData';
import {
  BackLink,
  GithubLink,
  HeaderActions,
  ResumePostContainer,
  ResumePostHeaderTitle,
  ResumePostHeaderWrapper,
  ResumePostInfo,
} from './style';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';

interface ResumePostProps {
  issue: IssuesGithub;
}

export const ResumePost = ({ issue }: ResumePostProps) => {
  const theme = useTheme();
  const date = new Date(issue.created_at);
  const navigate = useNavigate();

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <ResumePostContainer>
      <ResumePostHeaderWrapper>
        <BackLink onClick={() => navigate(-1)}>
          <HeaderActions>
            <FaChevronLeft />
            VOLTAR
          </HeaderActions>
        </BackLink>
        <GithubLink href={issue.html_url} target="_blank" rel="noreferrer">
          <HeaderActions>
            ver no github
            <FaExternalLinkAlt />
          </HeaderActions>
        </GithubLink>
      </ResumePostHeaderWrapper>
      <ResumePostHeaderTitle>{issue.title}</ResumePostHeaderTitle>

      <ResumePostInfo>
        <div>
          <FaGithub color={theme['base-label']} />
          <span>{issue.user.login}</span>
        </div>
        <div>
          <FaCalendar color={theme['base-label']} />
          <span>{publishedDateRelativeToNow}</span>
        </div>
        <div>
          <FaComment color={theme['base-label']} />
          <span>{issue.comments}</span>
        </div>
      </ResumePostInfo>
    </ResumePostContainer>
  );
};
