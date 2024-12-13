import FormaterHTML from './src/FormaterHTML';
import FormaterTXT from './src/FormaterTXT';
import CitiesReporter from './src/CitiesReporter';
import { describe, test, expect } from 'vitest';

describe('Teste de geração do relatorio', () => {

    test('deve gerar relatório HTML corretamente', () => {
        const formatter = new FormaterHTML();
        const reporter = new CitiesReporter(formatter);

        const mockData = {
            estados: [
                {
                    sigla: "AC",
                    nome: "Acre",
                    cidades: ["Rio Branco", "Cruzeiro do Sul"]
                },
                {
                    sigla: "AL",
                    nome: "Alagoas",
                    cidades: ["Maceió", "Arapiraca"]
                }
            ]
        };

        const htmlReport = reporter.generateReport(mockData);

        expect(htmlReport).toContain('<h1>Relatório de Nomes de Cidades</h1>');
        expect(htmlReport).toContain('<li>Rio Branco</li>');
        expect(htmlReport).toContain('<li>Arapiraca</li>');
        expect(htmlReport).toContain('<ul>');
        expect(htmlReport).toContain('</ul>');
    });

    test('deve gerar relatório TXT corretamente', () => {
        const formatter = new FormaterTXT();
        const reporter = new CitiesReporter(formatter);

        const mockData = [
            { Nome: "Afonso Cláudio" },
            { Nome: "Água Doce do Norte" },
            { Nome: "Águia Branca" }
        ];

        const txtReport = reporter.generateReport(mockData);

        expect(txtReport).toContain('Relatório de Nomes de Cidades');
        expect(txtReport).toContain('- Afonso Cláudio');
        expect(txtReport).toContain('- Águia Branca');
        expect(txtReport).toContain('=============================');
    });

});
