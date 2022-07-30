window.onload = () => { 
  setImagemProduto("https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80");
};

function adicionarComentario() {
    openModal("idModalComentario");
}


function openModal(seletor) {
    document.getElementById(seletor).style.display = "block"
    document.getElementById(seletor).classList.add("show");
}

function abrirModalImagem() {
  openModal("idModalImagemAnuncio");
}

function closeModal(seletor) {
    // document.getElementById("backdrop").style.display = "none"
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
      }).then(() => {
        closeModal("idModalComentario");
      });
}

function setImagemProduto(url) { 
  let todasImagensProduto = document.getElementsByClassName("imgProdutoAnuncio");

  for(let i = 0; i < todasImagensProduto.length; i++ ) {
    todasImagensProduto[i].src = url;
  }
}