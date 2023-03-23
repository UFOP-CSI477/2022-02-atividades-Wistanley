import { prisma } from '../../database/client.js'

export class GetAllCotacaoController {

    async handle(request, response) {
        const cotacao = await prisma.cotacao.findMany({
            include: {
                pessoa: true,
                local: true
            }
        });
        return response.json(cotacao);
    }
}