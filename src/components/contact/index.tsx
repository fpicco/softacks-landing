import React, { useState } from 'react';
import axios from 'axios';
import { tw } from 'twind';
import Link from 'next/link';

interface Status {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

const Contact = () => {
  const [status, setStatus] = useState<Status>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: `` },
  });
  const [inputs, setInputs] = useState({
    name: ``,
    email: ``,
    phone: ``,
    message: ``,
  });
  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }, // eslint-disable-line object-shorthand
      });
      setInputs({
        name: ``,
        email: ``,
        phone: ``,
        message: ``,
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg }, // eslint-disable-line object-shorthand
      });
    }
  };
  const handleOnChange = (e: React.SyntheticEvent): void => {
    e.persist();
    const parsedEvent = e.target as HTMLInputElement;
    setInputs((prev) => ({
      ...prev,
      [parsedEvent.id]: parsedEvent.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: `` },
    });
  };
  const handleOnSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: `POST`,
      url: `https://formspree.io/f/xnqrvokn`, // cambiar la url
      data: inputs,
    })
      .then(() => {
        handleServerResponse(true, `Thank you, your message has been submitted. We will answer as soon as possible.`);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  const FORM_FIELDS = [
    {
      id: `name`,
      type: `text`,
      value: inputs.name,
      required: true,
      placeholder: `John Doe`,
    },
    {
      id: `email`,
      type: `email`,
      value: inputs.email,
      required: true,
      placeholder: `johndoe@gmail.com`,
    },
    {
      id: `phone`,
      type: `text`,
      value: inputs.phone,
      required: false,
      placeholder: `+1 1234567890`,
    },
  ];

  return (
    <div id="contact" className={tw(`relative`)}>
      <div className={tw(`container mx-auto px-2 py-20 w-full flex justify-center items-center`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h2 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>
            Bring your idea to life
          </h2>
          <p className={tw(`mt-4 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Still thinking?</p>
          <p className={tw(`mt-2 pb-4 text-5xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
            Schedule a call right now!
          </p>
          <div className={tw(`w-full flex justify-center items-center`)}>
            <Link href="/pricing">
              <a className={tw(`text-primary no-underline hover:underline text-xl`)}> Check prices</a>
            </Link>
          </div>
        </div>
        <div className={tw(`w-full h-auto even-shadow rounded-xl lg:p-4 relative`)}>
          <div className={tw(`px-8 md:p-10 ${status.submitted && `h-full flex-col-center`}`)}>
            {status.submitted ? (
              <>
                <p className={tw(`flex justify-center items-center`)}>{status.info.msg}</p>
                {/* eslint-disable-next-line */}
                <div className={tw(`w-full flex justify-center items-center my-10 md:mb-0`)} onClick={handleOnChange}>
                  <input
                    type="button"
                    className={tw(
                      `font-sans font-medium py-2 px-4 border rounded 
                      bg-indigo-600 text-white 
                      border-indigo-500 hover:bg-indigo-700 
                      cursor-pointer scale-125`,
                    )}
                    value="New message"
                    disabled={status.submitting}
                  />
                </div>
              </>
            ) : (
              <>
                <form
                  name="contact"
                  method="POST"
                  onSubmit={handleOnSubmit}
                  className={tw(`mx-20 px-12 border-2 rounded-xl`)}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className={tw(`gap-4 w-fit p-8 text-dark-neutral mx-auto`)}>
                    <div className={tw(`flex flex-col w-full gap-2 text-xl`)}>
                      {FORM_FIELDS.map((field) => (
                        <div key={field.id} className={tw(`flex flex-col md:flex-row md:items-end w-full mt-6`)}>
                          <label className={tw(`upercase text-xl  w-32 capitalize`)} htmlFor={field.id}>
                            {field.id}:
                          </label>
                          <input
                            className={tw(
                              `border-b-2 border-primary px-3 mb-1 flex border-neutral w-full outline-none`,
                            )}
                            type={field.type}
                            name={field.id}
                            id={field.id}
                            onChange={handleOnChange}
                            required={field.required}
                            value={field.value}
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>
                    <div className={tw(`flex flex-col md:flex-row md:items-start w-full mt-6`)}>
                      {/* eslint-disable-next-line */}
                      <label className={tw(`upercase text-xl  py-2 w-32`)} htmlFor="message">
                        Message:
                      </label>
                      <textarea
                        className={tw(
                          `border-b-2 border-primary p-3 border-neutral resize-none h-40 w-full outline-none text-xl`,
                        )}
                        name="message"
                        id="message"
                        onChange={handleOnChange}
                        value={inputs.message}
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center my-10">
                    <input
                      type="submit"
                      className={tw(
                        `font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white 
                        border-indigo-500 hover:bg-indigo-700 cursor-pointer scale-125`,
                      )}
                      value="Contact us"
                      disabled={status.submitting}
                    />
                  </div>
                </form>
              </>
            )}
          </div>
          <img
            className={tw(`w-20 ${!status.submitted && `bottom-20`} -left-32 pt-5 absolute`)}
            src="/images/start-up.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
