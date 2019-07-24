import React from 'react';
import { ServiceConsumer } from '../context/serviceContext';

const withService = () => (Wrapped) => {
    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (Service) => {
                        return <Wrapped {...props} service={Service} />
                    }
                }
            </ServiceConsumer>
        )
    }
}

export default withService;
