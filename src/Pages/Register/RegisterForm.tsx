import * as Yup from "yup";

import {Form, Formik} from "formik";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import { LOGIN_PATH } from "../../routes/consts";
import {Link} from "react-router-dom"
import { NewUser } from "../../types/user";
import { requiredField } from "../../consts/validations";
import styled from "styled-components";
import {toast} from "react-hot-toast";
import { useCreateUser } from "../../hooks/userHooks";

const initialValues: NewUser = {
  email: "",
  password: "",
};

const validationSchema: Yup.ObjectSchema<NewUser> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(requiredField),
  password: Yup.string().required(requiredField),
});


const Register = () => {
  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values: NewUser) => {
    toast("Registration successfull!");
    createUser(values)
      .then(() => {
        toast.success("Register successfully");
      })
      .catch(() => {
        console.error("Failed to post the ad");
      });
  };
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledFormContainer>
            <StyledForm>
              <InputRow>
                <InputRowItem>
                  <FormikInput
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                </InputRowItem>
              </InputRow>
              <InputRow>
                <InputRowItem>
                  <FormikInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </InputRowItem>
                <InputRowItem>
                  <FormikInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat password"
                  />
                </InputRowItem>
              </InputRow>
              <Button
                type="submit"
                disabled={isSubmitting}
                submitTitle="Register"
              >Register</Button>
              <Button type="submit"as={Link}to={LOGIN_PATH}>BACK</Button>
            </StyledForm>
          </StyledFormContainer>
        
        )}
      </Formik>
  )
}

export default Register

const StyledFormContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`

const InputRowItem = styled.div`
  flex: 1
`