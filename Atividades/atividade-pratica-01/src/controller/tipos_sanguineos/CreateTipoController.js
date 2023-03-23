import { prisma } from "../../database/client.js"; 

export class CreateTipoController {

    async handle(request, response) {
        const { tipo, fator } = request.body;

        if ( nome === "" ) {
            return response.status(400).json({
                message: "Dados incompletos. Informe o tipo e o fator"
            });
        }

        const tipoSanguineo = await prisma.tipoSanguineo.create({
            data: {
                tipo,
                fator
            }
        });

        console.log(tipoSanguineo);
        return response.json(tipoSanguineo);
    }
}