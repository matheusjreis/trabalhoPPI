window.onload = () => { 
  setImagemProduto("https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80");
};

function adicionarComentario() {
    openModal();
}


function openModal() {
    // document.getElementById("backdrop").style.display = "block"
    document.getElementById("idModalComentario").style.display = "block"
    document.getElementById("idModalComentario").classList.add("show");
}


function closeModal() {
    // document.getElementById("backdrop").style.display = "none"
    document.getElementById("idModalComentario").style.display = "none";
    document.getElementById("idModalComentario").classList.remove("show");
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
        closeModal();
      });
}

function setImagemProduto(url) { 
  console.log(document.getElementById("imgProdutoAnuncio"));
  document.getElementById("imgProdutoAnuncio").src = url;
}