import { prisma } from '../../database/client.js'

export class UpdateServicoController {

    async handle(request, response) {
        const { nome, cidade_id } = request.body;
        const servico = await prisma.servico.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                id,
                valor
            }
        });
        return response.json(servico);
    }
}