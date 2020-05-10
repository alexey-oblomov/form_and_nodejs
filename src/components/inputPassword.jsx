import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function CustomizedInputPassword(props) {
  const {errors, touched, values, name, onChange, onBlur, label, labelWidth} = props;

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '225px',
    },
  }));
  const classes = useStyles();

  const [state, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !state.showPassword,
    });
  };

  return (
    <FormControl
      size="small"
      className={clsx(classes.textField)}
      variant="outlined"
      error={!!touched[name] && !!errors[name]}
    >
      <InputLabel htmlFor="outlined-adornment-password" required>
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        size="small"
        type={state.showPassword ? 'text' : 'password'}
        value={values[name]}
        autoComplete="off"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        endAdornment={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={labelWidth}
      />
    </FormControl>
  );
}
