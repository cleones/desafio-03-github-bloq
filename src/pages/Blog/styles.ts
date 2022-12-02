import styled from 'styled-components';

export const BlogContainer = styled.main`
  max-width: 864px;
  margin: -60px auto 0;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  left: 40px;
  border-radius: 8px;
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
`;

export const BlogContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    font-weight: 700;
    font-size: ${(props) => props.theme.medium};
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-weight: 400;
    font-size: ${(props) => props.theme.small};
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`;

export const Input = styled.input`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;

  margin-top: 12px;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`;

export const CardsWrapper = styled.div`
  margin-top: 42px;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;
`;
