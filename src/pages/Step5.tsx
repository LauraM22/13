import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Summary } from './Summary';
interface Props {
    back?: () => void;
    data?: any;
}
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
export const Step5 : React.FC<Props> = ({back, data}) => {
    const [step, setStep] = React.useState(1);

    const [dataFull, setData] = React.useState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        companyName: data.companyName,
        contactNumber: data.contactNumber,
        contactName: data.contactName,
        contact_Number: data.contact_Number,
        placeOfResidence: data.placeOfResidence,
        address: data.address,
        observations: '',
    });
    
      const validationSchema = Yup.object({
        placeOfResidence: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
      });
    
      const handleSubmit = (values: typeof dataFull) => {
        // Aquí puedes manejar el envío de los datos del formulario
        console.log(values);
        setData(
        {...data,
            observations: values.observations,
        });
        setStep(2);
      };
  return (
    <>
    {
        step === 1 ?
        (<Formik initialValues={dataFull} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={styles.containerForm}>
            <div>
                <label style={styles.label} htmlFor="observations">Observations:</label>
                <Field type="text" id="observations" name="observations" />
                <ErrorMessage name="observations" component="div" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={back} style={styles.button}>Back</button>
                <button type="submit" style={styles.button}>Next</button>
            </div>
            </Form>
        </Formik>) : (<Summary dataFull={dataFull}/>)
    }
    </>
  )
}
