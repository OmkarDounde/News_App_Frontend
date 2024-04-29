import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordLimit',
})
export class WordLimitPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const words = value.split(' ');

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }

    return value;
  }
  // transform(value: string, limit: number = 100): { truncated: string; full: string } {
  //   if (!value) {
  //     return { truncated: '', full: '' };
  //   }

  //   if (value.length <= limit) {
  //     return { truncated: value, full: value };
  //   }

  //   const truncatedText = value.slice(0, limit);
  //   return { truncated: truncatedText, full: value };
  // }
}
