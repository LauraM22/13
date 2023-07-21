import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Step3 } from './Step3';
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
    },
    button: {
        backgroundColor: 'blue',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '1rem',
    }, 
    containerForm: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    label : {
        display: 'block',
        marginBottom: '0.5rem',
    },
}

interface Props {
    back?: () => void;
    data?: any;
}

export const Step2: React.FC<Props> = ({back, data}) => {

    const [step, setStep] = React.useState(1);

    const [dataFull, setData] = React.useState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        companyName: '',
        contactNumber: '',
    });
      const validationSchema = Yup.object({
        companyName: Yup.string().required('Required'),
        contactNumber: Yup.string().required('Required'),
      });
    
      const handleSubmit = (values: typeof dataFull) => {
        // Aquí puedes manejar el envío de los datos del formulario
        console.log(values);
        setData(
        {...dataFull,
        companyName: values.companyName,
        contactNumber: values.contactNumber,
        });
        setStep(2);
      };
      const backTwo = () => {
        setStep(1);
        };
  return (
    <>
    {
        step === 1 ?
        (<Formik initialValues={dataFull} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={styles.containerForm}>
            <div>
                <label style={styles.label} htmlFor="companyName">Company name:</label>
                <Field type="text" id="companyName" name="companyName" />
                <ErrorMessage name="companyName" component="div" />
            </div>
            <div>
                <label style={styles.label} htmlFor="contactNumber">Contact number:</label>
                <Field type="number" id="contactNumber" name="contactNumber" />
                <ErrorMessage name="contactNumber" component="div" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={back} style={styles.button}>Back</button>
                <button type="submit" style={styles.button}>Next</button>
            </div>
            </Form>
        </Formik>) : (<Step3 dataFull={dataFull} back={backTwo}/>)
    }
    </>
  )
}
