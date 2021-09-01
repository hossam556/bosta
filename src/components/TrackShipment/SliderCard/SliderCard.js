import React from 'react'
import Card from '@material-ui/core/Card';
import './SliderCard.scss'
import {connect} from 'react-redux'

const SliderCard = (props) => {
    return (
    <Card className='sliderCard'>
        <div className='sliderCard_content1'>
            <div>
                <span className='sliderCard_title'>موعد التسليم خلال</span><br/>
                <span className='sliderCard_title2'>3 يناير 2020</span>
            </div>
            <div>
                <span className='sliderCard_title'>اسم التاجر</span><br/>
                <span className='sliderCard_title2'>souq.com</span>
            </div>
            <div>
                <span className='sliderCard_title'>اخر تحديث</span><br/>
                <span className='sliderCard_title2'>الاثنين 06/04/2020</span>
            </div>
            <div>
                <span className='sliderCard_title'>رقم الشحنة {props.charge.TrackingNumber}</span><br/>
                <span style={{color:'#ff0000', fontWeight:'bold'}}>تم الغاء الشحنة</span>
            </div>
        </div>
        <div className='sliderCard_content2'>
            ...
        </div>
    </Card>
    )
}

const mapStateToProps = state => {
    return {
       charge :state.charge,
    }
} ;

export default connect(mapStateToProps)(SliderCard)
