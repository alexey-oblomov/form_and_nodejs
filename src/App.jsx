import React, {useState} from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import {uniqueId} from 'lodash';
import './app.scss';

import {Formik, Form, Field, FieldArray} from 'formik';

import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import CustomizedCheckbox from './components/checkkbox';
import CustomizedInputPassword from './components/inputPassword';
import RegistrationStatus from './components/registrationStatus';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Обязательное поле')
    .min(2, 'Слишком короткое имя. Не менее 2 знаков')
    .max(50, 'Слишком длинное поле. Не более 50 символов'),
  password: Yup.string()
    .min(8, 'Слишком короткий пароль. Не менее 8 символов')
    .max(40, 'Не более 40 символов.')
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,40}$/,
      'Буквы латинского алфавита и цифры, как минимум одна цифра и одна заглавная буква'
    )
    .oneOf([Yup.ref('repeatPassword')], null)
    .required('Обязательное поле'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required('Обязательное поле'),
  email: Yup.string().email('Некорректный адрес').required('Обязательное поле'),
  website: Yup.string().url('Некорректный адрес'),
  age: Yup.string()
    .min(1, 'от 18 до 65')
    .max(2, 'от 18 до 65')
    .matches(/^[1]{1}[8-9]{1}|^[2-5]{1}[0-9]{1}|^[6]{1}[0-5]{1}$/, 'от 18 до 65')
    .required('Обязательное поле'),
  acceptTerms: Yup.boolean().oneOf([true], 'Подтвердите согласие').required('Обязательное поле'),
});

const StyledButton = withStyles({
  root: {
    height: '28px',
    alignSelf: 'center',
    backgroundColor: '#1a73e8',
    color: 'white',
    marginLeft: '0',
  },
})(Button);

