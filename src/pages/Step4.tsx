import React from 'react'
import { Step5 } from './Step5';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
export const Step4: React.FC<Props> = ({back, data}) => {
    const [step, setStep] = React.useState(1);

    const [dataFull, setData] = React.useState({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        companyName: data.companyName,
        contactNumber: data.contactNumber,
        contactName: data.contactName,
        contact_Number: data.contact_Number,
        placeOfResidence: '',
        address: '',
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
            placeOfResidence: values.placeOfResidence,
            address: values.contact_Number,
        });
        setStep(2);
      };
      const backFour = () => {
        setStep(1);
        };
  return (
    <>
    {
        step === 1 ?
        (<Formik initialValues={dataFull} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={styles.containerForm}>
            <div>
                <label style={styles.label} htmlFor="placeOfResidence">place of residence:</label>
                <Field type="text" id="placeOfResidence" name="placeOfResidence" />
                <ErrorMessage name="placeOfResidence" component="div" />
            </div>
            <div>
                <label style={styles.label} htmlFor="address">Address:</label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage name="address" component="div" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={back} style={styles.button}>Back</button>
                <button type="submit" style={styles.button}>Next</button>
            </div>
            </Form>
        </Formik>) : (<Step5 data={dataFull} back={backFour}/>)
    }
    </>
  )
}
