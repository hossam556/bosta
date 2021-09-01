import React from 'react'
import './Footer.scss'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_content1'>
                <div className='footer_left'>
                    <div className='footer_bosta'>
                        <h4>عن بوسطة</h4>
                        <p>كلم المبيعات</p>
                        <p>الشروط والأحكام</p>
                        <p>سياسة الخصوصية</p>
                    </div>
                    <div className='footer_sup'>
                        <h4>الشحنات</h4>
                        <p>التسعير</p>
                        <p>تتبع شحنتك</p>
                    </div>
                </div>
                <div className='footer_right'>
                   <img className='bosta_img' src='https://bosta.co/wp-content/uploads/2019/08/bosta_logo_ar_red.svg'/><br/>
                   <p>help@bosta.co</p>
                   <div className='icon'>
                      <a  style={{marginRight:'5px'}}><AiOutlineTwitter style={{color:'black', fontSize:'12px'}}/></a> 
                      <a><FaFacebookF style={{color:'black', fontSize:'12px'}}/></a> 
                   </div>
                </div>
            </div>
            <div className='footer_content2'>
                <span>Copyright ©2019 bosta.co</span>
            </div>
        </div>
    )
}

export default Footer
