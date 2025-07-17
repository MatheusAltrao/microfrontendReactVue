<h1>🔧 Como rodar o projeto</h1>

<p>Para rodar qualquer uma das aplicações (host, remote-1 ou remote-2), utilize os seguintes comandos:</p>

<pre><code>npm install
npm run build && npm run preview
</code></pre>

<p>O comando <code>build</code> compila a aplicação com Vite, e o <code>preview</code> sobe um servidor local para servir o conteúdo gerado.</p>

<hr>

<h2>📦 Acesso ao remoteEntry.js</h2>

<p>Após o build e preview, os arquivos gerados pelo <strong>Module Federation</strong> ficam disponíveis via HTTP.</p>

<p>Exemplo (para o <strong>remote-2</strong>):</p>

<pre><code>http://localhost:4174/assets/remoteEntry.js</code></pre>

<p>Essa URL é usada pelo host para importar dinamicamente os componentes expostos.</p>

<hr>


<h1>1. Introdução</h1>
<p><strong>O que são Microfrontends?</strong><br>
Microfrontends são uma abordagem arquitetural que divide uma aplicação front-end em partes menores, independentes e reutilizáveis, chamadas de “microfrontends”.<br>
Eles funcionam como pequenos apps que são integrados em uma aplicação principal — o host ou shell.<br>
Inspiram-se na ideia dos microsserviços, mas aplicados ao front-end.<br><br>
Cada microfrontend pode ser feito com diferentes tecnologias, como React, Vue ou Angular, o que dá mais liberdade para as equipes.
</p>

<hr>

<h1>2. Por que usar?</h1>
<ul>
  <li><strong>Isolamento entre partes da aplicação</strong><br>
  Cada microfrontend é independente — se um falhar, os demais continuam funcionando normalmente.</li><br>
  
  <li><strong>Flexibilidade tecnológica</strong><br>
  Equipes podem escolher a tecnologia mais adequada (React, Vue, Angular...), sem comprometer o resto da aplicação.</li><br>
  
  <li><strong>Repositórios separados</strong><br>
  Cada microfrontend pode estar em um repositório próprio, o que facilita o versionamento, controle e manutenção.</li><br>
  
  <li><strong>Desenvolvimento paralelo</strong><br>
  Múltiplas equipes trabalham simultaneamente em diferentes partes do sistema, acelerando a entrega.</li>
</ul>

<hr>

<h1>3. Origem</h1>
<ul>
  <li>Conceito surgiu no projeto <strong>Mosaic da Zalando</strong> (2015).</li>
  <li>Ganhou visibilidade quando foi popularizado pela <strong>ThoughtWorks</strong> em 2016.</li>
</ul>

<hr>

<h1>4. Arquitetura</h1>
<p><strong>Shell (Host):</strong></p>
<ul>
  <li>Responsável por orquestrar toda a aplicação.</li>
  <li>Renderiza o layout principal.</li>
  <li>Gerencia autenticação.</li>
  <li>Carrega os microfrontends dinamicamente.</li>
</ul>

<p><strong>Comunicação entre Microfrontends:</strong></p>
<ul>
  <li><strong>Top-down:</strong> envio de dados via props/atributos.</li>
  <li><strong>Bottom-up:</strong> eventos customizados (Custom Events).</li>
  <li><strong>Alternativas:</strong> uso de Event Bus (Pub/Sub), para comunicação desacoplada.</li>
</ul>

<hr>

<h1>5. Estratégias de Implementação</h1>

<p><strong>Abordagens Clássicas:</strong></p>
<ul>
  <li><strong>iFrames:</strong> oferecem isolamento, mas têm UX ruim.</li>
  <li><strong>Build-time (NPM):</strong> simples, mas não permite deploys independentes.</li>
  <li><strong>Web Components:</strong> nativos e reutilizáveis, porém com desafios de compatibilidade e compartilhamento de libs.</li>
</ul>

<p><strong>Abordagens Modernas:</strong></p>
<ul>
  <li><strong>Module Federation (Webpack 5):</strong></li>
  <ul>
    <li>Permite carregamento dinâmico de módulos.</li>
    <li>Suporte a deploys independentes.</li>
    <li>Usa três conceitos principais:</li>
    <ul>
      <li><strong>Host (ou shell):</strong> quem consome.</li>
      <li><strong>Remote:</strong> quem exporta.</li>
      <li><strong>Shared:</strong> dependências compartilhadas.</li>
    </ul>
  </ul>
