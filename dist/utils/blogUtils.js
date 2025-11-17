/**
 * Filter posts by category name
 */
export function filterPostsByCategory(posts, categoryName) {
    if (categoryName === 'Latest') {
        // Sort by date, newest first
        return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return posts.filter(post => post.categories.some(cat => cat.name.toLowerCase() === categoryName.toLowerCase()));
}
/**
 * Search posts by query (searches in title, excerpt, and content)
 */
export function searchPosts(posts, query) {
    if (!query || query.trim() === '') {
        return posts;
    }
    const searchTerms = query.toLowerCase().trim().split(/\s+/);
    return posts.filter(post => {
        const searchableText = `
      ${post.title} 
      ${post.excerpt} 
      ${post.content}
    `.toLowerCase();
        return searchTerms.every(term => searchableText.includes(term));
    });
}
/**
 * Get categories that have posts
 */
export function getCategoriesWithPosts(posts, allCategories) {
    const categoryIds = new Set();
    posts.forEach(post => {
        post.categories.forEach(cat => categoryIds.add(cat.id));
    });
    return allCategories.filter(cat => categoryIds.has(cat.id));
}
/**
 * Strip HTML tags from string
 */
export function stripHtml(html) {
    return html.replace(/<[^>]*>/g, '').trim();
}
/**
 * Format date to readable string
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
/**
 * Paginate an array of items
 */
export function paginateItems(items, page, itemsPerPage) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
}
/**
 * Calculate total pages
 */
export function getTotalPages(totalItems, itemsPerPage) {
    return Math.ceil(totalItems / itemsPerPage);
}
