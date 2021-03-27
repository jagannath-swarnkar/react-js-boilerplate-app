import React, { PureComponent } from 'react'
import GalleryComponent from '../../components/gallery'
import Layout from '../../components/Layout'
// import T from '../../i18n/translate'

export class Index extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <GalleryComponent />
                </Layout>
            </React.Fragment>
        ) 
    }
}

export default Index
