# API de Envio de Email com Gmail

Esta API simplifica o processo de envio de e-mails utilizando a infraestrutura confiável do Gmail. Com um endpoint fácil de usar e configuração flexível por meio do arquivo `.env`, você pode integrar facilmente a funcionalidade de envio de e-mails em seus projetos.

## Recursos Principais

- **Endpoint:** `/enviarEmail`
- **Método:** POST
- **Corpo da Requisição:**
  ```json
  {
    "to": "destinatario@example.com",
    "subject": "Assunto do E-mail",
    "html": "<p>Conteúdo em HTML do E-mail</p>",
    "text": "Conteúdo de texto do E-mail"
  }
  ```

# Configuração do Arquivo .env

Para utilizar a API, siga os passos abaixo para configurar o arquivo `.env` com as informações necessárias. As seguintes variáveis são requeridas:

  ```env
  PORT= 3000
  FROM= Seu Nome <seuemail@gmail.com>
  USER= seuemail@gmail.com
  PASSWORD= suasenha
  NAME= Seu Nome
```
# Como Usar

1. Clone este repositório.
2. Crie o arquivo `.env` na raiz da api.
3. Configure o arquivo .env com suas informações.
4. Instale as dependências utilizando npm install.
5. Instale as dependências utilizando npm install.

Agora você está pronto para começar a enviar e-mails por meio da API!
