import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';
import {User} from '../../features/users/models/user';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto.userEntity());
	}

	@Get()
	//@UseGuards(AuthGuard())
	async users(): Promise<User[]> {
		const userEntities = await this.usersService.users();
		return userEntities.map(userEntity => User.fromMovieEntity(userEntity))
	}

	@Get(':userid')
	//@UseGuards(AuthGuard())
	async user(@Param('userid') userId: string): Promise<User> {
		return User.fromMovieEntity(await this.usersService.user(userId));
	}

	@Delete()
	deleteUser() {
		return this.usersService.deleteUsers();
	}
}
