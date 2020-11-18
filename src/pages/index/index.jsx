import React, { PureComponent } from 'react'
import T from '../../i18n/translate'
import Counter from '../counter/counter'
import Headers from '../header/headers'

export class Index extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Headers />
                <Counter />
                <p className="text-center pt-5">
                    {T('welcome')}
                </p>
            </React.Fragment>
        ) 
    }
}

export default Index
