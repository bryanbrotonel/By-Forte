import React from 'react';

function CheckoutForm() {
  return (
    <div className=" container bg-white border border-black p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <form>
          <label htmlFor="firstName" className="mb-1">
            First Name
          </label>
          <br />
          <input
            id="firstName"
            type="text"
            className="w-full border border-black p-2 rounded-none"
          />
        </form>
        <div>
          <label htmlFor="lastName" className="mb-1">
            Last Name
          </label>
          <br />
          <input
            id="lastName"
            type="text"
            className="w-full border border-black p-2 rounded-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <br />
          <input
            id="email"
            type="email"
            className="w-full border border-black p-2 rounded-none"
          />
        </div>
      </div>
      <div className='pt-4'>
        <h1 className="text-2xl font-bold">FAQ</h1>
        <h6 className="pt-5 font-semibold">How Do I Pay?</h6>
        <p>
          We don't have online payments set up on the online shop yet. Payments
          will be done through e-transfers and cash.
        </p>
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
      <div className="pt-3 flex justify-end">
        <button className="py-2 px-4 bg-black hover:bg-black/70 text-white uppercase font-medium">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
