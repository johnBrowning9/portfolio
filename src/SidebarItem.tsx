// This is just a template for a possible Sidebar, don't worry about this right now.



import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, ListItem } from '@mui/material';

type SidebarItemProps = {
  href: string,
  icon: React.ReactNode,
  title: string
};

export function SidebarItem({href,icon,title}:SidebarItemProps): JSX.Element {
  //const { href, icon, title, ...others } = props;
  const router = useRouter();
  //const active = href ? (router.pathname === href) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      //{...others}
    >
      <NextLink
        href={href}
        passHref
      >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: 'rgba(255,255,255, 0.08)', //active && 
            borderRadius: 1,
            color: 'secondary.main', //active ? 'secondary.main' : 'neutral.300',
            fontWeight: 'fontWeightBold', //active && 
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: 'secondary.main', //active ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

