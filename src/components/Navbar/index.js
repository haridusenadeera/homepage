import React from 'react';
import { Avatar, Anchor, Box, Header, Nav } from 'grommet';

const gravatarSrc =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

  const items = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Resume', href: '#' },
    { label: 'Travels', href: '#' },
  ];

function Navbar() {
  return (
    <Header pad="small">
    <Box direction="row" align="center" gap="small">
      <Avatar src={gravatarSrc} />
      <Anchor href="https://github.com/ShimiSun">
        Haridu Senadeera
      </Anchor>
    </Box>
    <Nav direction="row">
      {items.map((item) => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </Header>
  );
}
  
export default Navbar;
  