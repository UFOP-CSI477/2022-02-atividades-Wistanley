import { prisma } from "../../database/client.js"; 

export class CreateEstadoController {

    async handle(request, response) {

        const { nome, sigla } = request.body;

        if ( nome === "" ) {
            return response.status(400).json({
                message: "Informe o nome e a sigla do estado"
            });
        }
        
        const estado = await prisma.estado.create({

            data: {
                nome,
                sigla
            }
        });
        console.log(estado);
        return response.json(estado);
    }
}