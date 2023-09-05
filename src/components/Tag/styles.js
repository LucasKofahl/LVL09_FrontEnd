import styled from 'styled-components';

export const Container = styled.span`
  font-size:  12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin:24px 6px 0 0;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
