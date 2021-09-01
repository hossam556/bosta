import React ,{useState , useEffect} from 'react'
import './Nav.scss'
import bosta from '../../../images/bosta.svg'
import { FiMenu } from 'react-icons/fi';
import Card from '@material-ui/core/Card';

const Nav = () => {

    const [show ,handleShow] = useState(false) ;
    const [showDrawer ,setShowDrawer] = useState(false) ;

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 20){
                handleShow(true)
            }else handleShow(false) 
        });
    })

    return (
        <div className={`nav ${ show && 'scrollNav'}`}>
            <div className='nav_container'>
                <div className='nav_content1'>
                    <ul>
                        <li className='eng' style={{color:'#ff0000 '}}><a>ENG</a></li>
                        <li><a>تسجيل الدخول</a></li>
                        <li><a>تتبع شحنتك</a></li>
                    </ul>
                </div>
                <div className='nav_content2'>
                    <ul>
                        <li><a>كلم المبيعات</a></li>
                        <li><a>الأسعار</a></li>
                        <li><a>الرئيسية</a></li>
                    </ul>
                    <div>
                        <img className='bosta_img' src={bosta}/>
                    </div>
                </div>
            </div>
            <div className='mobile_nav'>
                <FiMenu onClick={() => setShowDrawer(!showDrawer)} style={{fontSize:'24px' , color:'red', cursor:'pointer'}}/>
               <div>
                  <img className='bosta_img' src={bosta}/>
               </div>
            </div>
            {showDrawer && <Card className='mobile_drawer'>
                <p>الرئيسية</p>
                <p>الأسعار</p>
                <p>كلم المبيعات</p>
                <p>تتبع شحنتك</p>
            </Card>}
        </div>
    )
}

export default Nav
