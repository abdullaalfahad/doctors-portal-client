import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer class="px-10 pt-16" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className='footer'>
                <div className='justify-self-center'>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div className='justify-self-center'>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='justify-self-center'>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center pt-16 lg:pt-24 pb-8'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;