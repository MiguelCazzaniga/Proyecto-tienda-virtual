import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import styled from "styled-components"

const AuthWrappers = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  }
  if (error) {
    <Wrapper>
      <h1>{error.massage}</h1>
    </Wrapper>
  }

  return <>
  {children}
  </>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`
export default AuthWrappers
