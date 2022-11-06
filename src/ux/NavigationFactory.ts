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
}

export default NavigationFactory;