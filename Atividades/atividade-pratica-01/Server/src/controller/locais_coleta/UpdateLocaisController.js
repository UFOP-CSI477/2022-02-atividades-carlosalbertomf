import { prisma } from "../../databse/client.js";

export class UpdateLocaisController {
  async handle(request, response) {
    const { id, nome, rua, numero, complemento, cidade_id } = request.body;

    if (nome === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome. ",
      });
    }
    if (rua === "") {
        return response.status(400).json({
          message: "Dados incompletos. Informe a rua. ",
        });
      }

    //TODO - validar numero e cidade_id

    const ExisteLocal = await prisma.locaisColeta.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteLocal);

    if (ExisteLocal != null) {
      const localUpdate = await prisma.locaisColeta.update({
        where: {
          id: parseInt(id),
        },
        data: {
            nome, 
            rua, 
            numero,  
            complemento, 
            cidade_id,
            updated_at: new Date(),
        },
      });

      return response.json(localUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
