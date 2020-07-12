import React from 'react';
import { Form, Button, Input, FormGroup } from 'reactstrap';

//style
import './formChoiseDate'
const FormChoiseDate = (props) => {

  const { handleSubmit } = props

  return (

    <Form inline onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="day"
          placeholder='Choose the number'
          onChange={e => e.target.value}
        />
        <Button outline color='primary' type="submit">Click here</Button>
      </FormGroup>
    </Form >
  );
}
export default FormChoiseDate; 