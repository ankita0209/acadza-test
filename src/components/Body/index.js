import React, {useRef, useEffect, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Layout/style';
import { Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { ArrowDropDown, StarTwoTone } from '@material-ui/icons';
import Chart from '../Chart';

const bitcoinIcon = (<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75 37.5C75 47.5166 71.0991 56.9341 64.0166 64.0166C56.9341 71.0991 47.5166 75 37.5 75C27.4834 75 18.0659 71.0991 10.9834 64.0166C3.90088 56.9341 0 47.5166 0 37.5C0 27.4834 3.90088 18.0659 10.9834 10.9834C18.0659 3.90088 27.4834 0 37.5 0C47.5166 0 56.9341 3.90088 64.0166 10.9834C71.0991 18.0659 75 27.4834 75 37.5Z" fill="#FEE158"/>
                        <path d="M75 37.5C75 47.5166 71.0991 56.9341 64.0166 64.0166C56.9341 71.0991 47.5166 75 37.5 75V0C47.5166 0 56.9341 3.90088 64.0166 10.9834C71.0991 18.0659 75 27.4834 75 37.5Z" fill="#FFB528"/>
                        <path d="M37.5 67.0898C53.842 67.0898 67.0898 53.842 67.0898 37.5C67.0898 21.158 53.842 7.91016 37.5 7.91016C21.158 7.91016 7.91016 21.158 7.91016 37.5C7.91016 53.842 21.158 67.0898 37.5 67.0898Z" fill="#FFB528"/>
                        <path d="M67.0898 37.5C67.0898 53.8154 53.8154 67.0898 37.5 67.0898V7.91016C53.8154 7.91016 67.0898 21.1846 67.0898 37.5Z" fill="#FE8C01"/>
                        <path d="M48.7426 37.043C48.2505 36.5508 47.7143 36.1201 47.1445 35.751C48.4907 34.2407 49.3125 32.2515 49.3125 30.0718C49.3125 27.7983 48.4218 25.6538 46.8061 24.0381C45.1889 22.4209 43.0459 21.5303 40.771 21.5303H39.6972V17.2852H35.3027V21.5303H25.6289V25.9248H29.2178V49.0752H25.6289V53.4697H35.3027V57.7148H39.6972V53.4697H41.9428C47.25 53.4697 51.5683 49.1514 51.5683 43.8442C51.5683 41.2808 50.5649 38.8652 48.7426 37.043ZM33.6123 25.9248H40.771C41.8725 25.9248 42.9111 26.3584 43.6977 27.145C44.4843 27.9316 44.9179 28.9717 44.9179 30.0718C44.9179 32.3364 43.0942 34.1821 40.8384 34.2173H33.6123V25.9248ZM41.9428 49.0752H33.6123V38.6147L37.5 38.6133L41.9428 38.6118C43.3315 38.6118 44.644 39.1582 45.6357 40.1514C46.6274 41.1431 47.1738 42.4541 47.1738 43.8442C47.1738 46.7285 44.8271 49.0752 41.9428 49.0752Z" fill="#FEE158"/>
                        <path d="M51.5684 43.8442C51.5684 49.1514 47.25 53.4697 41.9429 53.4697H39.6973V57.7148H37.5V49.0752H41.9429C44.8271 49.0752 47.1738 46.7285 47.1738 43.8442C47.1738 42.4541 46.6274 41.1431 45.6357 40.1514C44.644 39.1582 43.3315 38.6118 41.9429 38.6118L37.5 38.6133V34.2173H40.8384C43.0942 34.1821 44.918 32.3364 44.918 30.0718C44.918 28.9717 44.4844 27.9316 43.6978 27.145C42.9111 26.3584 41.8726 25.9248 40.771 25.9248H37.5V17.2852H39.6973V21.5303H40.771C43.0459 21.5303 45.189 22.4209 46.8062 24.0381C48.4219 25.6538 49.3125 27.7983 49.3125 30.0718C49.3125 32.2515 48.4907 34.2407 47.1445 35.751C47.7144 36.1201 48.2505 36.5508 48.7427 37.043C50.5649 38.8652 51.5684 41.2808 51.5684 43.8442Z" fill="#FFB528"/>
                    </svg>)

const Body = (props) => {
    const { classes } = props;
    const [active, setActive] = useState(0);
    const wrapperRef1 = useRef();
    const wrapperRef2 = useRef();

    const handleClickOutside = (e) => {
        if(wrapperRef1.current.contains(e.target)){ return }
        else if( wrapperRef2.current.contains(e.target)){ return }
        document.removeEventListener('mousedown', handleClickOutside, false)
        setActive(0);
    }

    const handleDropdown = (value) => {
        document.addEventListener('mousedown', handleClickOutside, false)
        setActive(value);
    }
    
    return (
        <React.Fragment>
            <div className={classes.subHeader}>
                <div className={classes.leftSubHead}>
                    {bitcoinIcon}
                    <Typography noWrap>{'Real-time bitcoin graph'}</Typography>
                </div>
                <div className={classes.rightSubHead}>
                    <span className={classes.drowdown}>
                        <Button className={classes.dropdown1} onClick={()=>handleDropdown(1)}>Commodity 1<ArrowDropDown className={classes.rightIcon} /></Button>
                        <span ref={wrapperRef1} className={clsx(classes.options, classes.options1, active === 1 ? classes.show : classes.hide)}>
                            {[1,2,3,4,5,6].map((item, i)=><p key={i}>{'option 1'}</p>)}
                        </span>
                    </span>
                    <span className={classes.drowdown}>
                        <Button className={classes.dropdown2} onClick={()=>handleDropdown(2)}>Commodity 2<ArrowDropDown className={classes.rightIcon} /></Button>
                        <span ref={wrapperRef2} className={clsx(classes.options, classes.options2, active === 2 ? classes.show : classes.hide)}>
                            {[1,2,3,4,5,6].map((item, i)=><p key={i}>{'option 2'}</p>)}
                        </span>
                    </span>
                </div>
            </div>
            <Chart />
        </React.Fragment>
    )
}

export default withStyles(styles, { withTheme: true })(Body);