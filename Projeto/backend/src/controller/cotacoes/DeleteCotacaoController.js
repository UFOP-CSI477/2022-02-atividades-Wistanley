import { prisma } from '../../database/client.js'

export class DeleteCotacaoController {

    async handle(request, response) {
        const { id } = request.body;

        try {
            const cotacao = await prisma.cotacao.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.json(cotacao)

        } catch (error) {          
            console.error(error);
            return response.status(400).json(error);
        }
    }
}