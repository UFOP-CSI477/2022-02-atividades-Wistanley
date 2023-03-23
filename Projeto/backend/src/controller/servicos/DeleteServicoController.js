import { prisma } from '../../database/client.js'

export class DeleteServicoController {
    async handle(request, response) {
        const { id } = request.body;

        try {
            const servico = await prisma.servico.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return response.json(servico)
        } catch (error) {
            
            console.error(error);
            return response.status(400).json(error);
        }
    }
}