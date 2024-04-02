import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ticket } from "src/entities/ticket.entity";
import { TicketController } from "./ticket.controller";
import { TicketService } from "./ticket.service";
import { AuthModule } from "src/auth/auth.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [TypeOrmModule.forFeature([Ticket]),
    JwtModule.register({}),
    forwardRef(()=>AuthModule)
    ],
    controllers: [TicketController],
    providers: [TicketService],
    exports: [TicketService],
})
export class TicketModule {}