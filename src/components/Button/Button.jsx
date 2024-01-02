import PropTypes from 'prop-types';
import classes from './Button.module.css';

//console.log(classes)

export default function Button({children, isActive, ...props}) {
    //console.log('Button' ,isActive)
    return (

        <button
        {...props}
         className={
            isActive ? `${classes.button} ${classes.active}` : classes.button
        }>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}


