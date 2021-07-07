import { index, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export class HhData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
}

export class TopPageAdvantage {
	title: string;
	description: string;
}

export interface TopPageModel extends Base { }

@index({ '$**': 'text' })
export class TopPageModel extends TimeStamps{

	@prop({enum: TopLevelCategory })
	firstCategory: TopLevelCategory;
	
	@prop()
	secondCategory: string;
	
	@prop({unique: true})
	alias: string;
	
	@prop({text: true})
	title: string;
	
	@prop()
	category: string;
	
	@prop({type: () => HhData})
	hh?: HhData;
	
	@prop({type: () => [TopPageAdvantage] })
	advantages: TopPageAdvantage[];
	
	@prop()
	seoText: string;
	
	@prop()
	tagsTitle: string;
	
	@prop({type: () => [String] })
	tags: string[];
}
