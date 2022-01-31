// This is just a template for a possible Sidebar, don't worry about this right now.

import * as React from 'react';
import { useEffect } from 'react';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Box, Button, Divider, Drawer, Typography} from '@mui/material';
import { BarChart } from '@mui/icons-material';
import {Lock} from '@mui/icons-material';
import {ShoppingBag} from '@mui/icons-material';
import {PersonAddAlt} from '@mui/icons-material';
import {AccountCircle} from '@mui/icons-material';
import { Error } from '@mui/icons-material';
import { SidebarItem } from './SidebarItem';

// Definitely will use these logos

import { LogoDev } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';

const items = [
  // {
  //   href: '/',
  //   icon: (<BarChart fontSize="small" />),
  //   title: 'Dashboard'
  // },
  {
    href: '/customers',
    icon: (<AccountCircle fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBag fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<PersonAddAlt fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/login',
    icon: (<Lock fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/404',
    icon: (<Error fontSize="small" />),
    title: 'Error'
  }
];

// DashboardSidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool
// };

type DashboardSidebarProps = {
  onClose: Function,
  open: boolean
};

export function DashboardSidebar({onClose, open}: DashboardSidebarProps):JSX.Element {
  //const { open, onClose } = props;
  const router:NextRouter = useRouter();
  
//   const lgUp:boolean = useMediaQuery((theme) => theme.breakpoints.up('lg'), { // useMediaQuery 
//     defaultMatches: true,
//     noSsr: false
//   });

  // useEffect(
  //   () => {
  //     if (!router.isReady) {
  //       return;
  //     }

  //     if (open) {
  //       onClose?.();
  //     }
  //   },
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  //   [router.asPath]
  // );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            {/* <NextLink
              href="/"
              passHref
            >
              
            </NextLink> */}
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Acme Inc
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography>
              </div>
              
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <SidebarItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Need more features?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '160px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/static/images/sidebar_pro.png"
            />
          </Box>
          <NextLink
            href="https://material-kit-pro-react.devias.io/"
            passHref
          >
            <Button
              color="secondary"
              component="a"
            //   endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </NextLink>
        </Box>
      </Box>
    </>
  );

//   if (lgUp) {
//     return (
//       <Drawer
//         anchor="left"
//         open
//         PaperProps={{
//           sx: {
//             backgroundColor: 'neutral.900',
//             color: '#FFFFFF',
//             width: 280
//           }
//         }}
//         variant="permanent"
//       >
//         {content}
//       </Drawer>
//     );
//   }

  return (
    <Drawer
      anchor="left"
      //onClose={onClose()} // Might need to rework this stuff to make them states instead
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

// DashboardSidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool
// };