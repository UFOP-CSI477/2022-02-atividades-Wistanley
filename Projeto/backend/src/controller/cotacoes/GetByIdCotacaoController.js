import { prisma } from "../../database/client.js";

export class GetByIdCotacaoController {

    async handle(request, response) {
        const { id } = request.params;
        const cotacao = await prisma.cotacao.findUnique({

            where: {
                id : parseInt(id)
            }
        });
        return response.json(cotacao);
    }
}