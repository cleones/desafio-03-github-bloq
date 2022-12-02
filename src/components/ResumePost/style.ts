import styled from 'styled-components';

export const ResumePostContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
`;

export const ResumePostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ResumePostHeaderTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme['x-large']};
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
  margin-bottom: 8px;
`;

export const ResumePostInfo = styled.div`
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

export const HeaderActions = styled.span`
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
export const BackLink = styled.button`
  background: none;
  border: none;
`;
export const GithubLink = styled.a`
  text-decoration: none;
`;
