import { AuthenticationForm, MainTag } from "../styles/GlobalStyle";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import styled from "styled-components";
import { ReactComponent as AuroraLogo } from '../assets/svg/Aurora.svg'
import Select from 'react-select'

const SignUp = () => {
  const pageTitle = 'Sign up to Aurora · Aurora';
  const SelectOption = [
    { value: 'chocolate', label: '🇰🇷 Korea' },
    { value: 'strawberry', label: '🇺🇸 United States' },
    { value: 'vanilla', label: '🇫🇷 France' }
  ]

  const selectCustomStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      textAlign: 'left',
      fontFamily: 'sans-serif',
      color: state.isFocused ? '#fff' : '#000',
      backgroundColor: state.isFocused ? '#474747' : '#fff',
      transition: 'all .2s'
    }),
    singleValue: (provided: any) => ({
      ...provided,
      textAlign: 'left',
      color: '#fff'
    }),
    control: (provided: any) => ({
      ...provided,
      background: 'none',
      margin: 'auto',
      border: '1px solid #fff',
      height: '2.6rem',
      fontFamily: 'sans-serif',
      width: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      placeholder: '#fff',
      marginBottom: '1rem'
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#fff',
    }),
  };

  // const navigate = useNavigate()

  return (
    <MainTag>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Header/>
      <SignUpContainer>
        <CenterBox>
          <LeftBox>
            <AuroraLogo style={{width: '12rem'}}/> <br/>
            Features Supported by Aurora:
          </LeftBox>
          <RightBox>

            <AuthenticationForm style={{ height: '34rem' }}>
              <Select options={SelectOption} styles={selectCustomStyle} placeholder={'Country'}/>

              <div className="input-container name-container">
                <input type={"input"} className="input-field" placeholder="First name" name="first-name" id='first-name'
                       required={true}/>
                <label htmlFor="first-name" className="input-label">First name</label>
              </div>

              <div className="input-container name-container" style={{ float: 'right'}}>
                <input type={"input"} className="input-field" placeholder="Last name" name="last-name" id='last-name'
                       required={true}/>
                <label htmlFor="last-name" className="input-label">Last name</label>
              </div>

              <br/>

              <div className="input-container phone-container">
                <input type={"input"} className="input-field" placeholder="Phone" name="phone" id='phone'
                       required={true}/>
                <label htmlFor="phone" className="input-label">Phone</label>
                <div className={'info-text'}>* Select country first</div>
              </div>

              <div className="input-container email-container">
                <input type={"input"} className="input-field" placeholder="Email" name="email" id='email'
                       required={true}/>
                <label htmlFor="email" className="input-label">Email</label>
              </div>

              <div className="input-container password-container-2">
                <input type={"password"} className="input-field" placeholder="Password" name="password" id='password'
                       required={true}/>
                <label htmlFor="password" className="input-label">Password</label>
              </div>

              <button type={'submit'}>
                Sign in
              </button>
            </AuthenticationForm>

          </RightBox>
        </CenterBox>
      </SignUpContainer>
    </MainTag>
  )
}

const SignUpContainer = styled.div`
  height: calc(100vh - 3.3rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterBox = styled.div`
  width: 70%;
  height: 40rem;
  border: none;
`

const LeftBox = styled.div`
  text-align: left;
  float: left;
  width: 45%;
  height: 100%;
`

const RightBox = styled.div`
  float: left;
  width: 55%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  border: none;
  border-radius: 8px;
`

export default SignUp