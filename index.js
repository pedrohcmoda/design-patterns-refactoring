import FormaterFactory from './src/FormaterFactory.js';
import ReportFacade from './src/ReportFacade.js';

const filePath1 = './data/cidades-1.json';
const filePath2 = './data/cidades-2.json';

const htmlFormatter = FormaterFactory.create('HTML');
const txtFormatter = FormaterFactory.create('TXT');

const reportFacade1 = new ReportFacade(htmlFormatter);
const reportHtml = reportFacade1.generateReport(filePath1);
console.log('Relatório HTML para cidades-1.json:\n', reportHtml);

const reportFacade2 = new ReportFacade(txtFormatter);
const reportTxt = reportFacade2.generateReport(filePath2);
console.log('Relatório TXT para cidades-2.json:\n', reportTxt);
