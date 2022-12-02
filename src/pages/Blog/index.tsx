import { Profile } from '../../components/Profile';
import {
  BlogContainer,
  BlogContent,
  BlogContentHeader,
  CardsWrapper,
  Input,
} from './styles';
import { Card } from '../../components/Card';
import { IssuesGithub, useGithubDataStore } from '../../store/githubData';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Blog = () => {
  const user = useGithubDataStore((store) => store.user);
  const issues = useGithubDataStore((store) => store.issues);
  const setUser = useGithubDataStore((store) => store.setUser);
  const setIssues = useGithubDataStore((store) => store.setIssues);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.github.com/users/cleones').then(({ data }) => {
      setUser(data);
    });
  }, [setUser]);

  useEffect(() => {
    if (!user.login) return;
    if (!search) {
      axios
        .get(
          `https://api.github.com/repos/${user.login}/desafio-03-github-bloq/issues`,
        )
        .then(({ data }) => {
          setIssues(data);
        });
      return;
    }
    if (search) {
      axios
        .get(
          `https://api.github.com/search/issues?q=${search}%20repo:cleones/desafio-03-github-bloq`,
        )
        .then(({ data }) => {
          setIssues(data.items);
        });
    }
  }, [setIssues, user.login, search]);

  if (!user.id) {
    return null;
  }

  return (
    <BlogContainer>
      <Profile />
      <BlogContent>
        <BlogContentHeader>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </BlogContentHeader>
        <Input
          placeholder="Buscar conteúdo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CardsWrapper>
          {issues.map((issue) => (
            <Card key={issue.id} issue={issue} />
          ))}
        </CardsWrapper>
      </BlogContent>
    </BlogContainer>
  );
};
