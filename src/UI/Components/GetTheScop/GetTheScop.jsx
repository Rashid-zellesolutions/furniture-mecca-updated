import React from 'react'
import './GetTheScop.css';
import banner from '../../../Assets/global-images/flyre-image.jpg'
import { Link } from 'react-router-dom';

const GetTheScop = () => {
  return (
    <>
      <div className='get-the-scop-main-container'>
        <div className='get-the-scop-form-container'>
          <div className='get-the-scop-form'>
              <h3>Get the scoop</h3>
              <span className='get-the-scop-offers'>
                  <Link> Discounts</Link> | 
                  <Link> Offers</Link> |
                  <Link> Best Price</Link>
              </span>
              <div className='get-the-scop-input'>
                  <input type='text' placeholder='Email Address' />
                  <button><Link>Sign me up</Link></button>
              </div>
              <p>By Signing Up you agree to our <Link to={'/terms-condition'} className='desktop-get-the-scoop-terms'> Terms of Use </Link> and <Link to={'/privacy-policy'} className='desktop-get-the-scoop-terms'> Privacy Policy </Link></p>
          </div>
        </div>
        <div className='get-the-scop-banner'>
            <h3>Furniture Mecca Promotions</h3>
            <p>Get Exclusive Promotions For The Year 2024</p>
            <button> <Link to={`https://flyer.myfurnituremecca.com/`} target='_blank'> Click To See FLyer </Link> </button>
        </div>
      </div>
      <div className='mobile-view-scop-main-container'>
        <div className='mobile-view-get0the-scoop-overlay'>
            <div className='mobile-view-get-scoop-heading'>
                <h3>Get The Scoop</h3>
                <span>
                  <Link>Offer</Link> |
                  <Link>Discounts</Link> |
                  <Link>Best Prices</Link>
                </span>
            </div>
            <div className='mobile-view-get-scoop-input-and-button'>
                <input type='text' placeholder='Email' />
                <button>
                  Sign me up
                </button>
            </div>
            <p className='mobile-view-conditions'>By signing up, you agree to our <Link to={'/privacy-policy'} className='mobile-view-get-the-scoop-conditions'> Privacy Policy </Link> and <Link to={'/terms-condition'} className='mobile-view-get-the-scoop-conditions'> Terms of Use </Link>.</p>
            <div className='mobile-view-flyre-view'>
                <h3>Furniture Mecca Promotions</h3>
                <p>Get exclusive promotions for the year 2024</p>
                <button>
                  <a href='https://flyer.myfurnituremecca.com/'>
                    Click to see flyer
                  </a>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default GetTheScop
