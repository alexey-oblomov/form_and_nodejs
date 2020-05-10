import React from 'react';
// import styled from "styled-components";

export default function RegistrationStatus(props) {
  const {isRegistration} = props;
  let registrationStatus;

  switch (isRegistration) {
    case 0:
      registrationStatus = null;
      break;
    case 1:
      registrationStatus = <div style={{color: 'green'}}>Новый пользователь зарегистрирован!</div>;
      break;
    case -1:
      registrationStatus = (
        <div style={{color: 'red'}}>Пользователь с таким email уже зарегистрирован!</div>
      );
      break;
    default:
      registrationStatus = null;
  }

  return (
    <div>
      <h1 className="heading">Регистрация</h1>
      {registrationStatus}
    </div>
  );
}
