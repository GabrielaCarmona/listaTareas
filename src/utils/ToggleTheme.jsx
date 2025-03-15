import React, { useEffect, useState } from 'react'
import { AiFillSun, AiFillMoon } from "react-icons/ai";
import '../styles/toggleTheme.css';

export const ToggleTheme = () => {
    const [isActive, setisActive] = useState(false);

    useEffect(() => {
        if ((localStorage.getItem('theme')) && (localStorage.getItem('theme') === 'dark')) {
            setisActive(true);
        } else {
            localStorage.setItem('theme', 'light');
            setisActive(false);
        }
    }, []);

    const handleTheme = () => {
        let theme = localStorage.getItem('theme');
        if (theme) {
            if (theme === 'light') {
                localStorage.setItem('theme', 'dark');
                setisActive(true);
                document.body.setAttribute('data-theme', 'dark');
            } else if (theme === 'dark') {
                localStorage.setItem('theme', 'light');
                setisActive(false);
                document.body.removeAttribute('data-theme', 'dark');
            }
        } else {
            localStorage.setItem('theme', 'dark');
            setisActive(true);
        }
    }


    return (
        <>
            <div className='theme'>
                <button type='button' className={(isActive) ? 'switch-theme active' : 'switch-theme'} onClick={handleTheme}>
                    <span><AiFillSun /></span>
                    <span><AiFillMoon /></span>
                </button>
            </div>
        </>
    )
}
