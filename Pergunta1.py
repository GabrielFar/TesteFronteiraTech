nota1, peso1 = map(float, input("Digite a nota e o peso da prova 1 separados por espaço: ").split())
nota2, peso2 = map(float, input("Digite a nota e o peso da prova 2 separados por espaço: ").split())
nota3, peso3 = map(float, input("Digite a nota e o peso da prova 3 separados por espaço: ").split())
print(f"Média final: {(nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3):.2f}")