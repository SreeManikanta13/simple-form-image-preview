import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUpload from "./ImageUpload";

const App = () => {

    const [ image, setImage] = useState(false);
    
    return (
        <div className="box">
          <h2>Simple Form</h2>
          <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                description: '',
                email: ''
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('First Name is required'),
                lastName: Yup.string()
                    .required('Last Name is required'),
                description: Yup.string()
                    .required('Description is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                
            })}
            onSubmit={(fields, {resetForm}) => {
                alert(JSON.stringify(fields, null, 4));
                resetForm();
                setImage(true);
            }} >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                <div className="nameWrapper">
                  <div className="form-group inputBox firstName">                            
                      <Field name="firstName" type="text"
                      className={'form-control' + (touched.firstName ? ' touched' : '') + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                      <label htmlFor="firstName">First Name</label>
                      <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                  </div>
                  <div className="form-group inputBox lastName">
                      <Field name="lastName" type="text" className={'form-control' + (touched.lastName ? ' touched' : '') + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                      <label htmlFor="lastName">Last Name</label>
                      <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                  </div>
                </div>
                <div className="form-group inputBox">
                    <Field name="description" component="textarea" type="textarea" className={'form-control' + (touched.description ? ' touched' : '') + (errors.description && touched.description ? ' is-invalid' : '')} />
                    <label htmlFor="description">Description</label>
                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group inputBox">
                    <Field name="email" type="text" className={'form-control' + (touched.email ? ' touched' : '') + (errors.email && touched.email ? ' is-invalid' : '')} />
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>
                <ImageUpload image = {image} />
                <div className="form-group submit">
                    <button type="submit" className="btn btn-primary mr-2"
                     disabled={!(isValid && dirty)}>SAVE</button>
                </div>
            </Form>
            )}
            </Formik>
        </div>
    )
}

export default App;