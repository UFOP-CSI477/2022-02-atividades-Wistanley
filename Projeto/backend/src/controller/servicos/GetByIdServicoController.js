import { prisma } from "../../database/client.js";

export class GetByIdServicoController {

    async handle(request, response) {
        const { id } = request.params;
        const servico = await prisma.servico.findUnique({

            where: {
                id : parseInt(id)
            },

            include: {
                cidade: true
            }
        });

        return response.json(servico);
    }
}