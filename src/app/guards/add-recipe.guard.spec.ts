import { TestBed, async, inject } from '@angular/core/testing';

import { AddRecipeGuard } from './add-recipe.guard';

describe('AddRecipeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddRecipeGuard]
    });
  });

  it('should ...', inject([AddRecipeGuard], (guard: AddRecipeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
