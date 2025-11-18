'use client';

import React from 'react';
import { CategoriesSectionProps } from '../../types';
import styles from './CategoriesSection.module.css';

export default function CategoriesSection({
    categories,
    selectedCategory,
    onCategoryChange,
}: CategoriesSectionProps) {
    return (
        <div className={styles.categoriesSection}>
            <div className={styles.categoriesContainer}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => onCategoryChange(category)}
                    >
                        <h1 className='category_name' >{category}</h1>
                    </button>
                ))}
            </div>
        </div>
    );
}