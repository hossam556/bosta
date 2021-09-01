import React ,{useState , useDispatch} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './TrackSearch.scss'
import { BiSearch } from 'react-icons/bi';
import {withRouter} from 'react-router-dom'
import {searchHandler} from '../../store/actions'
import {connect} from 'react-redux'

const TrackSearch = (props) => {

    const [value , setValue] = useState('');


    const inputHandler = (e) => {
        setValue(e.target.value)
    } 

    const searchHandler =async ()=>{
        props.onSearchHandler(value)

        props.history.push('/Details');
        }

    return (
        <Card className='TrackSearch_card'>
            <CardContent  style={{textAlign:'right'}}>
               <p>الرجاء إدخال رقم الشحنة وتتبع الشحنة الخاصة بك</p>
               <p className='Track_p2'>تتبع شحنة أخرى</p>
               <div>
                   <span onClick={searchHandler} className='search'><BiSearch style={{color:'white', fontSize:'18px'}}/></span>
                   <input type='text' onChange={inputHandler} placeholder='تتبع أي'/>
               </div>
            </CardContent> 
        </Card>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      
        onSearchHandler : (value)=> dispatch(searchHandler(value)),
    }
}

export default connect(null,mapDispatchToProps)(withRouter(TrackSearch))
