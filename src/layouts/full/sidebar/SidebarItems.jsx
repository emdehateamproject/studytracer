import React from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import {useAuthentication} from '../../../../src/context/AuthContext'

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const { currentUser } = useAuthentication();
  console.log("user",currentUser)
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 3 }} className="sidebarNav">
        {/* {currentUser && currentUser?.role === 'alumni' && (
          <> */}
            {Menuitems.map((item) => {
              // {/********SubHeader**********/}
              if (item.subheader) {
                return <NavGroup item={item} key={item.subheader} />;

                // {/********If Sub Menu**********/}
                /* eslint no-else-return: "off" */
              } else {
                return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
              }
            })}
          {/* </>
        )} */}
      </List>
    </Box>
  );
};
export default SidebarItems;
