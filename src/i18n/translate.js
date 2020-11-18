import React from 'react'
import { FormattedMessage } from 'react-intl'

const T = (id, value={}) => {
    return (
        <FormattedMessage
            id={id}
            values={{...value}}
        />
    )
}


export default T;