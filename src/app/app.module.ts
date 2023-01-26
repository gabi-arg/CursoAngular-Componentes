import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    MenuComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
