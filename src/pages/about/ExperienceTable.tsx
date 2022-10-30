import React from 'react';
import styled from 'styled-components'

import OcadoExperienceDescription from './exp_pages/OcadoExperienceDescription';
import NokiaExperienceDescription from './exp_pages/NokiaExperienceDescription';
import PgsExperienceDescription from './exp_pages/PgsExperienceDescription';
import SygnityExperienceDescription from './exp_pages/SygnityExperienceDescription';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Headers = styled.div`
    display: flex;
`;

const Header = styled.div<{ company: string }>`
    background: url('${props => props.company}_logo.png') center center no-repeat;
    background-size: 60%;
    background-origin: border-box;
    height: 70px;
    width: 120px;
    cursor: pointer;
    border-bottom: 4px solid #ccc;
    box-sizing: border-box;
    filter: grayscale(1);
    transition: background-size .2s, filter 0.6s;


    &.focused {
        padding: 10px;
        border: 4px solid #ccc;
        border-bottom: none;
        background-color: #e6e6e6;
        background-size: 80%;
        filter: grayscale(0);
    }

    &:hover {
        filter: grayscale(0);
        transition: background-size .2s, filter .0s;
    }
`;

const EmptyHeader = styled.div`
    border-bottom: 4px solid #ccc;
    flex: 1;
`;

const Body = styled.div`
    border: none;
    background: linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(244,244,244,1) 100%);
    padding: 20px;
`;

const OCADO = "ocado";
const NOKIA = "nokia";
const PGS = "pgs";
const SYGNITY = "sygnity";

type State = {
    companyId: string
}

class ExperienceTable extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {companyId: OCADO};

        this.selectCompany = this.selectCompany.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    selectCompany(e: React.SyntheticEvent, companyId: string) {
        this.setState({companyId});
    };

    getExpDesc() {
        switch (this.state.companyId) {
            case "ocado":
                return <OcadoExperienceDescription />;
            case "nokia":
                return <NokiaExperienceDescription />;
            case "pgs":
                return <PgsExperienceDescription />;
            case "sygnity":
                return <SygnityExperienceDescription />;
            default:
                return <OcadoExperienceDescription />;
        }
    }

    isSelected(companyId: string) {
        return this.state.companyId === companyId ? 'focused' : '';
    }

    render() {
        return (
            <Container>
                <Headers>
                    <EmptyHeader />
                    <Header company={OCADO} className={this.isSelected(OCADO)} onClick={(e) => this.selectCompany(e, OCADO)} />
                    <Header company={NOKIA} className={this.isSelected(NOKIA)} onClick={(e) => this.selectCompany(e, NOKIA)} />
                    <Header company={PGS} className={this.isSelected(PGS)} onClick={(e) => this.selectCompany(e, PGS)} />
                    <Header company={SYGNITY} className={this.isSelected(SYGNITY)} onClick={(e) => this.selectCompany(e, SYGNITY)} />
                    <EmptyHeader />
                </Headers>
                <Body>
                    {this.getExpDesc()}
                </Body>
            </Container>
        );
    }
}

export default ExperienceTable;