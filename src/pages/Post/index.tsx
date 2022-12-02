import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { IssuesGithub } from '../../store/githubData';
import { ResumePost } from '../../components/ResumePost';
import { BodyWrapper, PostContainer, PostContent } from './styles';
interface PostParams extends Params {
  id: string;
}
export const Post = () => {
  const { id } = useParams<PostParams>();
  const [issue, setIssue] = useState<IssuesGithub>({} as IssuesGithub);

  useEffect(() => {
    if (!id) return;
    axios
      .get(
        `https://api.github.com/repos/cleones/desafio-03-github-bloq/issues/${id}`,
      )
      .then(({ data }) => setIssue(data));
  }, [id]);

  if (!issue.id) {
    return <h1>Loading...</h1>;
  }
  return (
    <PostContainer>
      <PostContent>
        <ResumePost issue={issue} />
        <BodyWrapper>
          <ReactMarkdown unwrapDisallowed>{issue.body}</ReactMarkdown>
        </BodyWrapper>
      </PostContent>
    </PostContainer>
  );
};
