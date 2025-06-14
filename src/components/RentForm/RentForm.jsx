import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RentForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import Calendar from '../Calendar/Calendar';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  date: Yup.date(),
  comment: Yup.string(),
});

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const RentForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    toast.success('Booking successful!');
    resetForm();
  };

  const renderField = (name, type, placeholder, isTextarea = false) => (
    <div className={css.fieldWrapper}>
      <Field
        as={isTextarea ? 'textarea' : 'input'}
        type={type}
        name={name}
        placeholder={placeholder}
        className={isTextarea ? css.textarea : css.input}
      />
      <ErrorMessage name={name} component="div" className={css.error} />
    </div>
  );

  return (
    <div className={css.form}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={css.formFields}>
            <div className={css.fieldsWrapper}>
              {renderField('name', 'text', 'Name*')}
              {renderField('email', 'email', 'Email*')}

              <div className={css.fieldWrapper}>
                <Calendar
                  value={values.date}
                  handleChange={val => setFieldValue('date', val)}
                  placeholder="Booking date"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className={css.error}
                />
              </div>

              {renderField('comment', 'text', 'Comment', true)}
            </div>

            <div className={css.buttonWrapper}>
              <button type="submit" className={css.button}>
                Send
              </button>
            </div>

            <ToastContainer position="top-right" autoClose={6000} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RentForm;
