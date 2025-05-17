# Pomodoro App

Desenvolvimento de um app de Pomodoro, projeto simples para introdução ao desenvolvimento com React Native.

## 🔨 Funcionalidades do projeto

- Seleção de diferentes modos de temporizador: Foco, Pausa Curta e Pausa Longa.
- Contador regressivo animado com opções de iniciar e pausar.
- Exibição de ícones interativos para controle do temporizador.
- Criação, edição e exclusão de tarefas;
- Possibilidade de marcar a tarefa como concluido;
- Alterar o idioma da app para: Português, Inglês e Espanhol;
- Mudança de tema: Mode Escuro, Claro e tema padrão.

|                               |                               |                               | 
| :---------------------------: | :---------------------------: | :---------------------------: | 
| [![1-startA.png](https://i.postimg.cc/pXkxcCpv/1-startA.png)](https://postimg.cc/qzt9z8sD) | [![1-startB.png](https://i.postimg.cc/dVxFw02S/1-startB.png)](https://postimg.cc/0zDFCPHp) | [![1-startC.png](https://i.postimg.cc/2S6YsWZZ/1-startC.png)](https://postimg.cc/Vd32Md4f) | 
| [![Scree1.gif](https://i.postimg.cc/J080ZQzF/Screen1.gif)](https://postimg.cc/vgPGdf97) | [![Screen2.gif](https://i.postimg.cc/NG85YZNv/Screen2.gif)](https://postimg.cc/kD4nvY3T) | [![Screen3.gif](https://i.postimg.cc/KvJj3BS9/Screen3.gif)](https://postimg.cc/SJYkwXK8) |


## ✔️ Técnicas e tecnologias utilizadas

O desenvolvimento do projeto envolve as seguintes tecnologias e técnicas:

- **`useState` e `useRef`**: Gerenciamento de estado e referência de intervalos.
- **Componentização**: Criação de componentes reutilizáveis como `FokusButton`, `ActionButton` e `Timer`.
- **`StyleSheet`**: Estilização customizada para layouts e interatividade.
- **Imagens e SVGs**: Utilização de imagens locais e ícones SVG personalizados.
- **`setInterval`**: Lógica de contagem regressiva com controle de interrupção.
- **React Native e Expo**: Configuração e execução do projeto.
- **Simulação de Pomodoro**: Estrutura para foco e pausas integradas ao design.
- **React Context API**: Utilizada para o gerenciamento de estado global da aplicação, permitindo compartilhar e manter o estado das tarefas criadas pelo usuário entre diferentes componentes de forma eficiente.
- **Async Storage**: Responsável por armazenar os dados da tarefa, a seleção de idioma e tema preferido do utilizador de forma local e persistente no dispositivo, mesmo após o app ser fechado ou reiniciado.
- **Menu Drawer**: Menu lateral implementado para facilitar a navegação do usuário entre as diferentes seções da aplicação de forma intuitiva e acessível.
- **I18N**: Tratamento e configuração que possibilitar a troca de idiomas na app: pt-BR, es-ES, en-US.
- **Dark Mode**: Possibilidade de alterar a app para os seguintes temas: Dark Mode, White Mode e Default Mode.

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
   - Melhora a tela de apresentação da troca de idioma.

- **Outras Melhorias**:
   - Refatorar o código para melhor legibilidade e manutenção;
   - Reorganizar a estrutura da pasta de contextos;
   - Corrigir o bug da statusBar ao alternar entre temas;
   - Resolver a perda de estilização do botão durante a troca de tema.

- **Funcionalidades Avançadas**:
   - Implementar a possibilidade de alterar idioma, da suporte: Inglês e Espanhol. ✅
   - Implementar a troca de modo: Dark Mode e White Mode. ✅
   - Melhorar a acessibilidade (TalkBack e VoiceOver).
   - Desenvolver integração como camera.
   - Armazenamento e upload de arquivos.
   - Push notification:
      - Alerta relacionado ao aplicativo (ex: lembretes, atualizações);
      - Aviso ao término de um ciclo Pomodoro;
      - Notificação informando o fim da pausa curta ou da pausa longa.


  
