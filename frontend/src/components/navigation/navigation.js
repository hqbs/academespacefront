import React from 'react'
import { Link } from 'react-router-dom'

function Navigation ({ isAuthenticated, signout }) {
  function onSignout () {
    signout()
  }

  return (
    <div>
      <ul className='navigation-ul'>
        <li className='navigation-li'>
          <Link className='logo' to='/'>
            Academe<span style={{ color: '#5b5dee' }}>Space</span>
          </Link>
        </li>
        {isAuthenticated ? (
          <li
            className='navigation-li'
            style={{ float: 'right', marginRight: '10px' }}
          >
            <button style={{ margin: '12px 4px' }} onClick={onSignout}>
              Signout
            </button>
          </li>
        ) : (
          <div>
            <li
              className='navigation-li'
              style={{ float: 'right', marginRight: '10px' }}
            >
              <Link className='navigation-li' to='/login'>
                <button style={{ margin: '12px 4px' }} className='button-alt'>
                  Login
                </button>
              </Link>
            </li>
            <li className='navigation-li' style={{ float: 'right' }}>
              <Link className='nav-button' to='/signup'>
                Create Account
              </Link>
            </li>
          </div>
        )}

        <div className='mobile-nav'>
          <li className='navigation-li' style={{ float: 'right' }}>
            <Link className='nav-button' to='/contact'>
              Contact Us
            </Link>
          </li>
          {/* <li className='navigation-li' style={{ float: 'right' }}>
            <Link className='nav-button' to='/documentation'>
              Documentation
            </Link>
          </li> */}

          {/* <li className='navigation-li' style={{ float: 'right' }}>
            <Link className='nav-button' to='/documentation'>
              Documentation
            </Link>
          </li> */}

          {isAuthenticated ? (
            <div>
              <li className='navigation-li' style={{ float: 'right' }}>
                <Link className='nav-button' to='/create'>
                  Create Classroom
                </Link>
              </li>
              <li className='navigation-li' style={{ float: 'right' }}>
                <Link className='nav-button' to='/'>
                  My Servers
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className='navigation-li' style={{ float: 'right' }}>
                <Link className='nav-button' to='/about'>
                  About
                </Link>
              </li>
            </div>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navigation
