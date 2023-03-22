import { prisma } from "../../databse/client.js";

export class UpdateTipoSanguineoController {
  async handle(request, response) {
    const { id, tipo, fator } = request.body;

    if (tipo === "" || fator === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o tipo e/ou o fator. ",
      });
    }

    const ExisteTipo = await prisma.tipoSanguineo.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteTipo);

    if (ExisteTipo != null) {
      const tipoUpdate = await prisma.tipoSanguineo.update({
        where: {
          id: parseInt(id),
        },
        data: {
            tipo, 
            fator,
            updated_at: new Date(),
        },
      });

      return response.json(tipoUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
