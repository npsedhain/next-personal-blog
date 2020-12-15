import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

import styled from 'styled-components'

export default function First() {
  return (
    <Layout>
      <Head>
        <title>
          My First Post
        </title>
      </Head>
      <h1>Hello First Post</h1>
      <Link href="/">
        <a>
          Back to Home
        </a>
      </Link>
      <StyledDiv>Try this~!</StyledDiv>
    </Layout>
  )
}

const StyledDiv = styled.div`color: ${({ theme }) => theme.fontColor}; background-color: ${({ theme }) => theme.backgroundColor}`
