import React from 'react'
import Card from '@material-ui/core/Card';
import './DetailsCard.scss'

const DetailsCard = () => {
    return (
        <div style={{width:'68%', textAlign:'right'}}>
        <p>تفاصيل الشحنة</p>
        <Card className='DetailsCard'>
            <table>
                <tr className='table_title'>
                    <th>تفاصيل</th>
                    <th>الوقت</th>
                    <th>التاريخ</th>
                    <th>الفرع</th>
                </tr>
                <tr>
                    <td>تم انشاء الشحنة</td>
                    <td>12.30 pm</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                </tr>
                <tr>
                    <td>تم استلام الشحنة من التاجر</td>
                    <td>12.30 pm</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                </tr>
                <tr>
                    <td>الشحنة خرجت للتسليم</td>
                    <td>12.30 pm</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                </tr>
                <tr>
                    <td>لم يتم تسليم الشحنة</td>
                    <td>12.30 pm</td>
                    <td>05/04/2020</td>
                    <td>مدينة نصر</td>
                </tr>
            </table>
        </Card>
        </div>
    )
}

export default DetailsCard
