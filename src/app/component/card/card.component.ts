import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  images = [
    {
      src: 'assets/image1.jpg',
      title: 'Living Room Design',
      description: 'A modern living room with elegant furniture.',
      relatedImages: [
        'assets/image1-1.jpg', 'assets/image1-2.jpg', 'assets/image1-3.jpg',
        'assets/image1-4.jpg', 'assets/image1-5.jpg', 'assets/image1-6.jpg',
        'assets/image1-7.jpg', 'assets/image1-8.jpg', 'assets/image1-9.jpg',
        'assets/image1-10.jpg'
      ]
    },
    {
      src: 'assets/image2.jpg',
      title: 'Kitchen Interior',
      description: 'A stylish kitchen with functional cabinets.',
      relatedImages: [
        'assets/image2-1.jpg', 'assets/image2-2.jpg', 'assets/image2-3.jpg',
        'assets/image2-4.jpg', 'assets/image2-5.jpg', 'assets/image2-6.jpg',
        'assets/image2-7.jpg', 'assets/image2-8.jpg', 'assets/image2-9.jpg',
        'assets/image2-10.jpg'
      ]
    },
    {
      src: 'assets/image3.jpg',
      title: 'Bedroom Interior',
      description: 'A cozy bedroom with modern decor.',
      relatedImages: [
        'assets/image3-1.jpg', 'assets/image3-2.jpg', 'assets/image3-3.jpg',
        'assets/image3-4.jpg', 'assets/image3-5.jpg', 'assets/image3-6.jpg',
        'assets/image3-7.jpg', 'assets/image3-8.jpg', 'assets/image3-9.jpg',
        'assets/image3-10.jpg'
      ]
    },
    {
      src: 'assets/image4.jpg',
      title: 'Dining Area',
      description: 'A luxurious dining area with ambient lighting.',
      relatedImages: [
        'assets/image4-1.jpg', 'assets/image4-2.jpg', 'assets/image4-3.jpg',
        'assets/image4-4.jpg', 'assets/image4-5.jpg', 'assets/image4-6.jpg',
        'assets/image4-7.jpg', 'assets/image4-8.jpg', 'assets/image4-9.jpg',
        'assets/image4-10.jpg'
      ]
    },
    {
      src: 'assets/image5.jpg',
      title: 'Office Workspace',
      description: 'A minimalistic and productive workspace design.',
      relatedImages: [
        'assets/image5-1.jpg', 'assets/image5-2.jpg', 'assets/image5-3.jpg',
        'assets/image5-4.jpg', 'assets/image5-5.jpg', 'assets/image5-6.jpg',
        'assets/image5-7.jpg', 'assets/image5-8.jpg', 'assets/image5-9.jpg',
        'assets/image5-10.jpg'
      ]
    },
    {
      src: 'assets/image6.jpg',
      title: 'Outdoor Patio',
      description: 'A relaxing patio space for outdoor activities.',
      relatedImages: [
        'assets/image6-1.jpg', 'assets/image6-2.jpg', 'assets/image6-3.jpg',
        'assets/image6-4.jpg', 'assets/image6-5.jpg', 'assets/image6-6.jpg',
        'assets/image6-7.jpg', 'assets/image6-8.jpg', 'assets/image6-9.jpg',
        'assets/image6-10.jpg'
      ]
    },
    {
      src: 'assets/image7.jpg',
      title: 'Bathroom Design',
      description: 'A sleek and modern bathroom interior.',
      relatedImages: [
        'assets/image7-1.jpg', 'assets/image7-2.jpg', 'assets/image7-3.jpg',
        'assets/image7-4.jpg', 'assets/image7-5.jpg', 'assets/image7-6.jpg',
        'assets/image7-7.jpg', 'assets/image7-8.jpg', 'assets/image7-9.jpg',
        'assets/image7-10.jpg'
      ]
    },
    {
      src: 'assets/image8.jpg',
      title: 'Kids Room',
      description: 'A vibrant and fun room designed for kids.',
      relatedImages: [
        'assets/image8-1.jpg', 'assets/image8-2.jpg', 'assets/image8-3.jpg',
        'assets/image8-4.jpg', 'assets/image8-5.jpg', 'assets/image8-6.jpg',
        'assets/image8-7.jpg', 'assets/image8-8.jpg', 'assets/image8-9.jpg',
        'assets/image8-10.jpg'
      ]
    }
  ];
  

  selectedCard: any = null;

  selectCard(card: any) {
    this.selectedCard = card;
  }

  clearSelection() {
    this.selectedCard = null;
  }
}
