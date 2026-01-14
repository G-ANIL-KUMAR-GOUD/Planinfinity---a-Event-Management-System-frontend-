import { Pipe, PipeTransform } from '@angular/core';
import { EventData } from '../models/event.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(events: any[], category: string): EventData[] {
    if(!events) return [];
    return events.filter(event => event.category === category);
  }

}
