import React from 'react';

import ExperienceDescription from './ExperienceDescription';

class OcadoExperienceDescription extends React.Component<{}, {}> {
    render() {
        return (
            <ExperienceDescription
                position="Trainee"
                companyName="PGS Software S.A."
                period="October 2012"
                technologies="Java EE, Spring Roo, Hibernate, Vaadin, Slt4j, Maven, Eclipse, SVN"
            >
                <p>
                    That was just a one-month trainee. During the trainee I was developing a Java EE application for
                    managing Chinese provinces and regions. My responsibility was to present and operate on data obtained from PostgreSQL.
                </p>
                <p>
                    I also created a secondary project to visualize some information.
                    It's been created as a website based on the parallax scrolling technique.
                </p>
            </ExperienceDescription>
        );
    }
}

export default OcadoExperienceDescription;