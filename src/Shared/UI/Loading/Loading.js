import React from 'react';
import classes from './Loading.scss';
import Backdrop from '../Backdrop/Backdrop';

const Loading = props => (
    <Backdrop>
        <div className={classes.ImgContainer}>
        </div>
    </Backdrop>
)
export default Loading;