import styled from "styled-components"

const Logo = () => {
  return (
    <Wrapper>
      <h4>My</h4>
      <span>
        <h2>Tennis </h2>
      </span>
      <h4> shoes</h4>
    </Wrapper>
  )
}
const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  display: flex;
  flex-direction: row;
  align-items: baseline;
  span {
    color: var(--clr-primary-5);
  }
  h2{
    padding-right:0.2rem
  }
`
export default Logo
