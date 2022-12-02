import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { CardContainer, Descriptin, Header, Time, Title } from './styles';
import { IssuesGithub } from '../../store/githubData';

interface Props {
  issue: IssuesGithub;
}
export const Card = ({ issue }: Props) => {
  const date = new Date(issue.created_at);
  const publishedDateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <CardContainer to={`/post/${issue.number}`}>
      <Header>
        <Title>{issue.title}</Title>
        <Time title={publishedDateFormatted} dateTime={date.toISOString()}>
          {publishedDateRelativeToNow}
        </Time>
      </Header>
      <Descriptin>{issue.body}</Descriptin>
    </CardContainer>
  );
};
