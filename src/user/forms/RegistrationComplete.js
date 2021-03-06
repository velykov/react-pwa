import { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import CloudDoneIcon from 'material-ui-icons/CloudDone';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

import TextField from './../../base/form/Field/TextField';
import { isRequired } from './../../base/form/Field/validation';
import ContentBlock from './../../base/components/ContentBlock';

const styleSheet = theme => ({
  content: {
    paddingTop: 16,
  },
  footer: {
    paddingTop: 16,
  },
  icon: {
    marginLeft: 8,
  },
});

class RegistrationCompleteForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func,
    userData: PropTypes.object,
    validationErrors: PropTypes.object,
  };

  onNewsletterSwitch = (event, checked) => {
    const { change } = this.props;
    change('newsletter', checked);
  };

  render() {
    const { classes, handleSubmit, userData, validationErrors } = this.props;

    return (
      <ContentBlock sm>
        <form onSubmit={handleSubmit}>
          <Typography type='display1'>
            Complete registration
          </Typography>
          <Typography type='subheading' gutterBottom>
            Hi {userData.firstName}, please set up your password
          </Typography>

          <Divider/>

          <Grid container className={classes.content}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                label='Password'
                name='password'
                required={true}
                validate={isRequired('Password')}
                type='password'
                fieldError={validationErrors.password}
                />
            </Grid>

            <Grid item xs={12}>
              <Field
                component={TextField}
                label='Repeat password'
                name='passwordRepeat'
                required={true}
                validate={isRequired('Password again')}
                type='password'
                fieldError={validationErrors.passwordRepeat}
                />
            </Grid>

            <Grid item xs={12}>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={this.onNewsletterSwitch}
                      value="newsletter"
                    />
                  }
                  label="I would like to receive newsletter"
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Divider/>

          <Grid container justify='space-between' align='center' className={classes.footer}>
            <Grid item>
              <Typography type='body1'>
                By clicking submit you agree<br />to our <Link to='/terms'>Terms and Conditions</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Button raised color='primary' type='submit'>Complete registration  <CloudDoneIcon  className={classes.icon}/></Button>
            </Grid>
          </Grid>
        </form>
      </ContentBlock>
    );
  }
}

export default reduxForm({
  form: 'registrationComplete',
  initialValues: {
    newsletter: false,
  },
})(
  withStyles(styleSheet)(
    RegistrationCompleteForm
  )
);
