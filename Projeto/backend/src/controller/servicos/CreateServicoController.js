import { prisma } from '../../database/client.js'

export class CreateServicoController {

    async handle(request, response) {
        const { nome, cidade_id } = request.body;
        const servico = await prisma.servico.create({

            data: {
                nome,
                id,
                valor
            }
        });
        return response.json(servico);
    }
}