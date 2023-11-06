import React, { useState, useEffect } from 'react'
import classnames from 'classnames';

import Link from '@mui/material/Link';

import styles from './styles.module.scss'

const MIN_WIDTH = 768;

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initial window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between bg-white px-8 py-6">
        {
          width > MIN_WIDTH ? (
            <div className="flex flex-row w-full justify-center items-center">
              <Link href="/" color="#1a659e" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div className={classnames(styles.navItem, "text-lg font-bold")}>Home</div>
              </Link>
              <Link href="/contact" color="#1a659e" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div className={classnames(styles.navItem, "text-lg font-bold")}>Contact</div>
              </Link>
              {/* <Link href="/publications" color="#1a659e" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div className={classnames(styles.navItem, "text-lg font-bold")}>Publications</div>
              </Link> */}
              <Link href="/projects" color="#1a659e" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div className={classnames(styles.navItem, "text-lg font-bold")}>Projects</div>
              </Link>
            </div>
          ) : (
            <div>
              <div className={navActive ? classnames(styles.closer): classnames(styles.nav)} onClick={() => {setNavActive(!navActive)}}>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
              </div>
            </div>
          )
        }
      </div>
      <div className={navActive ? classnames(styles.navOverlay) : classnames(styles.navOverlay_closed)}>
        <div className="flex flex-col gap-y-10 items-center">
          <Link href="/" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">Home</div>
          </Link>
          <Link href="/contact" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">Contact</div>
          </Link>
          {/* <Link href="/publications" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
           <div className="text-2xl font-bold">Publications</div>
          </Link> */}
          <Link href="/projects" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
           <div className="text-2xl font-bold">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar