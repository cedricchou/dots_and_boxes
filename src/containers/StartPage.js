import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const StartPage = (props) => (
      <div>
        <Input handleChange={props.rowValueChange} />
        <Input handleChange={props.columnValueChange} />
        <Button startGame={props.startClick} />
      </div>
);

export default StartPage;



