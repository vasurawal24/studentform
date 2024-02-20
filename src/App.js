import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const form = Yup.object({
  name: Yup.string().required('Please Enter Your name...!'),
  F_name: Yup.string().required('Please Enter Your Father Name...!'),
  M_name: Yup.string().required('Please Enter Your Mother Name...!'),
  email: Yup.string().email().required('Please Enter Your Email...!'),
  password: Yup.string().min(5, 'Poor Password').max(6, 'Strong Password').required('Please Enter Password'),
  C_password: Yup.string().oneOf([Yup.ref('password'), null], 'Password Must be Same').required('Please Enter Comform Password'),
  number: Yup.number().typeError("Only number Allow").positive("Phone number can't start with Minus").integer("Phone number can't include decimal").min(10, 'More then 10 Digits').required('Please Enter Phone number'),
  birth: Yup.string().required('Enter Birthday Date'),
  address: Yup.string().required('Please Enter your Address'),
  city: Yup.string().required('Please Enter Your City'),
  pin: Yup.string().required('Please Enter PinCode'),
  gender: Yup.string().required('Please Select Gender'),
  deparment: Yup.string().required('Please select Deparment'),
  course: Yup.array().min(1).required('please select Course'),
  blood: Yup.string().required('Please select Your Blood Group')
})

