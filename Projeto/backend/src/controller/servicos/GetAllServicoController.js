import { prisma } from '../../database/client.js'

export class GetAllServicoController {

    async handle(request, response) {
        const servicos = await prisma.servico.findMany({

            include: {
                cidade: true
            }

        });
        return response.json(servicos);
    }
}