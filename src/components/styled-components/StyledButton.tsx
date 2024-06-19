import styled from 'styled-components'
import { Button } from '@/components/ui/button'

const StyledButton = styled(Button)<{
  $backgroundColor: string
  $hoverBackgroundColor: string
  $activeBackgroundColor: string
}>`
  background-color: ${(props) => props.$backgroundColor};

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
  }

  &:active {
    background-color: ${(props) => props.$activeBackgroundColor};
  }
`

export default StyledButton
