/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file App.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 1st February 2023
 */

import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {

    const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
    const [patient, setPatient] = useState({});

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify(patients))
    }, [patients])

    const deletePatient = id => {
        const UpdatedPatients = patients.filter( patient => patient.id !== id)
        setPatients(UpdatedPatients)
    }

  return (
    <div className='container mx-auto mt-6'>

        <Header/>

        <div className='mt-10 md:flex'>

            <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
            />

            <PatientList
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
            />

        </div>

    </div>
  )
}

export default App
