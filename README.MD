# Documentação Resumida - Refatoração com Padrões de Projeto

Alunos: Pedro Henrique Cunha Moda e Carlos Koiti Yamanaka. <br/>
Repositorio com projeto disponivel em: [github.com/pedrohcmoda/design-patterns-refactoring](https://github.com/pedrohcmoda/design-patterns-refactoring)

## Padrões Aplicados

- **Padrão Criacional - Factory Method**  
  **FormaterFactory** -> criada para facilitar a geração de objetos **Formater** (HTML, TXT) sem acoplamento direto, permitindo adicionar novos tipos de formatação no futuro sem modificar o código existente.

- **Padrão Estrutural - Facade**  
  **ReportFacade** -> uma interface simplificada para gerar relatórios. Ao invés de lidar com detalhes de carregamento de dados e formatação, ela fornece uma maneira simples de gerar o relatório no formato desejado.

- **Padrão Comportamental - Strategy**  
  **FormaterHTML** e **FormaterTXT** -> implementação da interface de formatação, permitindo que o formato do relatório seja alterado sem mudanças no código cliente, aplicação direta do padrão Strategy.

## Refatorações Aplicadas

- **Responsabilidade Unica**: Cada classe agora tem uma única responsabilidade. A responsabilidade de carregar dados, formatar e gerar relatórios estão bem separadas.
- **Aberto/Fechado**: O código está aberto para extensões, como novos tipos de formatação, sem precisar modificar o código existente.  
- **Inversão de Dependências**: As classes dependem de abstrações (formatadores) e não de implementações concretas, promovendo flexibilidade.