/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file PatientList.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 1st February 2023
 */

import Patient from './Patient';

export default function PatientList({patients, setPatient}) {

  return (
    <div  className='text-center md:w-1/2 lg:3/5 h-screen sm:overflow-y-scroll'>

        {patients && patients.length ? (
            <>
                <h2 className='font-bold text-3xl p-3'>
                Patient List
                </h2>
                <p className='text-lg mt-5 mb-5'>Admin your {''}
                <span className='text-indigo-600 font-bold'>Patients and appointments</span>
                </p>

                {patients.map(patient => {
                return (
                <Patient
                patient={patient}
                key={patient.id}
                setPatient={setPatient}
                />
                )
                })}
            </>
        ) : (
            <>
                <h2 className='font-bold text-3xl p-3'>
                There are no patients
                </h2>

                <p className='text-lg mt-5 mb-5'>Start adding patients {''}
                <span className='text-indigo-600 font-bold'>and there appears</span>
                </p>
            </>
        )}



    </div>
  )
}
