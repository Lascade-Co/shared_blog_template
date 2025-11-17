export interface WPCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
}
export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    modifiedDate: string;
    featuredImage?: string;
    categories: WPCategory[];
    author?: {
        name: string;
        avatar: string;
    };
}
export interface HomePageProps {
    HeroComponent: React.ComponentType<{
        searchQuery?: string;
    }>;
    FooterComponent: React.ComponentType;
    posts: BlogPost[];
    categories: WPCategory[];
    searchQuery?: string;
    currentPage?: number;
    postsPerPage?: number;
    categoryNames?: string[];
    ExtraComponent?: React.ComponentType;
}
export interface BlogPostPageProps {
    NavbarComponent: React.ComponentType<{
        searchQuery?: string;
        onSearch?: (query: string) => void;
    }>;
    FooterComponent: React.ComponentType;
    post: BlogPost;
    searchQuery?: string;
    onSearch?: (query: string) => void;
    ExtraComponent?: React.ComponentType<{
        post?: BlogPost;
    }>;
    showPopularPosts?: boolean;
    popularPostLinks?: Array<{
        href: string;
        title: string;
    }>;
}
export interface BlogsGridProps {
    posts: BlogPost[];
    selectedCategory: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isSearchActive: boolean;
    searchQuery: string;
    LinkComponent?: React.ComponentType<{
        href: string;
        className?: string;
        children: React.ReactNode;
    }>;
}
export interface CategoriesSectionProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}
//# sourceMappingURL=index.d.ts.map