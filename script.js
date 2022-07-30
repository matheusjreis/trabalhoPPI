window.onload = () => {
  setImagemProduto("https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80");
};

function adicionarComentario() {
  openModal("idModalComentario");
}

function fecharModalComentario() {
  closeModal("idModalComentario");
}

function fecharModalImagemAnuncio() {
  closeModal("idModalImagemAnuncio");
}

function openModal(seletor) {
  document.getElementById(seletor).style.display = "block"
  document.getElementById(seletor).classList.add("show");
}

function abrirModalImagem() {
  openModal("idModalImagemAnuncio");
}

function limparNotas() {
  for (let i = 1; i <= 5; i++) {
    let element = document.getElementById(`iconeAvaliacao_${i}`);
    element.classList.remove("fa-solid");
    element.classList.add("fa-regular");
  }
}

function preencheAvaliacaoEstrela(nota) {

  limparNotas();
  for (let i = 1; i <= nota; i++) {
    let element = document.getElementById(`iconeAvaliacao_${i}`);
    element.classList.remove("fa-regular");
    element.classList.add("fa-solid");
  }
}

function closeModal(seletor) {
  document.getElementById(seletor).style.display = "none";
  document.getElementById(seletor).classList.remove("show");
}

function salvarComentario() {
  Swal.fire({
    title: 'Deseja salvar comentário?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Salvar',
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Comentário salvo com sucesso!', '', 'success')
    }
  }).finally(() => {
    closeModal("idModalComentario");
  });
}

function deletarComentario(numeroSequencia) {
  Swal.fire({
    title: 'Deseja deletar o comentário?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Sim',
    denyButtonText: `Não`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Comentário deletado com sucesso!', '', 'success')
    }
  });
}

function setImagemProduto(url) {
  let todasImagensProduto = document.getElementsByClassName("imgProdutoAnuncio");

  for (let i = 0; i < todasImagensProduto.length; i++) {
    todasImagensProduto[i].src = url;
  }
}