import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { IconX } from 'twenty-ui';

import { UndecoratedLink } from '@/ui/navigation/link/components/UndecoratedLink';
import { navigationMemorizedUrlState } from '@/ui/navigation/states/navigationMemorizedUrlState';

type NavigationDrawerBackButtonProps = {
  title: string;
};

const StyledIconAndButtonContainer = styled.button`
  align-items: center;
  background: inherit;
  border: none;
  color: ${({ theme }) => theme.font.color.secondary};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1.5, 1)};
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};
  &:hover {
    background: ${({ theme }) => theme.background.transparent.light};
    border-radius: ${({ theme }) => theme.border.radius.sm};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationDrawerBackButton = ({
  title,
}: NavigationDrawerBackButtonProps) => {
  const theme = useTheme();
  const navigationMemorizedUrl = useRecoilValue(navigationMemorizedUrlState);

  return (
    <StyledContainer>
      <UndecoratedLink to={navigationMemorizedUrl} replace>
        <StyledIconAndButtonContainer>
          <IconX
            size={theme.icon.size.md}
            stroke={theme.icon.stroke.lg}
            color={theme.font.color.tertiary}
          />
          <span>{title}</span>
        </StyledIconAndButtonContainer>
      </UndecoratedLink>
    </StyledContainer>
  );
};
