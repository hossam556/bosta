import React from 'react'
import Card from '@material-ui/core/Card';
import './AdressCard.scss'

const AddressCard = () => {
    return (
        <div style={{width:'30%', textAlign:'right'}}>
            <p>عنوان التسليم</p>
            <Card className='AddressCard1'>
               <p>امبابة شارع طلعت حرب مدينة العمال بجانب البرنس منزل 17  بلوك 22</p>
            </Card>
            <Card className='AddressCard2'>
               <p>هل يوجد مشكلة في شحنتك؟</p>
               <a>ابلاغ عن مشكلة</a>
            </Card>        
        </div>
    )
}

export default AddressCard
