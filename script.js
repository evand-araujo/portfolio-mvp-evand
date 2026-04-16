const projetos = [
  {
    nome: "Landing Page",
    descricao: "Página moderna responsiva",
    link: "#"
  },
  {
    nome: "Sistema de Login",
    descricao: "Tela de autenticação simples",
    link: "#"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" class="btn">Ver</a>
  `;

  lista.appendChild(div);
});
