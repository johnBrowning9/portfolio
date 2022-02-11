import React from 'react';

export const AImage = (source: string):JSX.Element => {

    return (
        <div>
            <img src={source} alt="hi" style={{height:'180px', marginBottom:'5px', marginTop:'5px'}}/>
        </div>
    )
  }