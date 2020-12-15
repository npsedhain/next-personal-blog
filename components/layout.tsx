import styles from './layout.module.css';

import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <StyledDiv>
      <div
        className={styles.container}>{children}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`height: 100vh; color: ${({ theme }) => theme.fontColor}; background-color: ${({ theme }) => theme.backgroundColor}`
