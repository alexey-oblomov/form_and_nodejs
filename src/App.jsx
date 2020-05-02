import React from 'react';
// import axios from "axios";
import * as Yup from 'yup';
import {uniqueId} from 'lodash';
import './app.scss';

import {Formik, Form, Field, FieldArray} from 'formik';

import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

import CustomizedCheckbox from './components/checkkbox';
import CustomizedInputPassword from './components/inputPassword';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткое имя. Не менее 2 знаков')
    .required('Обязательное поле')
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
  age: Yup.number()
    .min(18, 'Маленький возраст. Должно быть больше 18')
    .max(65, 'Слишком старый. Иди на пенсию')
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

  const handleSubmit = values => {
    JSON.stringify(values);
    //   const data = JSON.stringify(values);
    //   axios.post("http://localhost:3000/sign-up", data).then((response) => {
    //     console.log(response);
    //   });
    //   console.log(data);
  };

  return (
    <div className="app">
      <h1 className="heading">Регистрация</h1>
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
            labelWidth: 60,
          };

          const repeatPasswordProps = {
            name: 'repeatPassword',
            errors,
            values,
            touched,
            onChange: handleChange('repeatPassword'),
            onBlur: handleBlur('repeatPassword'),
            label: 'Повторите пароль',
            labelWidth: 140,
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
            error: touched.email && Boolean(errors.email),
            onBlur: handleBlur('email'),
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
              <div className="container">
                <div className="leftSide">
                  <div className="form__wrapper">
                    <div className="form__block">
                      <div className="form__field">
                        <div className="field__input">
                          <Field {...inputNameProps} />
                        </div>
                        <div className="field__error-message">
                          {touched.name ? errors.name : ''}
                        </div>
                      </div>

                      <div className="form__field">
                        <CustomizedInputPassword {...passwordProps} />
                        <div className="field__error-message">
                          {touched.password ? errors.password : ''}
                        </div>
                      </div>

                      <div className="form__field">
                        <CustomizedInputPassword {...repeatPasswordProps} />
                      </div>
                      <div className="field__error-message">
                        {touched.repeatPassword ? errors.repeatPassword : ''}
                      </div>
                    </div>

                    <div className="form__block">
                      <div className="form__field">
                        <div className="field__input">
                          <Field {...inputEmailProps} />
                          <div className="field__error-message">
                            {touched.email ? errors.email : ''}
                          </div>
                        </div>
                      </div>

                      <div className="form__field">
                        <div className="field__input">
                          <Field {...inputWebsiteProps} />
                          <div className="field__error-message">
                            {touched.website ? errors.website : ''}
                          </div>
                        </div>
                      </div>

                      <div className="form__field">
                        <div className="field__input">
                          <Field {...inputAgeProps} />
                          <div className="field__error-message">
                            {touched.age ? errors.age : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form__block">
                    <div className="form__field form__field--checkbox">
                      <Field {...checkboxProps} />
                    </div>
                  </div>

                  <div className="form__block form__block--button-submit">
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

                <div className="rightSide">
                  <div className="form__block">
                    <div className="form__field">
                      <FieldArray name="skills">
                        {({push}) => (
                          <>
                            <div className="form__skills-input-block">
                              <div>
                                <Field {...inputSkill} />
                              </div>
                              <div className="button-add-skill__container">
                                <StyledButton
                                  variant="contained"
                                  size="small"
                                  color="primary"
                                  type="button"
                                  onClick={() => {
                                    if (values.skill.trim()) {
                                      push(values.skill);
                                      setFieldValue('skill', '');
                                    }
                                  }}
                                >
                                  Добавить навык
                                </StyledButton>
                              </div>
                            </div>
                            <div>
                              <ul className="form__listSkills">
                                {values.skills.map(item => {
                                  return (
                                    <div key={uniqueId()} className="form__listSkills">
                                      <li>{item}</li>
                                    </div>
                                  );
                                })}
                              </ul>
                            </div>
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
