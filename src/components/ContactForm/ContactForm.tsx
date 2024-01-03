import { Formik, Form, Field, ErrorMessage } from 'formik';
import './contact-form.scss';
import * as Yup from 'yup';
import { ContactUsFormValues } from '../../types';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import { useEffect, useState } from 'react';
import { Loading } from '../Loading/Loading';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    phone_number: '',
  };

  const validationSchema = Yup.object({
    phone_number: Yup.string()
      .required('Please enter your phone number!')
      .min(9, 'Phone number must be at least 9 digits long!')
      .max(20, 'The phone number can be a maximum of 20 digits!'),
  });

  const onSubmit = (values: ContactUsFormValues, { resetForm }: any) => {
    console.log(values)
    resetForm();
    setIsLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <section className='contact-us'>
      <div className='container'>
        <div className='contact-us__inner'>
          <h2 className='text-center fw-bold'>Contact Us</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className='contact-us__form'>
              <label>
                <span>+998</span>
                <Field
                  type='number'
                  name='phone_number'
                  placeholder='Phone number'
                />
                <span className='err-msg'>
                  <ErrorMessage name='phone_number' />
                </span>
              </label>
              <GreenBtn text='Send' tag='button' type='submit' />
            </Form>
          </Formik>
        </div>
      </div>
      {isLoading ? (
        <div className='position-absolute top-0 end-0 bottom-0 start-0 bg-opacity-50 bg-white'>
          <Loading />
        </div>
      ) : (
        ''
      )}
    </section>
  );
};
