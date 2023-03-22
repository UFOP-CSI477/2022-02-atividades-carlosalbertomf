import { prisma } from "../../databse/client.js";

export class UpdateDistribuicoesController {
  async handle(request, response) {
    const { id, produto_id, unidade_id, data } = request.body;

    /*if (nome === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome. ",
      });
    }*/

    //TODO - Validade data, produto_id e unidade_id

    const ExisteDistr = await prisma.distribuicoes.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteDistr);

    if (ExisteDistr != null) {
      const distribuicoesUpdate = await prisma.distribuicoes.update({
        where: {
          id: parseInt(id),
        },
        data: {
          produto_id, 
          unidade_id, 
          data, 
          updated_at: new Date(),
        },
      });

      return response.json(distribuicoesUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
