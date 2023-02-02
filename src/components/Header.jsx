/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Header.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 1st February 2023
 */

import React from 'react'
import logo from '../assets/book.png'

export default function Header() {
  return (
    <div className='flex items-center justify-center mx-auto'>
        <img src={logo} alt="_blank" draggable="false"/>
        <h1 className='md:text-4xl font-black p-2 sm:text-3xl'>Patient Monitoring</h1>
    </div>
  )
}
