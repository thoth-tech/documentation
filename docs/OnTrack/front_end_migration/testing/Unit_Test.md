# Unit Test

```JavaScript
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

_Replace the (NotFoundComponent) component name with your choosen compoent name._

```console
npm install
npm test
```

![unit test terminal output]("imgs/unit_test_terminal_output.png")

```console
git add .
git commit -m “Migrate: Add unit test”
git push
```
