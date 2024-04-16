import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// этот код определяет схему данных пользователя
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
