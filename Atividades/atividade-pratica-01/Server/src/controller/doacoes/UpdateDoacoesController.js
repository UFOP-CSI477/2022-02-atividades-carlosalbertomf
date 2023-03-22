import { prisma } from "../../databse/client.js";

export class UpdateDoacoesController {
  async handle(request, response) {
    const { id, pessoa_id, local_id, data } = request.body;

    /*if (nome === "" || sigla === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome e/ou a sigla. ",
      });
    }*/

    //TODO - validar pessoa_id, local_id e data

    const ExisteDoacao = await prisma.doacoes.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteDoacao);

    if (ExisteDoacao != null) {
      const doacaoUpdate = await prisma.doacoes.update({
        where: {
          id: parseInt(id),
        },
        data: {
            pessoa_id, 
            local_id, 
            data,
            updated_at: new Date(),
        },
      });

      return response.json(doacaoUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
