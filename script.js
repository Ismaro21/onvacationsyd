function openModal() {
    document.getElementById('pdfModal').style.display = 'flex'; // Mostrar la ventana flotante
    document.getElementById('pdfViewer').src = 'catalogo.pdf'; // Ruta al PDF
}

function closeModal() {
    document.getElementById('pdfModal').style.display = 'none'; // Ocultar la ventana flotante
    document.getElementById('pdfViewer').src = ''; // Limpiar la ruta del PDF
}
function openblack() {
    document.getElementById('pdfModal').style.display = 'flex'; // Mostrar la ventana flotante
    document.getElementById('pdfViewer').src = 'black.pdf'; // Ruta al PDF
}

function closeblack() {
    document.getElementById('pdfModal').style.display = 'none'; // Ocultar la ventana flotante
    document.getElementById('pdfViewer').src = ''; // Limpiar la ruta del PDF
}
