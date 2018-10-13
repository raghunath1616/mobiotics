import React from "react"
import styled from "styled-components"
import Container from "container/Forms"
import { Flex, Box } from "@rebass/grid"

const Wrapper = styled.div`
  padding: 20px;
`

const UserDetailsItem = styled.ul`
  margin-bottom: 10px;
`

const UserDetails = (props) => {
  const { user } = props
  return (
    <Wrapper>
      <ul>
        <UserDetailsItem>
          <Flex>
            <Box width={1 / 3}>Name</Box>
            <Box width={2 / 3}>
              : &nbsp;
              {user.name}
            </Box>
          </Flex>
        </UserDetailsItem>
        <UserDetailsItem>
          <Flex>
            <Box width={1 / 3}>Email</Box>
            <Box width={2 / 3}>
              : &nbsp;
              {user.email}
            </Box>
          </Flex>
        </UserDetailsItem>
        <UserDetailsItem>
          <Flex>
            <Box width={1 / 3}>Date of birth</Box>
            <Box width={2 / 3}>
              : &nbsp;
              {user.birthday}
            </Box>
          </Flex>
        </UserDetailsItem>
        <UserDetailsItem>
          <Flex>
            <Box width={1 / 3}>Phone</Box>
            <Box width={2 / 3}>
              : &nbsp;
              {user.phone}
            </Box>
          </Flex>
        </UserDetailsItem>
        <UserDetailsItem>
          <Flex>
            <Box width={1 / 3}>Gender</Box>
            <Box width={2 / 3}>
              : &nbsp;
              {user.gender}
            </Box>
          </Flex>
        </UserDetailsItem>
      </ul>
    </Wrapper>
  )
}

export default Container(UserDetails)
