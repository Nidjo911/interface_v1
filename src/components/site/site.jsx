'use client'

import styles from './site.module.css'

import React from 'react'

import { Fragment } from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { EventHandler } from 'react'

export default function Demo() {

    const [img, setImg] = useState("");

    /*     const changeImage = (event) => {
            const clickedImageSrc = event.target.src;
            setImg(clickedImageSrc);
        }; */

    return (
        <Fragment>

            <div className={styles.site}></div>

        </Fragment>
    );

}