function App() {

  const f_data = {
    name: '',
    F_name: '',
    M_name: '',
    email: '',
    password: '',
    C_password: '',
    number: '',
    birth: '',
    address: '',
    city: '',
    pin: '',
    gender: '',
    deparment: '',
    course: [],
    blood: ''
  }

  const { values, errors, handleBlur, handleChange, handleReset, handleSubmit, touched } = useFormik({
    initialValues: f_data,
    validationSchema: form,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  // console.log(values);

  return (
    <div className='con'>
      <Container>
        <div style={{ width: '600px', margin: 'auto'}} className='form'>
          <h1 style={{ textAlign: 'center', backgroundColor: 'rgba(245, 245, 245, 0.662)'}}>Student Registration Form</h1>
          <form className='row p-2' onSubmit={handleSubmit} onReset={handleReset}>
            <div className="col-md-6 fw-bold">
              <label htmlFor="inputName">Name</label>

              <input type="text" className="form-control border-black" value={values.name} onChange={handleChange} onBlur={handleBlur} id="inputName" placeholder="Enter Name" name='name' />
              {errors.name && touched.name ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.name}</span> : null}
            </div>

            <div className="form-group col-md-6  fw-bold">
              <label htmlFor="inputFatherName">Father Name</label>
              <input type="text" className="form-control border-black" value={values.F_name} onChange={handleChange} onBlur={handleBlur} id="inputFatherName" placeholder="Enter Father Name" name='F_name' />
              {errors.F_name && touched.F_name ? <span className='text-danger  p-1 border rounded-3 border-danger'>{errors.F_name}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputMotherName">Mother Name</label>
              <input type="text" className="form-control border-black" value={values.M_name} onChange={handleChange} onBlur={handleBlur} id="inputMotherName" placeholder="Enter Mother Name" name='M_name' />
              {errors.M_name && touched.M_name ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.M_name}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control border-black" value={values.email} onChange={handleChange} onBlur={handleBlur} id="inputEmail4" placeholder="Enter Email" name='email' />
              {errors.email && touched.email ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.email}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputPassword4">Password</label>
              <input type="password" className="form-control border-black" value={values.password} onChange={handleChange} onBlur={handleBlur} id="inputPassword4" placeholder="Enter Password" name='password' />
              {errors.password && touched.password ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.password}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputC_Password4">Comform Password</label>
              <input type="password" className="form-control border-black" value={values.C_password} onChange={handleChange} onBlur={handleBlur} id="inputC_Password4" placeholder="Enter Comform Password" name='C_password' />
              {errors.C_password && touched.C_password ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.C_password}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputNumber">Phone Number</label>
              <input type="text" className="form-control border-black" value={values.number} onChange={handleChange} onBlur={handleBlur} id="inputNumber" placeholder="Enter Phone Number" name='number' />
              {errors.number && touched.number ? <span className='text-danger p-1 border rounded-3 border-danger span'>{errors.number}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control border-black" value={values.address} id="inputAddress" onChange={handleChange} onBlur={handleBlur} placeholder="Enter Address" name='address' />
              {errors.address && touched.address ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.address}</span> : null}
            </div>

            <div className="form-group col-md-4 fw-bold">
              <label htmlFor="inputBirth">Date Of Birth</label>
              <input type="date" className="form-control border-black" value={values.birth} onChange={handleChange} onBlur={handleBlur} id="inputBirth" placeholder="Enter Password" name='birth' />
              {errors.birth && touched.birth ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.birth}</span> : null}
            </div>

            <div className="form-group col-md-4 fw-bold">
              <label htmlFor="inputState">City</label>
              <select id="inputState" name='city' onChange={handleChange} onBlur={handleBlur} className="form-control border-black">
                <option selected>Choose...</option>
                <option value='Surat'>Surat</option>
                <option value='Ahemdabad'>Ahemdabad</option>
                <option value='Vadodara'>Vadodara</option>
                <option value='Gandhinager'>Gandhinagar</option>
              </select>
              {errors.city && touched.city ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.city}</span> : null}
            </div>

            <div className="form-group col-md-4 fw-bold ">
              <label htmlFor="inputPincode">Pincode</label>
              <input type="text" name='pin' value={values.pin} onChange={handleChange} onBlur={handleBlur} className="form-control border-black" id="inputPincode" placeholder='Enter Pincode' />
              {errors.pin && touched.pin ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.pin}</span> : null}
            </div>

            <div className='col-md-6 border-black mt-3'>
              <label htmlFor="inputGender" className='fw-bold'>Gender</label>
              <div className="form-check">
                <input className="form-check-input border-black" onBlur={handleBlur} onChange={handleChange} type="radio" name="gender" value='Male' id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="radio" name="gender" value='Female' id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Female
                </label>
              </div>
              {errors.gender && touched.gender ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.gender}</span> : null}
            </div>

            <div className='col-md-6 border-black mt-3'>
              <label htmlFor="inputGender" className='fw-bold'>Department</label>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="radio" name="deparment" value='BCA' id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  BCA
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="radio" name="deparment" value='MCA' id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  MCA
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="radio" name="deparment" value='BBA' id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  BBA
                </label>
              </div>
              {errors.deparment && touched.deparment ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.deparment}</span> : null}
            </div>

            <div className='col-md-6'>
              <label htmlFor="inputCourse" className='fw-bold'>Course</label>
              <div className="form-check ">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} name='course' value='C' type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  C Languague
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="checkbox" name='couse' value='C++' defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  C++ Languague
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="checkbox" name='couse' value='Javascript' defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Javascript
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input border-black" onChange={handleChange} onBlur={handleBlur} type="checkbox" name='couse' value='Java' defaultValue id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Java
                </label>
              </div>
              {errors.course && touched.course ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.course}</span> : null}
            </div>

            <div className="form-group col-md-6 fw-bold mt-3">
              <label htmlFor="inputState">Blood Group</label>
              <select id="inputState" onChange={handleChange} onBlur={handleBlur} className="form-control border-black" name='blood'>
                <option selected>Select...</option>
                <option value='A Positive'>A Positive</option>
                <option value='A Nagetive'>A Nagetive</option>
                <option value='B Positive'>B Positive</option>
                <option value='B Nagetive'>B nagetive</option>
              </select>
              {errors.blood && touched.blood ? <span className='text-danger p-1 border rounded-3 border-danger'>{errors.blood}</span> : null}
            </div>

            <div className='col mt-3'>
              <button type="submit" className="btn btn-primary" style={{marginLeft:"32%"}}>Submit</button>
              <button type="reset" className="btn btn-primary ms-3">Reset</button>
            </div>
          </form>
        </div>
      </Container>

    </div>
  )
}

export default App;