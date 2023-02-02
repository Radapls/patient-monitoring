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

import { useState } from "react";
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {

    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

  return (
    <div className='container sm:mx-2 mx-auto mt-6'>

        <Header/>

        <div className='mt-10 sm:flex'>

            <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            />

            <PatientList
            patients={patients}
            setPatient={setPatient}
            />

        </div>

    </div>
  )
}

export default App
