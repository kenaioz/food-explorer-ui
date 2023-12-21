import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  border-radius: 7px;

  > input {
    height: 48px;
    width: 100%;

    padding: 12px 14px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 100px;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;
