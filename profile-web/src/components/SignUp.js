import React from 'react'
import FormField from './misc/FormField';
import AuthService from '../services/AuthService';
import { Redirect } from 'react-router-dom'

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const URL_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
const PASS_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const validators = {
  email: val => EMAIL_PATTERN.test(val),
  password: val => PASS_PATTERN.test(val),
}

class SignUp extends React.Component {
  state = {
    data: {
      email: '',
      password: '',
      campus: '',
      course: ''
    },
    errors: {      
      email: '',
      password: '',
      campus: '',
      course: ''
    },
    touch: {},
    redirect: false
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    const isValid = validators[name](value)

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: !isValid
      }
    })
  }

  handleBlur = (e) => {
    const {name} = e.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  getValidationClassName = (attr) => {
    const {errors, touch} = this.state
    if(!touch[attr]) {
      return ''
    } else if (errors[attr]) {
      return 'is-invalid'
    } else {
      return 'is-valid'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    AuthService.register(this.state.data).then(
      () => {
        this.setState({redirect: true})
      },
      error => {
        const serverErrors = Object.keys(error.response.data.errors).reduce((acc, el) => (
          {...acc, [el]: true}
        ), {})
        this.setState({
          errors: {
            ...this.state.errors,
            ...serverErrors
          }
        })
      }
    )
  }

  render () {
    if(this.state.redirect) {
    return < Redirect to="/authenticate"/> 
  }

  const {data, errors, touch} = this.state

  const hasErrors = Object.values(errors).some(el=>el===true)

    return (
      <article className="PostForm">
        <form>
          < FormField 
          label="Email"
          name="email"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={data.email}
          touch={touch.email}
          error={errors.email}
          inputType="email"
          validationClassName={this.getValidationClassName('email')}
          />
          < FormField 
          label="Password"
          name="password"
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={data.password}
          touch={touch.password}
          error={errors.password}
          inputType="password"
          validationClassName={this.getValidationClassName('password')}
          />
          <button type='submit' className={`btn ${hasErrors ? 'btn-danger' : 'btn-success'}`} disabled={hasErrors}>Register</button>
        </form>
      </article>
    )
  }
}

export default SignUp;