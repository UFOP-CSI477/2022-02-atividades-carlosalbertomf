import { prisma } from "../../databse/client.js";

export class UpdateProdutoController {
  async handle(request, response) {
    const { id, etiqueta, validade, doacao_id } = request.body;

    if (etiqueta === "") {
      return response.status(400).json({
        message: "Dados incompletos. Informe a etiqueta. ",
      });
    }

    //TODO - validar validade, doacao_id

    const ExisteProduto = await prisma.produto.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExisteProduto);

    if (ExisteProduto != null) {
      const produtoUpdate = await prisma.produto.update({
        where: {
          id: parseInt(id),
        },
        data: {
            etiqueta, 
            validade, 
            doacao_id,
            updated_at: new Date(),
        },
      });

      return response.json(produtoUpdate);
    } else {
      return response.status(400).json({
        message: "ID inexistente.",
      });
    }
  }
}
