import { prisma } from "../../databse/client.js";
import { GetByIdCidadeController } from "./GetByIdCidadeController.js";

export class UpdateCidadeController {
  async handle(request, response) {
    const { id, nome, estado_id } = request.body;

    if (nome === "" ) {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome. ",
      });
    }

    const ExisteCidade = await prisma.cidade.findUnique({
      
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteCidade);

    if (ExisteCidade != null) {
      //TODO - Verificar se existe o estado_id também
      const cidadeUpdate = await prisma.cidade.update({
        where: {
          id: parseInt(id),
        },
        data: {
          nome,
          estado_id,
          updated_at: new Date(),
        },
      });

      return response.json(cidadeUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
