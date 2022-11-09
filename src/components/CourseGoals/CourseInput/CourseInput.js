import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    // Dynamically changing styling using props passed from component to make leaner css code base
    color: ${props => props.invalid ? 'red' : "#333"}
  }

  & input {
    display: block;
    width: 100%;
    // Dynamically changing styling using props passed from component to make leaner css code base
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? 'rgb(243, 136, 136)' : "transparent"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length > 0){
      return setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      return setIsValid(false);
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* Passing props with key as can be used to dynamically change styling in styled div component above */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