</ul>

<hr>

<h1>6. Prós e Contras</h1>

<p>✅ <strong>Vantagens:</strong></p>
<ul>
  <li>Times autônomos.</li>
  <li>Deploys independentes.</li>
  <li>Liberdade tecnológica.</li>
  <li>Repositórios separados.</li>
</ul>

<p>❌ <strong>Desafios:</strong></p>
<ul>
  <li>Aumento da complexidade na aplicação.</li>
  <li>Consistência visual e de experiência (UI/UX).</li>
  <li>Versionamento entre micros pode quebrar o sistema.</li>
  <li>Dificuldade na integração de tipagem (ex: com TypeScript).</li>
</ul>

<p>🛠️ <strong>Mitigações:</strong></p>
<ul>
  <li>Uso de Design System compartilhado.</li>
  <li>Criar boilerplates e padronizar CI/CD.</li>
  <li>Documentação clara entre os times.</li>
</ul>

<hr>

<h1>7. Casos de Uso</h1>
<ul>
  <li><strong>Dashboards modulares:</strong> Cada módulo (relatórios, finanças, métricas) pode ser um microfrontend separado.</li>
  <li><strong>Modernização de aplicações legadas:</strong> Permite adicionar novas funcionalidades modernas sem precisar reescrever tudo de uma vez.</li>
</ul>

<hr>

<h1>8. Conclusão</h1>
<p>
Microfrontends são uma solução poderosa para construir aplicações escaláveis e modulares, especialmente quando há vários times trabalhando em paralelo.<br>
Trazem muitos benefícios, mas exigem maturidade técnica e uma arquitetura bem planejada.
</p>

<h1>Arquitetura com Vite + Module Federation</h1>

<p>Estamos utilizando uma arquitetura baseada em <strong>Microfrontends</strong>, onde:</p>

<ul>
  <li><strong>Host:</strong> aplicação principal construída em <code>React</code>, responsável por orquestrar toda a interface.</li>
  <li><strong>Remote-1:</strong> microfrontend em <code>React</code>, com componentes expostos via Module Federation.</li>
  <li><strong>Remote-2:</strong> microfrontend em <code>Vue.js</code>, também com componentes expostos via Module Federation.</li>
  <li>Todas as aplicações utilizam <code>Vite</code> com o plugin <code>@originjs/vite-plugin-federation</code>.</li>
</ul>

<hr>

<h2>🔗 Estrutura dos Módulos</h2>

<h3>Host (React)</h3>
<p>O host importa os microfrontends definidos na configuração <code>remotes</code>:</p>

<pre><code>remotes: {
  remote1: "http://localhost:4173/assets/remoteEntry.js",
  remote2: "http://localhost:4174/assets/remoteEntry.js",
}
</code></pre>

<p>Isso permite carregar os microfrontends dinamicamente no runtime.</p>

<h3>Remote 1 (React)</h3>
<p>Exposição de módulos no <code>remote-1</code>:</p>

<pre><code>exposes: {
  "./Button": "./src/components/Button.tsx",
  "./App": "./src/App.tsx",
}
</code></pre>

<p>Esses componentes podem ser consumidos por outras aplicações, como o host.</p>

<h3>Remote 2 (Vue)</h3>
<p>Exposição de módulos no <code>remote-2</code>:</p>

<pre><code>exposes: {
  "./HelloWorld": "./src/components/HelloWorld.vue",
  "./HelloWorldWrapper": "./src/components/HelloWorldWrapper.ts",
}
</code></pre>

<p>Permite integração entre Vue e React dentro de um mesmo ecossistema de microfrontends.</p>

<h3>Shared (Dependências Compartilhadas)</h3>
<p>Evita duplicação de bibliotecas comuns entre host e remotes:</p>

<ul>
  <li>No React:</li>
  <pre><code>shared: ["react", "react-dom"]</code></pre>
  <li>No Vue:</li>
  <pre><code>shared: ["vue"]</code></pre>
</ul>

<p>Isso garante que todos os apps usem a mesma instância das bibliotecas, evitando conflitos e otimizando a performance.</p>

