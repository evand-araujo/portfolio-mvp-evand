const projetos = [
  { nome: "Projeto 1", descricao: "Site simples" },
  { nome: "Projeto 2", descricao: "Página de login" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(div);
});
