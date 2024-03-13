import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  private colors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FFD700',
    '#9400D3',
    '#00CED1',
    '#FF1493',
    '#32CD32',
    '#8A2BE2',
    '#FF8C00',
    '#7CFC00',
    '#FF4500',
    '#00FFFF',
    '#8B0000',
    '#4682B4',
    '#A52A2A',
    '#2E8B57',
    '#FF69B4',
    '#191970',
    '#FF6347',
    '#00BFFF',
    '#008080',
    '#BC8F8F',
    '#3CB371',
    '#FFA07A',
    '#40E0D0',
    '#663399',
    '#ADFF2F',
    '#6A5ACD',
    '#8B4513',
    '#228B22',
    '#FF00FF',
    '#1E90FF',
    '#DC143C',
    '#FFE4B5',
    '#20B2AA',
    '#DB7093',
    '#5F9EA0',
    '#FF00FF',
    '#DAA520',
    '#8B008B',
    '#FA8072',
    '#00FF7F',
    '#800000',
    '#BA55D3',
    '#00FF00',
    '#483D8B',
    '#FF69B4',
    '#FF7F50',
    '#6495ED',
  ];

  public getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
