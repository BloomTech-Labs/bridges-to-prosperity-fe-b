import React, { useState } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import axios from 'axios';
import { validationSchema } from './YupValidationSchema';

const defaultState = {
  country: '',
  district_id: 0,
  province: '',
  district: '',
  sector: '',
  sector_id: '',
  cell: '',
  cell_id: '',
  village: '',
  village_id: '',
  bridge_site_name: '',
  project_stage: '',
  sub_stage: '',
  project_code: '',
  bridge_type: '',
  span: 0,
  lat: 0,
  long: 0,
  individuals_directly_served: '',
  communities_served: [],
  form_name: '',
  casesafeid_form: '',
  bridge_opportunity_id: '',
  bridge_image: '',
};

const AddABridge = () => {
  const [newBridge, setNewBridge] = useState(defaultState);
  const { push } = useHistory();
  return (
    <>
      <Navigation />
      <div className="formContainer">
        <Formik
          initialValues={newBridge}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            axios
              .post(`${process.env.REACT_APP_API_URI}/bridges`, newBridge)

              .then(res => {
                console.log('added');
                push(`/table`);
                window.scrollTo(0, 0);
              })
              .catch(err => console.log(err));
            setSubmitting(true);
          }}
        >
          {({ values, errors, isSubmitting, handleSubmit, touched }) => (
            <Form>
              <span>Country</span>
              <Field name="country" type="input" as={Input} />
              {errors.country && touched.country ? (
                <div>{errors.country}</div>
              ) : null}

              <span>Disctrict ID</span>
              <Field name="district_id" type="number" as={Input} />
              {errors.district_id && touched.district_id ? (
                <div>{errors.district_id}</div>
              ) : null}

              <span>Province</span>
              <Field name="province" type="input" as={Input} />
              {errors.province && touched.province ? (
                <div>{errors.province}</div>
              ) : null}

              <span>District</span>
              <Field name="district" type="input" as={Input} />
              {errors.district && touched.district ? (
                <div>{errors.district}</div>
              ) : null}

              <span>Sector</span>
              <Field name="sector" type="input" as={Input} />
              {errors.sector && touched.sector ? (
                <div>{errors.sector}</div>
              ) : null}

              <span>Sector ID</span>
              <Field name="sector_id" type="input" as={Input} />
              {errors.sector_id && touched.sector_id ? (
                <div>{errors.sector_id}</div>
              ) : null}

              <span>Cell</span>
              <Field name="cell" type="input" as={Input} />
              {errors.cell && touched.cell ? <div>{errors.cell}</div> : null}

              <span>Cell ID</span>
              <Field name="cell_id" type="input" as={Input} />
              {errors.cell_id && touched.cell_id ? (
                <div>{errors.cell_id}</div>
              ) : null}

              <span>Village</span>
              <Field name="village" type="input" as={Input} />
              {errors.village && touched.village ? (
                <div>{errors.village}</div>
              ) : null}

              <span>Village ID</span>
              <Field name="village_id" type="input" as={Input} />
              {errors.village_id && touched.village_id ? (
                <div>{errors.village_id}</div>
              ) : null}

              <span>Bridge Site Name</span>
              <Field name="bridge_site_name" type="input" as={Input} />
              {errors.bridge_site_name && touched.bridge_site_name ? (
                <div>{errors.bridge_site_name}</div>
              ) : null}

              <span>Project Stage</span>
              <Field name="project_stage" type="input" as={Input} />
              {errors.project_stage && touched.project_stage ? (
                <div>{errors.project_stage}</div>
              ) : null}

              <span>Sub Stage</span>
              <Field name="sub_stage" type="input" as={Input} />
              {errors.sub_stage && touched.sub_stage ? (
                <div>{errors.sub_stage}</div>
              ) : null}

              <span>Project Code</span>
              <Field name="project_code" type="input" as={Input} />
              {errors.project_code && touched.project_code ? (
                <div>{errors.project_code}</div>
              ) : null}

              <span>Bridge Type</span>
              <Field name="bridge_type" type="input" as={Input} />
              {errors.bridge_type && touched.bridge_type ? (
                <div>{errors.bridge_type}</div>
              ) : null}

              <span>Span</span>
              <Field name="span" type="number" as={Input} />
              {errors.span && touched.span ? <div>{errors.span}</div> : null}

              <span>Latitude</span>
              <Field name="lat" type="float" as={Input} />
              {errors.lat && touched.lat ? <div>{errors.lat}</div> : null}

              <span>Longitude</span>
              <Field name="long" type="float" as={Input} />
              {errors.long && touched.long ? <div>{errors.long}</div> : null}

              <span>Individuals Directly Served</span>
              <Field
                name="individuals_directly_served"
                type="number"
                as={Input}
              />
              {errors.individuals_directly_served &&
              touched.individuals_directly_served ? (
                <div>{errors.individuals_directly_served}</div>
              ) : null}

              <FieldArray name="communities_served">
                {arrayHelpers => (
                  <div>
                    <span>Communities Served: </span>
                    {values.communities_served &&
                      values.communities_served.map((community, index) => {
                        return (
                          <>
                            <Field
                              key={index}
                              type="input"
                              name={`communities_served.${index}`}
                              as={Input}
                            />
                            <Button onClick={() => arrayHelpers.remove(index)}>
                              Remove Community
                            </Button>
                          </>
                        );
                      })}
                    <Button onClick={() => arrayHelpers.push('')}>
                      Add Community
                    </Button>
                  </div>
                )}
              </FieldArray>

              <span>Form Name</span>
              <Field name="form_name" type="input" as={Input} />
              {errors.form_name && touched.form_name ? (
                <div>{errors.form_name}</div>
              ) : null}

              <span>Casesafeid Form</span>
              <Field name="casesafeid_form" type="input" as={Input} />
              {errors.casesafeid_form && touched.casesafeid_form ? (
                <div>{errors.casesafeid_form}</div>
              ) : null}

              <span>Bridge Opportunity ID</span>
              <Field name="bridge_opportunity_id" type="input" as={Input} />
              {errors.bridge_opportunity_id && touched.bridge_opportunity_id ? (
                <div>{errors.bridge_opportunity_id}</div>
              ) : null}

              <span>Bridge Image</span>
              <Field name="bridge_image" type="input" as={Input} />
              {errors.bridge_image && touched.bridge_image ? (
                <div>{errors.bridge_image}</div>
              ) : null}

              <Button
                disabled={isSubmitting}
                type="submit"
                className="submitButton"
              >
                Submit
              </Button>
              <Button
                style={{ marginLeft: '2rem' }}
                disabled={isSubmitting}
                type="primary"
                onClick={() => {
                  push('/table');
                }}
                className="submitButton"
              >
                Cancel
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddABridge;

// https://bridges-b-api.herokuapp.com/bridges/update/${data.id}
