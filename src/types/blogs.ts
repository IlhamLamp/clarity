interface Categories {
    id: number;
    name: string;
}

interface ArticleItems {
    href: string;
    images: string;
    title: string;
    description: string;
    author: {
        name: string;
        image: string;
        href: string;
    };
    date: string;
    category: string;
    buttons: {
        text: string;
        bg: string;
    };
}

export type { ArticleItems, Categories };