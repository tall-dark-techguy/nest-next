import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const data = this.appService.getHello();
    return { data };
  }

  @Post('message')
  async message(@Body() body: any) {
    return {
      message:
        'Your message has been received. We will reach back to you shortly.',
      data: body,
    };
  }

  @Get('photos')
  getPhotos() {
    const photos = [
      {
        title: 'Travelling the world',
        url: 'https://images.pexels.com/photos/16628553/pexels-photo-16628553/free-photo-of-young-man-on-a-motorcycle-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        title: 'A beautiful realm',
        url: 'https://images.pexels.com/photos/27744785/pexels-photo-27744785/free-photo-of-a-person-holding-a-photo-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        title: 'Soulistical music',
        url: 'https://images.pexels.com/photos/27350492/pexels-photo-27350492/free-photo-of-tunisian-doors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        title: 'Going deeper into the universe',
        url: 'https://images.pexels.com/photos/15804623/pexels-photo-15804623/free-photo-of-back-view-of-a-couple-running-on-a-street-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
    ];

    return {
      data: { photos },
    };
  }
}
