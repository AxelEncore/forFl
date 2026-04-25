// js/contract.js
async function generateContractPDF(data) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    });
    
    // ПРОБЛЕМА ЗДЕСЬ: шрифт не подключается
    doc.setFont('DejaVuSans', 'normal');
    
    doc.setFontSize(16);
    doc.text("ДОГОВОР № " + data.contractNumber, 105, 25, { align: 'center' });
    
    doc.setFontSize(11);
    doc.text("г. " + data.city + " «25.04.2026» 2026 г.", 20, 40);
    doc.text(data.customerFullname + ", именуемый Заказчиком, и " + data.executorFullname + ", именуемый Исполнителем...", 20, 55);
    
    doc.save(`Договор_${data.contractNumber}.pdf`);
}