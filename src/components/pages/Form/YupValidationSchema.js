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

export { validationSchema };
