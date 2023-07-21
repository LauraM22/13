import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Step4 } from './Step4';
interface Props {
    back?: () => void;
    dataFull?: any;
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
export const Step3: React.FC<Props> = ({dataFull, back}) => {
    const [step, setStep] = React.useState(1);

    const [data, setData] = React.useState({
        firstName: dataFull.firstName,
        lastName: dataFull.lastName,
        email: dataFull.email,
        companyName: dataFull.companyName,
        contactNumber: dataFull.contactNumber,
        contactName: '',
        contact_Number: '',
    });

      const validationSchema = Yup.object({
        contactName: Yup.string().required('Required'),
        contact_Number: Yup.string().required('Required'),
      });
    
      const handleSubmit = (values: typeof data) => {
        // Aquí puedes manejar el envío de los datos del formulario
        console.log(values);
        setData(
        {...data,
            contactName: values.contactName,
            contact_Number: values.contact_Number,
        });
        setStep(2);
      };
      const backThree = () => {
        setStep(1);
        };
  return (
    <>
    {
        step === 1 ?
        (<Formik initialValues={data} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form style={styles.containerForm}>
            <div>
                <label style={styles.label} htmlFor="contactName">Contact name:</label>
                <Field type="text" id="contactName" name="contactName" />
                <ErrorMessage name="contactName" component="div" />
            </div>
            <div>
                <label style={styles.label} htmlFor="contact_Number">Contact number:</label>
                <Field type="number" id="contact_Number" name="contact_Number" />
                <ErrorMessage name="contact_Number" component="div" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={back} style={styles.button}>Back</button>
                <button type="submit" style={styles.button}>Next</button>
            </div>
            </Form>
        </Formik>) : (<Step4 data={data} back={backThree}/>)
    }
    </>
  )
}

