import React, { useContext } from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { Input, Button } from 'antd';
import { BridgesContext } from '../../../state/bridgesContext';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Navigation from '../../common/Navigation';

let testData = {
  project_code: '1007331',
  province: 'Eastern Province',
  district: 'Bugesera',
  sector: 'Juru',
  cell: 'Juru',
  village: 'Nyamigende',
  village_id: '57020103',
  name: 'Nyamigende',
  type: '?',
  stage: 'Rejected',
  sub_stage: '?',
  Individuals_directly_served: 0,
  span: 100,
  lat: -2.095311,
  long: 30.245678,
  communities_served: ['Juru', 'Nyakariro'],
};

const FormikForm = () => {
  const { detailsData } = useContext(BridgesContext);
  const { authState } = useOktaAuth();
  const history = useHistory();

  //   if (!authState.isAuthenticated) {
  //     history.push(`/login/`);
  //   }

  return (
    <>
      <Navigation />
      <div className="formContainer">
        <Formik
          initialValues={testData}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            // put axios async call here
            console.log(data);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleSubmit }) => (
            <Form>
              <span>Project Code</span>
              <Field name="project_code" type="input" as={Input} />
              <span>Province</span>
              <Field name="province" type="input" as={Input} />
              <span>Disctrict</span>
              <Field name="district" type="input" as={Input} />
              <span>Sector</span>
              <Field name="sector" type="input" as={Input} />
              <span>Cell</span>
              <Field name="cell" type="input" as={Input} />
              <span>Village</span>
              <Field name="village" type="input" as={Input} />
              <span>Village ID</span>
              <Field name="village_id" type="input" as={Input} />
              <span>Name</span>
              <Field name="name" type="input" as={Input} />
              <span>Type</span>
              <Field name="type" type="input" as={Input} />
              <span>Stage</span>
              <Field name="stage" type="input" as={Input} />
              <span>Sub-Stage</span>
              <Field name="sub_stage" type="input" as={Input} />
              <span>Individuals Directly Served</span>
              <Field
                name="Individuals_directly_served"
                type="number"
                as={Input}
              />
              <span>Span</span>
              <Field name="span" type="number" as={Input} />
              <span>Latitude</span>
              <Field name="lat" type="float" as={Input} />
              <span>Longitude</span>
              <Field name="long" type="float" as={Input} />

              <FieldArray name="communities_served">
                {arrayHelpers => (
                  <div>
                    <span>Communities Served: </span>
                    {values.communities_served.map((community, index) => {
                      return (
                        <Field
                          key={index}
                          type="input"
                          name={`communities_served.${index}`}
                          as={Input}
                        />
                      );
                    })}
                    <Button onClick={() => arrayHelpers.push('')}>
                      Add Community
                    </Button>
                  </div>
                )}
              </FieldArray>

              <Button
                disabled={isSubmitting}
                type="primary"
                onClick={handleSubmit}
                className="submitButton"
              >
                Submit
              </Button>

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormikForm;
