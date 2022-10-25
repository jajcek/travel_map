export type LinkType = {
   href: string,
   text: string
};

class NavigationFactory {
    static getSectionLinks(): Array<LinkType> {
        return [
            {href: '/about', text: 'About'},
            {href: '/work', text: 'Work'},
            {href: '/travel', text: 'Travel'},
            {href: '/contact', text: 'Contact'}
        ];
    }
}

export default NavigationFactory;