import styled from "styled-components";

export const ContainerChip = styled.div`
  width: fit-content;

  padding: 4px 8px;

  border-radius: 5px;

  background: ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 12px;

  flex-wrap: wrap;
`;
