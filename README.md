![](thumbnail.png)

# Pomodoro App

Desenvolvimento de um app de Pomodoro, projeto simples para introdução ao desenvolvimento com React Native.

## 🔨 Funcionalidades do projeto

- Seleção de diferentes modos de temporizador: Foco, Pausa Curta e Pausa Longa.
- Contador regressivo animado com opções de iniciar e pausar.
- Exibição de ícones interativos para controle do temporizador.
- Criação, edição e exclusão de tarefas;
- Possibilidade de marcar a tarefa como concluido;

<img src="screen1.gif" width="45%" style="display:inline-block; margin-right:10px;" />
<img src="screen2.gif" width="45%" style="display:inline-block;" />

## ✔️ Técnicas e tecnologias utilizadas

O desenvolvimento do projeto envolve as seguintes tecnologias e técnicas:

- **`useState` e `useRef`**: Gerenciamento de estado e referência de intervalos.
- **Componentização**: Criação de componentes reutilizáveis como `FokusButton`, `ActionButton` e `Timer`.
- **`StyleSheet`**: Estilização customizada para layouts e interatividade.
- **Imagens e SVGs**: Utilização de imagens locais e ícones SVG personalizados.
- **`setInterval`**: Lógica de contagem regressiva com controle de interrupção.
- **React Native CLI**: Configuração e execução do projeto.
- **Simulação de Pomodoro**: Estrutura para foco e pausas integradas ao design.
- **React Context API**: Utilizada para o gerenciamento de estado global da aplicação, permitindo compartilhar e manter o estado das tarefas criadas pelo usuário entre diferentes componentes de forma eficiente.
- **Async Storage**: Responsável por armazenar os dados da tarefa de forma local e persistente no dispositivo, mesmo após o app ser fechado ou reiniciado.
- **Menu Drawer**: Menu lateral implementado para facilitar a navegação do usuário entre as diferentes seções da aplicação de forma intuitiva e acessível.


## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, siga os passos abaixo para executá-lo:

1. Certifique-se de que possui o ambiente de desenvolvimento React Native configurado ([guia oficial](https://docs.expo.dev/get-started/set-up-your-environment/)).

2. No terminal, navegue até a pasta do projeto e instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm start
```

4. Com o expo em execução, você pode abrir o app no seu navegador, em dispositivos virtuais (android | ios) ou no seu celular através do Expo Go


# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Passos para contribuir:

1. **Faça um fork do projeto**.

No GitHub, clique em "Fork" no canto superior direito da página do repositório.

2. **Clone o repositório forkado**:

```bash   
git clone https://github.com/seu-usuario/fokus.git
```
3. **Crie uma nova branch**:

```bash
Copiar código
git checkout -b feature/nova-funcionalidade
```

4. **Commit suas mudanças**:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

5. **Envie para o seu fork no GitHub**:

```bash
git push origin feature/nova-funcionalidade
```

6. **Abra um pull request**:
- No GitHub, vá até o seu fork e clique em "Compare & Pull Request".

# Desenvolvimento Futuro

- **Melhorias na Interface**:
   - Trocar os Splash scree.
   - Melhorar a responsividade em dispositivos móveis.
- **Funcionalidades Avançadas**:
   - Implementar a possibilidade de alterar idioma, da suporte: Inglês e Espanhol.
   - Melhorar a acessibilidade.
   - Implementar a troca de modo: Dark Mode e White Mode.
