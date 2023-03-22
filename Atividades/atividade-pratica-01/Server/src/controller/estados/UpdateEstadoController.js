import { prisma } from "../../databse/client.js";
import { GetByIdEstadoController } from "./GetByIdEstadoController.js";

export class UpdateEstadoController {
  async handle(request, response) {
    const { id, nome, sigla } = request.body;

    if (nome === "" || sigla === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome e/ou a sigla. ",
      });
    }

    const ExisteEstado = await prisma.estado.findUnique({
      //filtrando com where
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteEstado);

    if (ExisteEstado != null) {
      const estadoUpdate = await prisma.estado.update({
        where: {
          id: parseInt(id),
        },
        data: {
          nome,
          sigla,
          updated_at: new Date(),
        },
      });

      return response.json(estadoUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
