import React from 'react';

import ExperienceDescription from './ExperienceDescription';

class OcadoExperienceDescription extends React.Component<{}, {}> {
    render() {
        return (
            <ExperienceDescription
                position="Senior Software Developer"
                companyName="Ocado Technology"
                period="March 2017 - now"
                technologies="Java, Spring, JS (React), AWS, BigQuery, PostgreSQL, Netflix Hollow"
            >
                <p>
                    During this time I have worked for 3 projects - communication systems
                    (tools for setting up retailer's messages to customers), assortments (storing retailer's offer)
                    and pricing (recalculating orders after checkout). Every project had different challenges and technologies used
                    like frontend development, large data storage with fast querying or complicated domain, so
                    this have let me extend my competences on different levels.
                </p>
            </ExperienceDescription>
        );
    }
}

export default OcadoExperienceDescription;