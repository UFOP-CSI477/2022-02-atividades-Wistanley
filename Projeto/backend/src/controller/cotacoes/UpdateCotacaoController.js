import { prisma } from '../../database/client.js'

export class UpdateCotacaoController {

    async handle(request, response) {
        const { usuario_id, servico_id } = request.body;
        const cotacao = await prisma.cotacao.update({

            where: {
                id: parseInt(id)
            },
            data: {
                usuario: {
                    connect: {
                        id: usuario_id
                    }
                },
                servico: {
                    connect:{
                        id: servico_id
                    }
                }
            }
        });
        return response.json(cotacao);
    }
}