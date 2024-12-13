export default class FormaterHTML {

  output(dados) {
    let html = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    `;

    if (dados && dados.estados && Array.isArray(dados.estados)) {
      dados.estados.forEach(estado => {
        estado.cidades.forEach(cidade => {
          html += `  <li>${cidade}</li>\n`;
        });
      });
    } else {
      html += '<p>Nenhuma cidade encontrada.</p>';
    }

    html += `
      </ul>
      </body>
    </html>`;

    return html;
  }

}
