import { Component, OnInit } from '@angular/core';
import * as mammoth from 'mammoth';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-documents',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documentPath = 'assets/documents/SeniorAWSCloudEngineerResume.docx';
  constructor() {}

  ngOnInit() { 
    this.previewWordDocument(this.documentPath);  // Preview document on component load
    // Preview document when component initializes
  }

  // Function to preview the Word document
  previewWordDocument(path: string) {
    fetch(path)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        mammoth.convertToHtml({ arrayBuffer })
          .then((result) => {
            const previewContainer = document.getElementById('documentPreview');
            if (previewContainer) {
              previewContainer.innerHTML = result.value;
            }
          })
          .catch((error) => {
            console.error('Error converting document:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
      });
  }

  downloadDocument(path: string, fileName: string) {
    const link = document.createElement('a');
    link.href = path;
    link.download = fileName;  // Set the downloaded file's name
    link.click();  // Simulate the click event to trigger download
  }
}
