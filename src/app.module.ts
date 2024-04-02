import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './entities/users.entity';
import { Posts } from './entities/posts.entity';
import { PostsModule } from './posts/posts.module';
import { Category } from './entities/category.entity';
import { Categoryforfilms } from './entities/categoryforfilm.entity';
import { Films } from './entities/films.entity';
import { Ticket } from './entities/ticket.entity';
import { Adminshowtime } from './entities/adminshowtime.entity';
import { Chair } from './entities/chair.entity';
import { Showtime } from './entities/showtime.entity';
import { Room } from './entities/room.entity';
import { CategoryfilmModule } from './modules/categoryfilm/categoryfilm.module';
import { FilmsModule } from './modules/films/films.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { AdminshowtimeModule } from './modules/adminshowtime/adminshowtime.module';
import { ChairModule } from './modules/chair/chair.module';
import { ShowtimeModule } from './modules/showtime/showtime.module';
import { RoomModule } from './modules/room/room.module';
import { Price } from './entities/price.entity';
import { AuthModule } from './auth/auth.module';
import { CategorysforfilmModule } from './modules/categorysforfilm/categorysforfilm.module';
import { PriceModule } from './modules/price/price.module';
import { Friends } from './entities/friends.entity';
import { Messages } from './entities/messages.entity';
import { Notification } from './entities/notification.entity';
import { MessagesModule } from './modules/messages/messages.module';
import { FriendsModule } from './modules/friends/friends.module';
import { NotificationModule } from './modules/notification/notice.module';
import { Comments } from './entities/comments.entity';
import { CommentsModule } from './modules/comments/comments.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookingticket',
      entities: [Users, Posts, Category, Categoryforfilms, Films, Ticket, Adminshowtime, Chair, Showtime, Room,Price,Friends,Messages,Notification,Comments],
      synchronize: true
    }),
    UsersModule,
    PostsModule,
    CategoryfilmModule,
    CategorysforfilmModule,
    FilmsModule,
    TicketModule,
    AdminshowtimeModule,
    ChairModule,
    ShowtimeModule,
    RoomModule,
    AuthModule,
    PriceModule,
    MessagesModule,
    FriendsModule,
    NotificationModule,
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
