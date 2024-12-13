export default class FormaterTXT {
  output(dados) {
    let txt = `Relatório de Nomes de Cidades
    =============================\n`;

    for (let i = 0; i < dados.length; i++) {
      txt += `- ${dados[i]['Nome']}\n`;
    }

    return txt;
  }
}
