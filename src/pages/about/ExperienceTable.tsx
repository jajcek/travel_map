import React, {useState} from 'react';
import styled from 'styled-components'

import {COLORS, fadeOutAnimation, fadeInAnimation} from '../../CommonStyles';
import OcadoExperienceDescription from './exp_pages/OcadoExperienceDescription';
import NokiaExperienceDescription from './exp_pages/NokiaExperienceDescription';
import PgsExperienceDescription from './exp_pages/PgsExperienceDescription';
import SygnityExperienceDescription from './exp_pages/SygnityExperienceDescription';

import OcadoLogo from './company_logos/ocado_logo.png';
import NokiaLogo from './company_logos/nokia_logo.png';
import PgsLogo from './company_logos/pgs_logo.png';
import SygnityLogo from './company_logos/sygnity_logo.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Headers = styled.div`
    display: flex;
`;

const Header = styled.div<{ img: string }>`
    background: url(${props => props.img}) center center no-repeat;
    background-size: 60%;
    background-origin: border-box;
    height: 70px;
    width: 120px;
    cursor: pointer;
    border-bottom: 4px solid ${COLORS.HEADER_BORDER};
    box-sizing: border-box;
    filter: grayscale(1);
    transition: background-size .2s, filter 0.6s;


    &.focused {
        padding: 10px;
        border: 4px solid ${COLORS.HEADER_BORDER};
        border-bottom: none;
        background-color: ${COLORS.EXP_BACKGROUND_COLOR1};
        background-size: 80%;
        filter: grayscale(0);
    }

    &:hover {
        filter: grayscale(0);
        transition: background-size .2s, filter .0s;
    }
`;

const EmptyHeader = styled.div`
    border-bottom: 4px solid ${COLORS.HEADER_BORDER};
    flex: 1;
`;

const ANIMATION_DURATION_MS = 150;

const Body = styled.div`
    border: none;
    background: linear-gradient(180deg, ${COLORS.EXP_BACKGROUND_COLOR1} 0%, ${COLORS.EXP_BACKGROUND_COLOR2} 100%);
    padding: 20px;
    margin-bottom: 50px;
    color: ${COLORS.BASE_TEXT};

    &.hide {
        animation: ${fadeOutAnimation} ${ANIMATION_DURATION_MS/1000}s;
        opacity: 0;
    }

    &.show {
        animation: ${fadeInAnimation} ${ANIMATION_DURATION_MS/1000}s;
        opacity: 1;
    }
`;

const OCADO = "ocado";
const NOKIA = "nokia";
const PGS = "pgs";
const SYGNITY = "sygnity";

const ExperienceTable = () => {
    const [displayedCompanyId, setDisplayedCompanyId] = useState(OCADO);
    const [descriptionAnimationState, setDescriptionAnimationState] = useState('show');

    function selectCompany(e: React.SyntheticEvent, companyId: string) {
        if (displayedCompanyId === companyId) {
            return;
        }

        setDescriptionAnimationState('hide');
        setTimeout(() => {
            setDisplayedCompanyId(companyId);
            setDescriptionAnimationState('show');
        }, ANIMATION_DURATION_MS);
    };

    function getExpDesc() {
        switch (displayedCompanyId) {
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

    function isSelected(companyId: string) {
        return displayedCompanyId === companyId ? 'focused' : '';
    }

    return (
        <Container>
            <Headers>
                <EmptyHeader />
                <Header img={OcadoLogo} className={isSelected(OCADO)} onClick={(e) => selectCompany(e, OCADO)} />
                <Header img={NokiaLogo} className={isSelected(NOKIA)} onClick={(e) => selectCompany(e, NOKIA)} />
                <Header img={PgsLogo} className={isSelected(PGS)} onClick={(e) => selectCompany(e, PGS)} />
                <Header img={SygnityLogo} className={isSelected(SYGNITY)} onClick={(e) => selectCompany(e, SYGNITY)} />
                <EmptyHeader />
            </Headers>
            <Body className={descriptionAnimationState}>
                {getExpDesc()}
            </Body>
        </Container>
    );
};

export default ExperienceTable;