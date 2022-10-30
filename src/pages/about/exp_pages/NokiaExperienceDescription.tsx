import React from 'react';

import ExperienceDescription from './ExperienceDescription';

class OcadoExperienceDescription extends React.Component<{}, {}> {
    render() {
        return (
            <ExperienceDescription
                position="Software Engineer"
                companyName="Nokia (rebranded from Nokia Solutions and Networks)"
                period="March 2013 - February 2017"
                technologies="Java, Protobuf, JavaScript, AngularJS, HTML, CSS, jQuery, SVN, Git"
            >
                <p>
                    Officially I was hired as C++ developer (by passing C++ interview) and worked on some smaller tasks,
                    but after two months I started working with Java for almost two years.
                    In Java we developed a tool for presenting BTS (Base Transceiver Station) parameters in
                    more convenient ways like graphs or schemes. During that time, apart from Java,
                    I came into contact with Protobuf, Maven, SQLite and SVN.
                </p>
                <p>
                    After some time we decided to move to web technologies, therefore I am currently working on a
                    similar tool using AngularJS, jQuery, Grunt, Bower, Node, Git etc.
                </p>
            </ExperienceDescription>
        );
    }
}

export default OcadoExperienceDescription;