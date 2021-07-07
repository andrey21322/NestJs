import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageModelDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    getByAlias(alias: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageModelDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    find(dto: FindTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>[]>;
    textSearch(text: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>[]>;
}
