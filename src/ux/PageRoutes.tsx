import React, {lazy} from "react";
import {Routes, Route} from "react-router-dom";

import NotFoundPage from './NotFoundPage';
import NavigationFactory from './NavigationFactory';

const IntroPage = lazy(() => import('../pages/intro/IntroPage'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const ProjectsPage = lazy(() => import('../pages/projects/ProjectsPage'));
const MapWithDataLoader = lazy(() => import('../pages/travel/MapWithDataLoader'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));
const Projects = loadProjectsComponents();

function loadProjectsComponents() {
    return NavigationFactory.getAllProjects().map((projectData) => {
        return {
            component: lazy(() => import(`../pages/projects/${projectData.href}/ProjectPage`)),
            path: `/projects/${projectData.href}`
        };
    });
}

type Props = {
    navigateFn: (href: string) => void,
    showFn: () => void
}

const PageRoutes = (props: Props) => {
    return (
        <Routes>
            <Route path="/" element={<IntroPage menuClick={props.navigateFn} onLoad={props.showFn} />} />
            <Route path="/about" element={<AboutPage onLoad={props.showFn} />} />
            <Route path="/projects" element={<ProjectsPage onItemClick={props.navigateFn} onLoad={props.showFn} />} />
            {
                Projects.map((p) => {
                    return <Route key={p.path} path={p.path} element={<p.component onLoad={props.showFn} />} />;
                })
            }
            <Route path="/travel" element={<MapWithDataLoader onLoad={props.showFn} />} />
            <Route path="/contact" element={<ContactPage onLoad={props.showFn} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default PageRoutes;