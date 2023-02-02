/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Patient.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 1st February 2023
 */

import React from 'react';

export default function Patient({patient, setPatient}) {

const {patientName, owner, symptoms, date, email} = patient;

  return (
    <div className='bg-white shadow-md rounded-lg p-10 px-5 m-16 text-start'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Name: {''}
        <span className='font-normal normal-case'> {patientName}
        </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Owner: {''}
        <span className='font-normal normal-case'> {owner}
        </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className='font-normal normal-case'> {email}
        </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Discharged patient: {''}
        <span className='font-normal normal-case'> {date}
        </span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Symptoms: {''}
        <span className='font-normal normal-case'> {symptoms}
        </span>
    </p>

    <div className='flex justify-around mt-10'>
        <button
        onClick={() => setPatient(patient)}
            type='button'
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold uppercase text-white rounded-md'>
                Edit
            </button>
        <button type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 font-bold uppercase text-white rounded-md'>Delete</button>
    </div>
</div>
  )
}
