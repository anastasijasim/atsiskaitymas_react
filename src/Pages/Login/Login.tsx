import * as Yup from "yup";

import { Form, Formik } from "formik"

import Button from "../../components/Button/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import {Link} from "react-router-dom"
import { LoginUser } from "../../types/user";
import { REGISTER_PATH } from "../../routes/consts";
import { UserContext } from "../../contexts/UserContexts";
import { requiredField } from "../../consts/validations";
import styled from "styled-components";
import { toast } from "react-toastify";
import {useContext} from "react"
import { useLoginUser } from "../../hooks/userHooks";

const validationSchema: Yup.ObjectSchema <LoginUser> = Yup.object().shape ({
  email: Yup.string().email("Invalid Email").required(requiredField),
  password:Yup.string().required(requiredField),
});

const initialValues: LoginUser ={
  email: "",
  password: "", 
}

const Login = () => {
  const { mutateAsync: loginUser } = useLoginUser();
  const { setUser } = useContext(UserContext);
  
  const handleSumbit = (values:LoginUser) =>{
    loginUser(values)
      .then((response)=>{
        console.log(response);
        setUser(response);
        toast.success ("Successfully logged in!");
      })
      .catch((error)=>{
        toast.error ("Failed to login");
      });
  };
  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={handleSumbit}
      validationSchema={validationSchema}
    >
      {({isSubmitting}) =>(
        <StyledForm>
          <Title>Login</Title>
          <ForminInputStyled>
            <FormikInput type="email" name="email" placeholder ="Email"/>
            <FormikInput type="password" name="password" placeholder ="password"/>
          </ForminInputStyled>
          <SubmitingStyled>
            <Button type="submit" disabled={isSubmitting}>Login</Button>
            <StyledLink to={REGISTER_PATH}>Sign up</StyledLink>
          </SubmitingStyled>
        </StyledForm>
      )}
    
    </Formik>
  )
}

export default Login

const StyledForm = styled(Form)`
  padding: 10px
`

const StyledLink = styled(Link)`
  padding: 10px;
`

const Title = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
`
const SubmitingStyled = styled.div`
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  height: 50px;
`

const ForminInputStyled = styled.div`
  padding: 20px;
`

/* const styledLink = styled(Link)`
  display:none;  
` */
