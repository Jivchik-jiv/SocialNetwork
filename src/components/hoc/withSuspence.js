import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';




export const withSuspence = (Component) => {
   

    return (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
             </Suspense>
        )}
    
}