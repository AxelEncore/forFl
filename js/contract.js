// js/contract.js
function formatContractDate(value) {
    if (!value) {
        return '';
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        const [year, month, day] = value.split('-');
        return `${day}.${month}.${year}`;
    }

    return value;
}

async function generateContractPDF(data) {
    const { jsPDF } = window.jspdf;
    const contractDate = formatContractDate(data.contractDate);
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
    doc.text("г. " + data.city + " «" + contractDate + "»", 20, 40);
    doc.text(data.customerFullname + ", именуемый Заказчиком, и " + data.executorFullname + ", именуемый Исполнителем...", 20, 55);
    
    doc.save(`Договор_${data.contractNumber}.pdf`);
}