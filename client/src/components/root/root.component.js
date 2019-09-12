import React from 'react';
import logo from './../../assets/logo.svg'
import { Main, Logo, Header } from './root.styles'
import Ping from './../ping'

function Root() {
  return (
    <Main>
      <Header>
        <Logo src={logo}/>
        <p>
          We did it
        </p>
        <Ping />
      </Header>
    </Main>
  );
}

export default Root;