import { prisma } from "../../database/client.js"

export class GetAllReservaController { 

    async handle(request,response)
    {
        const reserva = await prisma.reserva.findMany();
        return response.json(reserva);
    }
}
