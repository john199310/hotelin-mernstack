import React from 'react';
import {LoaderWrapper, LoaderImage} from './style';

export default function Loader() {
    return (
        <div className='container'>
            <LoaderWrapper>
                <LoaderImage src={process.env.PUBLIC_URL + '/assets/loader.gif'} alt='loader' />
            </LoaderWrapper>
        </div>
    )
}
