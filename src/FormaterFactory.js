import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';

export default class FormaterFactory {
    // facilita a criação de formatadores sem acoplamento direto
    static create(formatType) {
        switch (formatType) {
            case 'HTML':
                return new FormaterHTML();
            case 'TXT':
                return new FormaterTXT();
            default:
                throw new Error(`Formato desconhecido: ${formatType}`);
        }
    }
}
