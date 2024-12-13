import fs from 'fs';

export default class CitiesReporter {
  constructor(formatter) {
    this.formatter = formatter;
  }

  //caso seja um set de dados ja, ele so retorna em vez de tentar ler
  loadData(dataSet) {
    if (typeof dataSet === 'object') {
      return dataSet;
    }
    try {
      const data = JSON.parse(fs.readFileSync(dataSet, 'utf-8'));
      return data;
    } catch (err) {
      console.error(`Erro ao carregar dados do arquivo ${dataSet}:`, err);
      return null;
    }
  }

  generateReport(filePath) {
    const cities = this.loadData(filePath);
    return this.formatter.output(cities);
  }
}
