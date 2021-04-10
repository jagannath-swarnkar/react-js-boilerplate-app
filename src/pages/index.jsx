import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
// import GalleryComponent from '../../components/gallery'
import Layout from '../components/Layout'
// import T from '../../i18n/translate'

export class Index extends PureComponent {
    render() {
        this.props.history.replace('/glance')
        return (
            <React.Fragment>
                <Layout>
                    
                </Layout>
            </React.Fragment>
        ) 
    }
}

export default withRouter(Index)
