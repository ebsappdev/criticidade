function gerarPDF() {
    const formularioDivs = document.querySelectorAll('.formulario');

    formularioDivs.forEach((div, index) => {
        const width = div.offsetWidth;
        const height = div.offsetHeight;

        domtoimage.toPng(div)
            .then(function (dataUrl) {
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);

                if (index !== formularioDivs.length - 1) {
                    pdf.addPage();
                } else {
                    pdf.save('formulario.pdf');
                }
            })
            .catch(function (error) {
                console.error('Erro ao gerar PDF:', error);
            });
    });
}
