import ProjectNavigationFactory from '../pages/projects/ProjectsNavigationFactory';

import type {ProjectMenuItemType} from '../pages/projects/ProjectsNavigationFactory';

export type LinkType = {
   href: string,
   text: string
};

class NavigationFactory {
    static getHomeLink(): LinkType {
        return {href: '/', text: 'Jacek Topolski'};
    }

    static getSectionLinks(): Array<LinkType> {
        return [
            {href: '/about', text: 'About'},
            {href: '/projects', text: 'Projects'},
            {href: '/travel', text: 'Travel'},
            {href: '/contact', text: 'Contact'}
        ];
    }

    static getSoftwareProjects(): Array<ProjectMenuItemType> {
        return ProjectNavigationFactory.getSoftwareProjects();
    }

    static get3DProjects(): Array<ProjectMenuItemType> {
        return ProjectNavigationFactory.get3DProjects();
    }
}

export default NavigationFactory;