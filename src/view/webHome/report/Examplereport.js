
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {


    const doc = new jsPDF("p", "mm", "a4");


    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    // x=210 y=295
    // doc.text(10,20,'test','left');
    // doc.text(10,30,'test','center');
    // doc.text(10,40,'test','right');
    // doc.setFontSize(20);
    // doc.text(10,50,'test','left');
    // doc.setFontSize(50);
    // doc.text(10,60,'test','left');
    // doc.setTextColor(255,255,0)
    // doc.text(10,70,'test','left');

    
    // doc.setDrawColor(255,255,100);
    // // doc.setFillColor(200,200,200);
    // doc.rect(10,100,30,10,'D');
    // doc.setFillColor(200,200,200);
    // doc.rect(10,120,30,10,'DF');
    // doc.setFillColor(200,200,200);
    // doc.rect(10,140,30,10,'F');
    
    // doc.addPage();

    // doc.setTextColor('red');
    // doc.setFontSize(20);
    // doc.rect(10,20,30,10);
    // doc.text(10+(30/2),20+(10/2),'testing','left');


    let hpage = 10;
//190 กว้าง 
    // doc.rect(10,hpage,190,10)

    doc.rect(11,hpage,190*0.1,10)
    doc.text(11+((190*0.1)/2),hpage+(10/2),'ลำดับ','center');

    doc.rect(30,hpage,190*0.1,10)
    doc.text(30+((190*0.1)/2),hpage+(10/2),'customer','center');

    doc.rect(30+(190*0.1),hpage,190*0.2,10)
    doc.text(30+((190*0.1)+((190*0.2)/2)),hpage+(10/2),'product','center');

    doc.rect(30+(190*0.1)+(190*0.2),hpage,190*0.2,10);
    doc.text(30+(190*0.1)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'item','center');

    doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'price','center')

    doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'sum','center')

    hpage+=10
    let sum = 0;
    let total = 0;
    let sumary = 0;
    const uniqueCustomers = new Set();
    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        sum += element.price;
        let item = parseInt(element.item);
        let price = parseInt(element.price);
        total = item * price;
        sumary += total;
        uniqueCustomers.add(element.customer);
        if (hpage>280) {
            doc.addPage();
            hpage = 10;
        }
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }
        doc.rect(11,hpage,190*0.1,10,'DF')
        doc.text(11+((190*0.1)/2),hpage+(10/2),`${index+1}`,'center');
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }
        doc.rect(30,hpage,190*0.1,10,'DF')
        doc.text(30+((190*0.1)/2),hpage+(10/2),element.customer,'center');
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }

        doc.rect(30+(190*0.1),hpage,190*0.2,10,'DF')
        doc.text(30+((190*0.1)+((190*0.2)/2)),hpage+(10/2),element.product,'center');
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }

        doc.rect(30+(190*0.1)+(190*0.2),hpage,190*0.2,10,'DF');
        doc.text(30+(190*0.1)+(190*0.2)+((190*0.2)/2),hpage+(10/2),element.item.toString(),'center');
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }

        doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
        doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),element.price.toString(),'center')
        if (index % 2 === 0) {
            doc.setFillColor('red');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีเทาอ่อน
        } else {
            doc.setFillColor('green');
            doc.setDrawColor('black');
            // doc.setDrawColor('black'); // สีขาว
        }

        doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
        doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),total.toString(),'center')

        console.log(element);
        hpage +=10;
    }
    doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),sum.toString(),'center');

    let sumy = sumary/uniqueCustomers.size;
    
    doc.rect(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(30+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),sumy.toString(),'center')
    
    console.log(sum);
    console.log(sumary/uniqueCustomers.size);


window.open(doc.output('bloburl'))
   


}
    export default Examplereport;