import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

const price = (field: string) =>
    z.coerce.number().refine(
        (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
        `${field} must be a valid price with two decimal places(e.g. 49.99)`
    )

export const ProductInputSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(1, 'Category is required'),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    brand: z.string().min(1, 'Brand is required'),
    description: z.string().min(1, 'Description is required'),
    isPublished: z.boolean(),
    price: price('Price'),
    listPrice: price('List Price'),
    countInStock: z.coerce
        .number()
        .int()
        .nonnegative('Count in stock must be a non-negative integer'),
    tags: z.array(z.string()).default([]),
    sizes: z.array(z.string()).default([]),
    colors: z.array(z.string()).default([]),
    avgRating: z.coerce
        .number()
        .min(0, 'Average rating must be at least 0')
        .max(5, 'Average rating cannot exceed 5'),
    numReviews: z.coerce
        .number()
        .int()
        .nonnegative('Number of reviews must be a non-negative integer'),
    ratingDistribution: z
        .array(z.object({ rating: z.number(), count: z.number() }))
        .max(5, 'Rating distribution cannot exceed 5 ratings'),
    reviews: z.array(z.string()).default([]),
    numSales: z.coerce
        .number()
        .int()
        .nonnegative('Number of sales must be a non-negative integer'),
})