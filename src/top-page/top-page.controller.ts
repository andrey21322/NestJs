import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { CreateTopPageModelDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TOP_PAGE_NOT_FOUND_ERROR } from './top-page.constants';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly topPageService: TopPageService) { }

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto:CreateTopPageModelDto) {
		return this.topPageService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const page = await this.topPageService.findById(id);
		if(!page) {
			throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR);
		}
		return page;
	}

	@Get('/byALias/:aLias')
	async getByAlias(@Param('id') alias: string) {
		const page = await this.topPageService.findByAlias(alias);
		if(!page) {
			throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR);
		}
		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedPage = await this.topPageService.findById(id);
		if(!deletedPage) {
			throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: CreateTopPageModelDto) {
		const updatedPage = await this.topPageService.updateById(id, dto);
		if(!updatedPage) {
			throw new NotFoundException(TOP_PAGE_NOT_FOUND_ERROR);
		}
		return updatedPage;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {
		return this.topPageService.findByCategory(dto.firstCategory);
	}

	@Get('textSearch/:text')
	async textSearch(@Param('text') text: string) {
		return this.topPageService.findByText(text);
	}
}
