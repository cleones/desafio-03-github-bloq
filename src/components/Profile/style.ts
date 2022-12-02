import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 32px 40px;
  display: flex;
  gap: 32px;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const ProfileName = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme['x-large']};
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`;
export const ProfileBio = styled.span`
  font-weight: 400;
  font-size: ${(props) => props.theme.base};
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`;
export const ProfileInfo = styled.div`
  flex: 1;
  display: flex;
  gap: 24px;

  align-items: flex-end;
  div {
    display: flex;
    gap: 12px;
    align-items: center;

    font-weight: 400;
    font-size: ${(props) => props.theme.base};
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const GithubLink = styled.a`
  font-style: normal;
  font-weight: bolder;
  font-size: ${(props) => {
    return props.theme['x-small'];
  }};
  line-height: 160%;

  text-transform: uppercase;

  /* Brand/Blue */

  color: ${(props) => props.theme.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
