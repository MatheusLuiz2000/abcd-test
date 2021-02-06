import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  FormControl,
  InputAdornment,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  IconButton,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputContainer } from './styles';

export const InputPassword = props => {
  const { nome, id, label, error, control } = props;

  const [activePassword, setActivePassword] = useState('password');

  const handleClickShowPassword = () => {
    if (activePassword === 'password') {
      return setActivePassword('text');
    }
    return setActivePassword('password');
  };

  return (
    <InputContainer className="group">
      <Controller
        name={nome}
        control={control}
        as={
          <FormControl variant="outlined" error={!!error}>
            <InputLabel className="input-label" htmlFor={id}>
              {label}
            </InputLabel>
            <OutlinedInput
              type={activePassword}
              className="input-style"
              key="dasdsa"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="icon-input"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {activePassword === 'password' ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={50}
            />
            <FormHelperText id={id}>{error || ''}</FormHelperText>
          </FormControl>
        }
      />
    </InputContainer>
  );
};

export const InputIcon = props => {
  const { nome, type, id, label, icon, error, control } = props;

  return (
    <InputContainer className="group">
      <Controller
        name={nome}
        control={control}
        key={id}
        as={
          <FormControl variant="outlined" error={!!error}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
              type={type}
              className="input-style"
              id={id}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">{icon}</IconButton>
                </InputAdornment>
              }
              labelWidth={50}
            />
            <FormHelperText id={id}>{error || ''}</FormHelperText>
          </FormControl>
        }
      />
    </InputContainer>
  );
};
