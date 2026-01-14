import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.html'
})
export class CertificatesComponent {
  selectedCert: any = null;

  certificates = [
    {
      title: 'AWS Academy Machine Learning Foundations',
      issuer: 'AWS Academy',
      description: 'Completed foundational training in machine learning concepts, data analysis, and model evaluation.',
      image: 'assets/certs/certificates.1.jpg',
      date: 'December 06, 2024'
    },
    {
      title: 'Customer Experience Design',
      issuer: 'Alison (Online Learning Platform)',
      description: 'Learned key principles of customer experience design, service improvement, and user-centered thinking.',
      image: 'assets/certs/certificates.2.jpg',
      date: '2025'
    },
    {
      title: 'Certificate of Completion',
      issuer: 'National Incubation Center of Cambodia (NICC)',
      description: 'Successfully completed a professional program focused on innovation, entrepreneurship, and technology skills.',
      image: 'assets/certs/certificates.3.jpg',
      date: 'October 10, 2024'
    }
  ];

  openModal(cert: any) {
    this.selectedCert = cert;
    document.body.style.overflow = 'hidden'; // Stop background scroll
  }

  closeModal() {
    this.selectedCert = null;
    document.body.style.overflow = 'auto'; // Enable background scroll
  }
}