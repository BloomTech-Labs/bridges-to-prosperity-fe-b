import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { Input, Button } from 'antd';
import { BridgesContext } from '../../../state/bridgesContext';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const FormikForm = () => {
  const { detailsData } = useContext(BridgesContext);
  const { authState } = useOktaAuth();
  const history = useHistory();

  if (!authState.isAuthenticated) {
    history.push(`/table/`);
  }

  return (
    <div>
      <Formik
        initialValues={detailsData}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // put axios async call here
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleSubmit }) => (
          <Form>
            <Field name="id" type="number" as={Input} />
            <Field name="province" type="input" as={Input} />
            <Field name="district" type="input" as={Input} />
            <Field name="district_id" type="number" as={Input} />
            <Field name="bridge_site_name" type="input" as={Input} />
            <Field name="sector" type="input" as={Input} />
            <Field name="sector_id" type="input" as={Input} />
            <Field name="project_stage" type="input" as={Input} />
            <Field name="sub_stage" type="input" as={Input} />
            <Field
              name="individuals_directly_served"
              type="number"
              as={Input}
            />
            <Field name="span" type="number" as={Input} />
            <Field name="lat" type="float" as={Input} />
            <Field name="long" type="float" as={Input} />

            <Button
              disabled={isSubmitting}
              type="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
