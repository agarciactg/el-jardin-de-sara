import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fab-whatsapp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fab-whatsapp.component.html',
  styleUrl: './fab-whatsapp.component.css'
})
export class FabWhatsappComponent {
  isOpen = false;
  message = '';

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.message.trim()) {
      const url = `https://wa.me/573222254664?text=${encodeURIComponent(this.message)}`;
      window.open(url, '_blank');
      this.message = '';
      this.isOpen = false;
    }
  }
}
