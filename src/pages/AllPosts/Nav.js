import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import TabPanel from './TabPanel';

// const generateProps = (index) => ({
//   id: `full-width-tab-${index}`,
//   'aria-controls': `full-width-tabpanel-${index}`
// });

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
    width: '100%'
  }
}));

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        {/* <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Summary" {...generateProps(0)} />
          <Tab label="Posts" {...generateProps(1)} />
        </Tabs> */}
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      ></SwipeableViews>
    </div>
  );
}
