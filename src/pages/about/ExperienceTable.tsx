import React from 'react';
import styled from 'styled-components'

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
    border: 4px solid #ccc;
    border-top: none;
    background-color: #e6e6e6;
    padding: 20px;
`;

const OCADO = "ocado";
const NOKIA = "nokia";
const PGS = "pgs";
const SYGNITY = "sygnity";

type State = {
    company: string
}

class ExperienceTable extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {company: OCADO};

        this.selectCompany = this.selectCompany.bind(this);
        this.isSelected = this.isSelected.bind(this);
    }

    selectCompany(e: React.SyntheticEvent, company: string) {
        this.setState({company});
    };

    isSelected(companyName: string) {
        return this.state.company === companyName ? 'focused' : '';
    }

    render() {
        return (
            <Container>
                <Headers>
                    <Header company={OCADO} className={this.isSelected(OCADO)} onClick={(e) => this.selectCompany(e, OCADO)}></Header>
                    <Header company={NOKIA} className={this.isSelected(NOKIA)} onClick={(e) => this.selectCompany(e, NOKIA)}></Header>
                    <Header company={PGS} className={this.isSelected(PGS)} onClick={(e) => this.selectCompany(e, PGS)}></Header>
                    <Header company={SYGNITY} className={this.isSelected(SYGNITY)} onClick={(e) => this.selectCompany(e, SYGNITY)}></Header>
                    <EmptyHeader></EmptyHeader>
                </Headers>
                <Body>
                    body
                </Body>
            </Container>
        );
    }
}

export default ExperienceTable;