import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
    return (
        <div>
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
    );
};

export default LoaderSpinner;