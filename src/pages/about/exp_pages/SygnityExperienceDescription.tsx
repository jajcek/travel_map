import React from 'react';

import ExperienceDescription from './ExperienceDescription';

class OcadoExperienceDescription extends React.Component<{}, {}> {
    render() {
        return (
            <ExperienceDescription
                position="Trainee"
                companyName="Sygnity S.A."
                period="July 2012 - August 2012"
                technologies="Android, Robotium"
            >
                <p>
                    Two-months trainee. Our team was developing a mobile application for a salesman.
                    During this time I was fixing bugs in existing software and programming tests with Robotium framework.
                </p>
            </ExperienceDescription>
        );
    }
}

export default OcadoExperienceDescription;