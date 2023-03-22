import { prisma } from "../../databse/client.js";

export class UpdatePessoaController {
  async handle(request, response) {
    const { id, nome, rua, numero, complemento, documento, cidade_id, tipo_id } = request.body;

    if (nome === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe o nome.",
      });
    }

    if (rua === "") {
        return response.status(400).json({
          message: "Dados incompletos. Informe a rua.",
        });
      }

    if (documento === "") {
        return response.status(400).json({
          message: "Dados incompletos. Informe o documento.",
        });
      }

    //TODO - validar numero, cidade_id e tipo_id

    const ExistePessoa = await prisma.pessoa.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExistePessoa);

    if (ExistePessoa != null) {
      const pessoaUpdate = await prisma.pessoa.update({
        where: {
          id: parseInt(id),
        },
        data: {
            nome, 
            rua, 
            numero, 
            complemento, 
            documento, 
            cidade_id, 
            tipo_id,
            updated_at: new Date(),
        },
      });

      return response.json(pessoaUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
