import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  padding: 32px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme['base-post']};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border: 2px solid #3a536b;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.strong`
  font-weight: 700;
  font-size: ${(props) => props.theme.large};
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};
`;

export const Time = styled.time`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  margin-left: 16px;
  white-space: nowrap;
  color: ${(props) => props.theme['base-span']};
`;
export const Descriptin = styled.span`
  margin-top: 22px;
  font-weight: 400;
  line-height: 160%;

  font-size: ${(props) => props.theme.base};
  color: ${(props) => props.theme['base-text']};

  display: block;
  display: -webkit-box;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
