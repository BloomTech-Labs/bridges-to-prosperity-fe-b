import React, { useContext } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import { BridgesContext } from '../../../state/bridgesContext';
import Navigation from '../../common/Navigation';
import * as yup from 'yup';

const validationSchema = yup.object({
  id: yup.number().required(),
  country: yup.string().required(),
  district_id: yup.number().required(),
  province: yup.string().required(),
  district: yup.string().required(),
  sector: yup.string().required(),
  sector_id: yup.string().required(),
  cell: yup.string().required(),
  cell_id: yup.string().required(),
  village: yup.string().required(),
  village_id: yup.string().required(),
  bridge_site_name: yup.string().required(),
  project_stage: yup.string().required(),
  sub_stage: yup.string().required(),
  project_code: yup.string().required(),
  bridge_type: yup.string().required(),
  span: yup.number().required(),
  lat: yup.number().required(),
  long: yup.number().required(),
  individuals_directly_served: yup.number().required(),
  form_name: yup.string().required(),
  casesafeid_form: yup.string().required(),
  bridge_opportunity_id: yup.string().required(),
  bridge_image: yup.string().required(),
});

const FormikForm = () => {
  const { detailsData } = useContext(BridgesContext);

  return (
    <>
      <Navigation />
      <div className="formContainer">
        <Formik
          initialValues={detailsData}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            // put axios async call here
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ values, errors, isSubmitting, handleSubmit, touched }) => (
            <Form>
              <span>ID</span>
              <Field name="id" type="number" as={Input} />
              {errors.id && touched.id ? <div>{errors.id}</div> : null}

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
                    {values.communities_served.map((community, index) => {
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
                type="primary"
                onClick={handleSubmit}
                className="submitButton"
              >
                Submit
              </Button>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormikForm;
