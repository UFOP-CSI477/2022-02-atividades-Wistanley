import { prisma } from '../../database/client.js'

export class UpdateUsuarioController {

    async handle(request, response) {
        const { nome, email, senha } = request.body;
        const usuario = await prisma.usuario.update({

            where: {
                id: parseInt(id)
            },
            data: {
                nome,
                email,
                senha
            }
        });
        return response.json(usuario);
    }
}