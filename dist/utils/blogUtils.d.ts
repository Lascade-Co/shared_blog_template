import { BlogPost, WPCategory } from '../types';
/**
 * Filter posts by category name
 */
export declare function filterPostsByCategory(posts: BlogPost[], categoryName: string): BlogPost[];
/**
 * Search posts by query (searches in title, excerpt, and content)
 */
export declare function searchPosts(posts: BlogPost[], query: string): BlogPost[];
/**
 * Get categories that have posts
 */
export declare function getCategoriesWithPosts(posts: BlogPost[], allCategories: WPCategory[]): WPCategory[];
/**
 * Strip HTML tags from string
 */
export declare function stripHtml(html: string): string;
/**
 * Format date to readable string
 */
export declare function formatDate(dateString: string): string;
/**
 * Paginate an array of items
 */
export declare function paginateItems<T>(items: T[], page: number, itemsPerPage: number): T[];
/**
 * Calculate total pages
 */
export declare function getTotalPages(totalItems: number, itemsPerPage: number): number;
//# sourceMappingURL=blogUtils.d.ts.map