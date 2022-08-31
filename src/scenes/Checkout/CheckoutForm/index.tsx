import { divide } from 'lodash';
import React, { useState } from 'react';
import InputField from './InputField';

function CheckoutForm(props: { formSubmitCallback: Function }) {
  const { formSubmitCallback } = props;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({
    error: false,
    message: '',
  });

  const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validateForm = () => {
    if (!isValidEmail(form.email)) {
      setFormErrors({
        error: true,
        message: 'Please enter a valid email address',
      });
      return false;
    }
    return true;
  };

  return (
    <div className="container bg-white border border-black p-4 space-y-4">
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          if (validateForm()) {
            formSubmitCallback(form);
          }
        }}
        className="grid md:grid-cols-2 gap-4"
      >
        <div className="col-span-2 md:col-span-1">
          <InputField
            id="firstName"
            type="text"
            label="First Name"
            value={form.firstName}
            onChange={onUpdateField}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <InputField
            id="lastName"
            type="text"
            label="Last Name"
            value={form.lastName}
            onChange={onUpdateField}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <InputField
            id="email"
            type="email"
            label="Email"
            value={form.email}
            onChange={onUpdateField}
          />
          <div className="col-span-2 md:col-span-1">
            {formErrors.error && (
              <div>
                {' '}
                <span className="text-red-500">{formErrors.message}</span>
              </div>
            )}
          </div>
        </div>
        <div className="pt-4 col-span-2">
          <h1 className="text-xl font-medium">FAQ</h1>
          <h6 className="pt-5 font-semibold">How Do I Pay?</h6>
          <p>Payments will be done through e-transfers and cash.</p>
          <h6 className="pt-5 font-semibold">Who do I pay?</h6>
          <p>
            All payments should be directed to either Trisha or Bryan. If you
            don't know who either Bryan or Trisha are, please contact
            supplybyforte@gmail.com.
          </p>
          <h6 className="pt-5 font-semibold">When will I receive my order?</h6>
          <p>
            We will begin processing orders on the day of the deadline and once
            all orders have been taken. Processing time for orders will take
            around two weeks.
          </p>
        </div>
        <div className="pt-3 col-span-2 justify-self-end">
          <input
            type="submit"
            value="Place Order"
            className="py-2 px-4 bg-black hover:bg-black/70 hover:cursor-pointer text-white uppercase font-medium rounded-none"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
