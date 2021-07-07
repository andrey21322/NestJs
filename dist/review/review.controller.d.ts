import { CreateReviewDto } from './dto/create-review';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewservice;
    constructor(reviewservice: ReviewService);
    create(dto: CreateReviewDto): Promise<import("@typegoose/typegoose").DocumentType<import("./review.model").ReviewModel>>;
    delete(id: string): Promise<void>;
    getByProduct(productId: string, email: string): Promise<import("@typegoose/typegoose").DocumentType<import("./review.model").ReviewModel>[]>;
}
