"use client";

import { Camper } from "@/types/camper";
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FieldProps } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";

type BookingFormProps = {
  camper: Camper;
};

interface BookingFormValues {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be 30 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date()
    .min(new Date(), "Date cannot be in the past")
    .required("Booking date is required"),
  comment: Yup.string().max(500, "Comment must be 500 characters or less"),
});

// Обгортка для DatePicker у Formik
const FormikDatePicker = ({ field, form }: FieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={css.datePickerWrapper}>
      <DatePicker
        {...field}
        selected={field.value}
        onChange={(date: Date | null) => form.setFieldValue(field.name, date)}
        minDate={new Date()}
        placeholderText={focused ? "Select a date between today" : "Booking date*"}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          form.setFieldTouched(field.name, true);
        }}
        className={`${css.input} ${css.dateInput}`}
        dateFormat="dd/MM/yyyy"
      />
      {focused && !field.value && (
        <p className={css.helper}>Select a date between today</p>
      )}
    </div>
  );
};

const BookingForm: React.FC<BookingFormProps> = ({ camper }) => {
  const initialValues: BookingFormValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>
  ) => {
    console.log("Booking submitted for camper:", camper.name, values);
    actions.resetForm();
  };

  return (
    <div className={css.bookingForm}>
      <div className={css.titleBox}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.inputsBox}>
              <div className={css.fieldGroup}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={css.input}
                />
                <ErrorMessage name="name" component="span" className={css.error} />
              </div>

              <div className={css.fieldGroup}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                />
                <ErrorMessage name="email" component="span" className={css.error} />
              </div>

              <div className={css.fieldGroup}>
                <Field name="bookingDate" component={FormikDatePicker} />
                <ErrorMessage name="bookingDate" component="span" className={css.error} />
              </div>

              <div className={css.fieldGroup}>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={css.textarea}
                />
                <ErrorMessage name="comment" component="span" className={css.error} />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className="buttonAnchor">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
