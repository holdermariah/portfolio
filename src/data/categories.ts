// Map internal category names to display names for navigation
export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
	'Logo Design': 'BRANDING',
	Collage: 'OTHER WORK',
	// Categories not listed here use their original name uppercased
};

// Helper to get display name for navigation
export const getCategoryDisplayName = (category: string): string => {
	return CATEGORY_DISPLAY_NAMES[category] || category.toUpperCase();
};

// Helper to get section ID from category (for scroll anchors)
export const getCategorySectionId = (category: string): string => {
	return category.toLowerCase().replace(/\s+/g, '-');
};
