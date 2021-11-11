import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      가끔 숨이 잘 안 쉬어질 땐, 누워서 하늘을 봅시다 🌈
      <br />© 2021 Developer yaulhae
    </FooterWrapper>
  )
}

export default Footer
