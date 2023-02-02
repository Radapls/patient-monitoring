/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Form.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 1st February 2023
 */

import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({patients, setPatients, patient, setPatient}) {

    const [patientName, setPatientName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptoms, setSymptoms] = useState('');

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setPatientName(patient.patientName)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptoms(patient.symptoms)
        }
    }, [patient])


    const uniqueId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return  date + random
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const patientOrder = {
        patientName,
        owner,
        email,
        date,
        symptoms
        }

        if (patient.id) {

        // Edit register

        patientOrder.id = patient.id

        const editPatient = patients.map(patientState => patientState.id === patient.id ? patientOrder : patientState)

        setPatients(editPatient)
        setPatient({})

        } else {

        // New register
        // Add the patient with a copy of the object

        patientOrder.id = uniqueId()
        setPatients([...patients, patientOrder])

        }

        // Restart the form

        setPatientName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')

    }



  return (
    <div  className='text-center md:w-1/2 lg:3/5'>
        <h2 className='font-bold text-3xl p-3'>
        Patient follow-up
        </h2>

        <p className='text-lg mt-5 mb-5'>Add patient & {''}
        <span className='text-indigo-600 font-bold' >Admin</span>
        </p>

        <form
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-md p-10 px-5 m-16 text-start'>

            <div className='mb-6'>
                <label
                    htmlFor="name"
                    className='block text-gray-700 uppercase font-bold'>
                        Patient
                </label>

                    <input
                        className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400'
                        type="text"
                        id="name"
                        placeholder="Patient name"
                        value={patientName}
                        onChange={(e)=> setPatientName(e.target.value)}
                        required/>
            </div>
            <div className='mb-6'>
                <label
                    htmlFor="owner"
                    className='block text-gray-700 uppercase font-bold'>
                        Owner
                </label>

                    <input
                        className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400'
                        type="text"
                        id="owner"
                        placeholder="Owner name"
                        value={owner}
                        onChange={(e)=> setOwner(e.target.value)}
                        required/>
            </div>
            <div className='mb-6'>
                <label
                    htmlFor="email"
                    className='block text-gray-700 uppercase font-bold'>
                        Email
                </label>

                    <input
                        className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400'
                        type="email"
                        id="email"
                        placeholder="Contact email of the owner"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required/>
            </div>
            <div className='mb-6'>
                <label
                    htmlFor="discharged"
                    className='block text-gray-700 uppercase font-bold'>
                        Discharged patient
                </label>

                    <input
                        className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400'
                        type="date"
                        id="discharged"
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        required/>
            </div>
            <div className='mb-6'>
                <label
                    htmlFor="symptoms"
                    className='block text-gray-700 uppercase font-bold'>
                        Symptoms
                </label>

                <textarea
                    className='border-2 w-full rounded-md p-2 mt-2 placeholder-gray-400'
                    id="symptoms"
                    placeholder="Describe the symptoms"
                    value={symptoms}
                    onChange={(e)=> setSymptoms(e.target.value)}
                    required/>
            </div>

            <input
                type="submit"
                value={patient.id ? "Edit patient" : "Add patient"}
                className='bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-lg hover:bg-indigo-700 cursor-pointer transition-all'/>
        </form>

    </div>
  )
}
