import React from 'react';
import styled from 'styled-components'

import {COLORS} from "../../../CommonStyles";

type Props = {
    position: string,
    companyName: string,
    period: string,
    technologies: string,
    children: any
}

const Position = styled.div`
    line-height: 20px;
    font-weight: bold;
    font-size: 18px;
`;

const CompanyName = styled.div`
    line-height: 20px;
    font-size: 16px;
`;

const Detail = styled.div`
    line-height: 15px;
    font-size: 13px;
    color: ${COLORS.EXP_DETAIL_TEXT};
`;

const FancyLine = styled.hr`
    background: radial-gradient(ellipse at center,rgba(0,0,0,.1) 0,rgba(0,0,0,0) 75%);
    border: 0;
    height: 1px;
    margin: 15px;
`;

const Body = styled.div`
    height: 180px;
`;

class ExperienceDescription extends React.Component<Props, {}> {
    render() {
        return (
            <React.Fragment>
                <div>
                    <Position>{this.props.position}</Position>
                    <CompanyName>{this.props.companyName}</CompanyName>
                    <Detail>{this.props.period}</Detail>
                    <Detail>{this.props.technologies}</Detail>
                </div>
                <FancyLine/>
                <Body>
                    {this.props.children}
                </Body>
            </React.Fragment>
        );
    }
}

export default ExperienceDescription;