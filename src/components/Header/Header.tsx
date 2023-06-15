'use client'
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: var(--size-l);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;

  h1 {
    margin-right: var(--size-l);
    font-weight: 500;
    font-size: var(--font-l);
  }
`

const StyledNav = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      li {
        margin-left: var(--size-l);
      }
    }
`


const HeaderTemplate = () => {
    return (
        <StyledHeader>
            <h1>
                <Link href={'/'}>Satofaction</Link>
            </h1>
            <StyledNav>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/posts'}>Posts</Link></li>
                </ul>
            </StyledNav>
        </StyledHeader>
    )
}

export default HeaderTemplate
