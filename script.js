function openModal() {
    document.getElementById('pdfModal').style.display = 'flex'; // Mostrar la ventana flotante
    document.getElementById('pdfViewer').src = 'pdf/black.pdf'; // Ruta al PDF
}

function closeModal() {
    document.getElementById('pdfModal').style.display = 'none'; // Ocultar la ventana flotante
    document.getElementById('pdfViewer').src = ''; // Limpiar la ruta del PDF
}