export default function SignUpForm() {
  const [isRegistration, setIsRegistration] = useState(0);

  const initialValues = {
    name: '',
    password: '',
    repeatPassword: '',
    email: '',
    website: '',
    age: '',
    skill: '',
    skills: [],
    acceptTerms: false,
  };

  const handleSubmit = async values => {
    const response = await axios.post('http://localhost:3000/sign-up', values);

    if (response.data.status) {
      setIsRegistration(1);
    } else {
      setIsRegistration(-1);
    }
  };

  return (
    <div className="app">
      <RegistrationStatus isRegistration={isRegistration} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={SignUpSchema}>
        {({values, handleChange, setFieldValue, handleBlur, errors, touched, dirty, isValid}) => {
          const passwordProps = {
            name: 'password',
            errors,
            values,
            touched,
            onChange: handleChange('password'),
            onBlur: handleBlur('password'),
            label: 'Пароль',
            labelWidth: 70,
          };

          const repeatPasswordProps = {
            name: 'repeatPassword',
            errors,
            values,
            touched,
            onChange: handleChange('repeatPassword'),
            onBlur: handleBlur('repeatPassword'),
            label: 'Повторите пароль',
            labelWidth: 150,
          };

          const checkboxProps = {
            name: 'acceptTerms',
            as: CustomizedCheckbox,
            label: 'Согласен с условиями',
            onChange: handleChange('acceptTerms'),
            value: values.acceptTerms,
          };

          const inputNameProps = {
            size: 'small',
            autoComplete: 'off',
            name: 'name',
            as: 'input',
            component: TextField,
            label: 'Имя',
            variant: 'outlined',
            error: touched.name && Boolean(errors.name),
            value: values.name,
            onChange: handleChange('name'),
            onBlur: handleBlur('name'),
            required: true,
          };

          const inputEmailProps = {
            size: 'small',
            autoComplete: 'off',
            name: 'email',
            as: 'input',
            component: TextField,
            label: 'Электронная почта',
            variant: 'outlined',
            onChange: handleChange('email'),
            error: isRegistration === -1 || (touched.email && Boolean(errors.email)),
            onBlur: handleBlur('email'),
            required: true,
          };

          const inputWebsiteProps = {
            size: 'small',
            autoComplete: 'off',
            name: 'website',
            as: 'input',
            component: TextField,
            label: 'Веб-сайт',
            variant: 'outlined',
            onChange: handleChange('website'),
            error: touched.website && Boolean(errors.website),
            onBlur: handleBlur('website'),
          };

          const inputAgeProps = {
            size: 'small',
            autoComplete: 'off',
            name: 'age',
            type: 'text',
            component: TextField,
            label: 'Возраст',
            variant: 'outlined',
            onChange: handleChange('age'),
            value: values.age,
            error: touched.age && Boolean(errors.age),
            onBlur: handleBlur('age'),
            required: true,
          };

          const inputSkill = {
            size: 'small',
            autoComplete: 'on',
            label: 'Добавить навык',
            name: 'skill',
            as: 'input',
            component: TextField,
            variant: 'outlined',
            value: values.skill,
            onChange: handleChange('skill'),
            error: touched.skill && Boolean(errors.skill),
            onBlur: handleBlur('skill'),
          };

          return (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}></Grid>
                <Grid item xs={12} sm={3}>
                  <div className="form__field form__field--name">
                    <div className="field__input">
                      <Field {...inputNameProps} />
                    </div>
                    <div className="field__error-message">{touched.name ? errors.name : ''}</div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div className="form__field form__field--password">
                    <div className="field__input">
                      <CustomizedInputPassword {...passwordProps} />
                    </div>
                    <div className="field__error-message field__error-message--password">
                      {touched.password ? errors.password : ''}
                    </div>
                  </div>

                  <div className="form__field">
                    <div className="form__field form__field--repeate-password">
                      <div className="field__input">
                        <CustomizedInputPassword {...repeatPasswordProps} />
                      </div>
                      <div className="field__error-message field__error-message--repeat-password">
                        {touched.repeatPassword ? errors.repeatPassword : ''}
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>

                <Grid item xs={12} sm={3}>
                  <div className="form__field form__field--name">
                    <div className="field__input">
                      <Field {...inputEmailProps} />
                    </div>
                    <div className="field__error-message">
                      {touched.email ? errors.email : ''}
                      {isRegistration === -1 ? 'Введите другой email' : ''}
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <div className="form__field form__field--name">
                    <div className="field__input">
                      <Field {...inputAgeProps} />
                    </div>
                    <div className="field__error-message">{touched.age ? errors.age : ''}</div>
                  </div>
                  <div className="form__field form__field--name">
                    <div className="field__input">
                      <Field {...inputWebsiteProps} />
                    </div>
                    <div className="field__error-message">
                      {touched.website ? errors.website : ''}
                    </div>
                  </div>
                </Grid>

                <FieldArray name="skills">
                  {({push}) => (
                    <>
                      <Grid item xs={12} sm={3}>
                        <div className="field__input">
                          <Field {...inputSkill} />
                        </div>
                        <div>
                          <ul className="form__listSkills">
                            {values.skills.map(item => {
                              return (
                                <div key={uniqueId()}>
                                  <li key={uniqueId()}>{item}</li>
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <StyledButton
                          variant="contained"
                          size="small"
                          color="primary"
                          type="button"
                          onClick={() => {
                            if (values.skill.trim()) {
                              values.skills.push(values.skill);
                              setFieldValue('skill', '');
                            }
                          }}
                        >
                          Добавить навык
                        </StyledButton>
                      </Grid>
                    </>
                  )}
                </FieldArray>

                <Grid item xs={12} sm={9}></Grid>
                <Grid item xs={12} sm={3}>
                  <div className="down-block__block-accept-terms-and-submit">
                    <div className="form__field form__field--checkbox">
                      <Field {...checkboxProps} />
                    </div>

                    <div className="form__field form__block--button-submit">
                      <StyledButton
                        variant="contained"
                        size="small"
                        color="primary"
                        disabled={!dirty || !isValid}
                        type="submit"
                      >
                        Отправить данные
                      </StyledButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
