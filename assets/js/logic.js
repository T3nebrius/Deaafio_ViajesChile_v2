var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function abrirModal() {
    var checkbox = document.getElementById('terms');
  
    if (checkbox.checked) {
        var myModal = new bootstrap.Modal(document.getElementById('modalTerminos'));
        myModal.show();
    }
  }

function aceptar() {
    alert('MENSAJE ENVIADO CON ÉXITO');
}