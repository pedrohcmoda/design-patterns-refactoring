import CitiesReporter from './CitiesReporter.js';

export default class ReportFacade {
    constructor(formatter) {
        this.formatter = formatter;
        this.citiesReporter = new CitiesReporter(formatter);
    }

    generateReport(filePath) {
        const citiesData = this.citiesReporter.loadData(filePath);
        return this.formatter.output(citiesData);
    }
}
