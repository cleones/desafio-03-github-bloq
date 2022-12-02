import {
  GithubLink,
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileHeaderWrapper,
  ProfileInfo,
  ProfileName,
} from './style';
import { Avatar } from '../../pages/Blog/styles';
import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { useGithubDataStore } from '../../store/githubData';

export const Profile = () => {
  const theme = useTheme();
  const user = useGithubDataStore((store) => store.user);

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} />
      <ProfileContent>
        <ProfileHeaderWrapper>
          <ProfileName>{user.name}</ProfileName>
          <GithubLink href={user.html_url} target="_blank">
            github <FaExternalLinkAlt />
          </GithubLink>
        </ProfileHeaderWrapper>
        <ProfileBio>{user.bio || ''}</ProfileBio>
        <ProfileInfo>
          <div>
            <FaGithub color={theme['base-label']} />
            <span>{user.login}</span>
          </div>
          <div>
            <FaBuilding color={theme['base-label']} />
            <span>{user.company || 'Sem Compania'}</span>
          </div>
          <div>
            <FaUserFriends color={theme['base-label']} />
            <span>{user.followers} seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
};
