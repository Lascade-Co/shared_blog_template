'use client';
import React from 'react';
import styles from './CategoriesSection.module.css';
export default function CategoriesSection({ categories, selectedCategory, onCategoryChange, }) {
    return (React.createElement("div", { className: styles.categoriesSection },
        React.createElement("div", { className: styles.categoriesContainer }, categories.map((category) => (React.createElement("button", { key: category, className: `${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`, onClick: () => onCategoryChange(category) }, category))))));
}
