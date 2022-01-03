import React from 'react';
import { Anchor, Box, Footer as GrommetFooter, Text } from 'grommet';
import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from 'grommet-icons';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Follow on Instagram"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Follow on Facebook"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="brand" />}
    />
    <Anchor
      a11yTitle="Connect on LinkedIn"
      href="https://linkedin.com/"
      icon={<Linkedin color="brand" />}
    />
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://github.com/"
      icon={<Github color="brand" />}
    />
  </Box>
);

function Footer() {
  return (
      <GrommetFooter pad="small">
        <Box align="center" direction="row" gap="xsmall">
          <GrommetIcon color="brand" size="medium" />
          <Text alignSelf="center" color="brand" size="small">
            Haridu Senadeera
          </Text>
        </Box>
      <Media />
      <Text textAlign="center" size="xsmall">
        © Haridu Senadeera 2022
      </Text>
    </GrommetFooter>
  );
}
  

export default Footer;