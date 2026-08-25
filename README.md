# TudoList

App pessoal de Compras, Tarefas e Lembretes — simples, rápido, 100% offline
(os dados ficam salvos no navegador do próprio usuário via localStorage).

## Deploy no Vercel

### Opção 1 — pelo site (mais fácil)
1. Crie uma conta em https://vercel.com (pode entrar com GitHub, GitLab ou e-mail).
2. Clique em "Add New" → "Project".
3. Escolha "Deploy" a partir de uma pasta / arraste esta pasta (`tudolist-vercel`)
   ou primeiro suba esta pasta para um repositório no GitHub e importe o repositório.
4. Não é preciso configurar nada — é um site estático puro (`index.html`).
5. Clique em "Deploy". Em menos de 1 minuto você recebe uma URL tipo
   `https://tudolist-seunome.vercel.app`.

### Opção 2 — pela linha de comando (CLI)
```
npm i -g vercel
cd tudolist-vercel
vercel login
vercel --prod
```

## Depois do deploy
- Abra a URL gerada pelo Vercel no celular (Chrome no Android ou Safari no iPhone).
- Toque em "Adicionar à tela inicial" para usar como um app, em tela cheia.
- Os dados são salvos localmente no navegador de cada aparelho — não há
  banco de dados nem servidor por trás, e nada é compartilhado entre
  aparelhos diferentes.
