import { prisma } from '../../database/client.js'

export class CreateUsuarioController {

    async handle(request, response) {
        const { nome, email, senha } = request.body;
        const usuario = await prisma.usuario.create({

            data: {
                nome,
                email: {
                    connect: {
                        id: email
                    }
                },
                tiposanguineo: {
                    connect:{
                        id: senha
                    }
                }
            }
        });
        return response.json(usuario);
    }
}