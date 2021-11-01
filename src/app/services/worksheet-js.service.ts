import { Injectable } from '@angular/core';

import * as XLSX from 'xlsx';
// import * as XLSXStyle from "xlsx-style";
// const XLSTYLE = require('xlsx-style');

@Injectable({
  providedIn: 'root'
})
export class WorksheetJSService {

  constructor() { }

  ExportExcel(data: any, bookName: string, fileDownloadName: string){
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    this.wrapAndCenterCell(ws.A1);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, bookName);

    /* save to file and download */
    XLSX.writeFile(wb, `${fileDownloadName}.xlsx`);
  }

  private wrapAndCenterCell(cell: XLSX.CellObject) {
    const wrapAndCenterCellStyle = {
      alignment: { wrapText: true, vertical: 'center', horizontal: 'center' },
      fill: {
        fgColor: {rgb: "FF000000"},
        bgColor: {rgb: "FFFFFFFF"}
      },
      font: { name: "arial" },
     };
    this.setCellStyle(cell, wrapAndCenterCellStyle);
  }

  private setCellStyle(cell: XLSX.CellObject, style: {}) {
    cell.s = style;
  }

}
