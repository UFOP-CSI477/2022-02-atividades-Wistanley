import { prisma } from '../../database/client.js'

export class GetAllUsuarioController {

    async handle(request, response) {
        const usuarios = await prisma.pessoa.findMany({

            include: {
                email: true,
                nome: true
            }
        });
        return response.json(usuarios);
    }
}