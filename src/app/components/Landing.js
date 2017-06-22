import PropTypes from 'prop-types';
import AppConfig from 'AppConfig';
import { Link } from 'react-router-dom';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import VerifiedUserIcon from 'material-ui-icons/VerifiedUser';
import { green, white } from 'material-ui/styles/colors';

import Auth from './../../user/containers/Auth';
import ContentBlock from './../../base/components/ContentBlock';

const styleSheet = createStyleSheet('Landing', (theme) => ({
  icon: {
    color: green[500],
  },
  footer: {
    paddingTop: 16,
  },
  content: {
    paddingTop: 32,
    paddingBottom: 32,
  },
}));

const Landing = ({ classes }) => (
  <ContentBlock md>
    <Typography type='display1' gutterBottom>
      Welcome to {AppConfig.appName}
    </Typography>

    <Divider />

    <Typography type='body1' className={classes.content}>
      Recent years front-end development become so versatile. It is no more a JavaScript language with jQuery library.
      Modern web application is a complex system included many components.
      <br /><br />
      When developers started to build their first front-end application they faced many manuals for
      particular components. And when they try to bundle them together things could get very hard.
      <br /><br />
      This project is here to help developers build modern progressive web application. Live example,
      what could be better? ^_^
    </Typography>

    <Divider />

    <Auth guest>
      <Typography type='body1' className={classes.footer}>
        Please <Link
          to={{
            pathname: '/login',
            state: { from: '/' },
          }}
        >Sign In</Link> or <Link to='/register'>Register</Link>
      </Typography>
    </Auth>

    <Auth user>
      <Grid container align='center' className={classes.footer}>
        <Grid item>
          <VerifiedUserIcon  className={classes.icon}/>
        </Grid>
        <Grid item>
          <Typography type='body1'>
            You are successfully authorised to the system
          </Typography>
        </Grid>
      </Grid>
    </Auth>
  </ContentBlock>
);

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Landing);