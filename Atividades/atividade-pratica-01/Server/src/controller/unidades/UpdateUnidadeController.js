import { prisma } from "../../databse/client.js";

export class UpdateUnidadeController {
  async handle(request, response) {
    const { id, nome, numero, complemento, cidade_id } = request.body;

    if (nome === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome da unidade. ",
      });
    }

    //TODO - validar numero e cidade_id

    const ExisteUnidade = await prisma.unidade.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteUnidade);

    if (ExisteUnidade != null) {
      const unidadeUpdate = await prisma.unidade.update({
        where: {
          id: parseInt(id),
        },
        data: {
            nome, 
            numero, 
            complemento, 
            cidade_id,
            updated_at: new Date()
        },
      });

      return response.json(unidadeUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
