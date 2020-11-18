import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import NotFoundImage from '../../static/images/notFound.svg'
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560
  }
}));
const NotFoundView = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      title="404"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <h2 className="bold text-center">
            404: The page you are looking for isn’t here
          </h2>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, 
            <NavLink to="/">
              {' go back to home!'}
            </NavLink>
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={NotFoundImage}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default NotFoundView;